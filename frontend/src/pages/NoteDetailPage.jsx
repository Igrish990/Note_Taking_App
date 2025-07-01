import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosApi from "../lib/axios";
import toast from "react-hot-toast";

import { LoaderIcon, ArrowLeft, DeleteIcon } from "lucide-react";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axiosApi.get(`/notes/${id}`);
        setNote(response.data);
      } catch (error) {
        console.error("Error fetching note:", error);
        toast.error("Failed to fetch note");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);
  console.log({ note });

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  if (!note) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-gray-500">Note not found.</div>
      </div>
    );
  }

  const handleBack = () => {
    navigate("/");
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    setSaving(true);
    try {
      await axiosApi.delete(`/notes/${id}`);
      toast.success("Note deleted");
      navigate("/");
    } catch (error) {
      console.error("Error deleting note:", error);
      toast.error("Failed to delete note");
    } finally {
      setSaving(false);
    }
  };

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Title and content cannot be empty");
      return;
    }
    setSaving(true);
    try {
      await axiosApi.put(`/notes/${id}`, note);
      toast.success("Note updated successfully");
      navigate("/");
    } catch (error) {
      console.error("Error updating note:", error);
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-300 via-white to-purple-100 relative py-10">
      <div className="absolute top-8 left-8">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all duration-150"
          disabled={saving}
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Notes
        </button>
      </div>
      <div className="absolute top-8 right-8">
        <button
          onClick={handleDelete}
          className="flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition-all duration-150"
          disabled={saving}
        >
          <DeleteIcon className="w-5 h-5" />
          {saving ? "Deleting..." : "Delete Note"}
        </button>
      </div>
      <div className="card-body max-w-2xl w-full mx-auto p-8 bg-white shadow-2xl rounded-2xl mt-16 border border-blue-200">
        <section className="mb-8 form-control">
          <h2 className="text-3xl font-bold mb-3 text-blue-700">Title</h2>
          <input
            type="text"
            placeholder="Note Title"
            value={note.title}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
            className=" w-full text-gray-800 bg-blue-100 rounded px-4 py-2 border border-blue-100"
          ></input>
        </section>
        <section className="mb-8 form-control">
          <h2 className="text-3xl font-bold mb-3 text-purple-700">Content</h2>
          <textarea
            placeholder="Write your note here..."
            value={note.content}
            onChange={(e) => setNote({ ...note, content: e.target.value })}
            className=" w-full bg-purple-50 border border-purple-200 rounded-xl p-5 text-gray-800 whitespace-pre-line min-h-[120px]"
          ></textarea>
        </section>

        <div className="flex justify-end mt-8">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition-all duration-150"
            disabled={saving}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailPage;
