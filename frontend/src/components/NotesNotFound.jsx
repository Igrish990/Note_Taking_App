import { StickyNote } from "lucide-react";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl shadow-2xl p-12 border border-blue-100">
      <StickyNote size={64} color="#7c3aed" className="mb-6 drop-shadow-lg" />
      <h2 className="m-0 mb-2 text-3xl font-bold text-purple-700 drop-shadow-sm">
        No notes yet
      </h2>
      <p className="m-0 mb-6 text-gray-500 text-lg">
        You haven't created any notes. Start by creating your first note!
      </p>
      <button
        onClick={() => (window.location.href = "/create")}
        type="button"
        className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg px-8 py-3 text-lg font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:from-blue-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
      >
        Create Your First Note
      </button>
    </div>
  );
};

export default NotesNotFound;
