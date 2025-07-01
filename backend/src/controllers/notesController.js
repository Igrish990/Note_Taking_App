import Note from "../models/Notes.js";
export async function getAllNotes(_, res) {
    try {
        const notes = await Note.find().sort({ createdAt: -1 }); // Sort by createdAt in descending order
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAllNotes controller:", error);
        res.status(500).json({ message: 'Error fetching notes', error: error.message });
    }
}

export async function getNoteById(req, res) {
    try {
        const singleNote = await Note.findById(req.params.id);
        if (!singleNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json(singleNote);
    } catch (error) {
        console.error("Error in singleNote controller:", error);
        res.status(500).json({ message: 'Error fetching notes', error: error.message });
    }
}



export async function createNote(req, res) {
    try {
        const { title, content } = req.body;
        const note = new Note({ title, content });
        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Error in createNotes controller:", error);
        res.status(500).json({ message: 'Internal server Error', error: error.message });
    }
}
export async function updateNote(req, res) {
    try {
        const { title, content } = req.body;

        const updatedNode = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
        if (!updatedNode) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json(updatedNode);
    } catch (error) {
        console.error("Error in updateNotes controller:", error);
        res.status(500).json({ message: 'Internal server Error', error: error.message });
    }
}
export async function deleteNote(req, res) {
    try {
        // Find the note by ID and delete it
        const deleteNote = await Note.findByIdAndDelete(req.params.id)
        if (!deleteNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json(deleteNote);
    }
    catch (error) {
        console.error("Error in deleteNotes controller:", error);
        res.status(500).json({ message: 'Internal server Error', error: error.message });
    }
}  