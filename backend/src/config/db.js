import mongoose from 'mongoose';
export const connectDB= async () => {
  try {
    const dbURI = process.env.MONGO_URI || 'mongodb://localhost:27017/noteApp';
    // mongodb://localhost:27017/
    await mongoose.connect(dbURI);
    
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}