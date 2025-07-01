import { PenSquare, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import formatDate from "../lib/utils";
import axiosApi from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note,setNotes }) => {
  const handelDelete = async (e, id) => {
    e.preventDefault(); // Prevent the default link behavior
    if (!window.confirm("Are you sure you want to delete this note?")) return; // Exit if the user cancels
    try {
      await axiosApi.delete(`/notes/${id}`);
       setNotes((prev) => prev.filter((note) => note._id !== id));
      toast.success("Note Deleted Successfully"); // Reload the page to reflect the changes
    } catch (error) {
      console.log("Error deleting note:", error);
      toast.error("Failed to delete note");
    }
  };
  return (
    <Link
      to={`/notes/${note._id}`}
      className="card shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200 hover:border-blue-400"
      style={{
        background: "linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)",
        color: "#1e293b",
        textDecoration: "none",
        borderRadius: "1rem",
        overflow: "hidden",
      }}
    >
      <div className="card-body group transition-all duration-300 hover:bg-yellow-100/80">
        <h3 className="card-title text-blue-900 transition-colors">
          {note.title}
        </h3>
        <p className="text-teal-800 transition-colors">
          {note.content.length > 100
            ? note.content.substring(0, 100) + "..."
            : note.content}
        </p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-indigo-400 transition-colors">
            {formatDate(note.createdAt)}
          </p>
          <div className="flex items-center gap-1">
            <PenSquare className="h-4 w-4 text-yellow-500 hover:text-yellow-400 transition-colors" />
            <button
              className="btn btn-ghost btn-sm text-error hover:bg-blue-100/40 transition-colors"
              onClick={(e) => handelDelete(e, note._id)}
            >
              <Trash2Icon className="h-4 w-4 text-red-400 hover:text-red-600 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
