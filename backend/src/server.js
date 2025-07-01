import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Importing routes and database connection
import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';


dotenv.config();
const app = express();
const port = process.env.PORT || 5001



// Middleware to parse JSON and URL-encoded data
app.use(cors({
    origin: 'http://localhost:5173',

}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rateLimiter)

// app.use((req, res, next) => {
//     console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
//     next(); 
// });


app.use('/api/notes', notesRoutes);
connectDB().then(() => {
    app.listen(port, () => {
        console.log('Connected to MongoDB');
        console.log('Server is running on port ' + port);
        console.log('http://localhost:' + port);
    });
}).catch((err) => {
    console.log("Connection failed due to " + err)
})
