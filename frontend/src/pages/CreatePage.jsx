import { ArrowBigLeft } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import axiosApi from "../lib/axios";
const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigator = useNavigate();
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("Title and content are required");
      return;
    }
    try {
      await axiosApi.post("/notes", {
        title,
        content,
      });
      toast.success("Note created successfully");
      navigator("/"); // Redirect to home page after successful creation
    } catch (error) {
      console.error("Error creating note:", error);
      
      if(error.response.status ===429){
        toast.error("Slow down ! You're creating notes too fast.",{duration: 5000,icon: "🚨"});
      }
      else {
        toast.error("Failed to create note");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="container mx-auto px-4 py-8 ">
        <div className="max-w-2xl mx-auto">
          <Link to="/" className="btn btn-primary mb-4">
            <ArrowBigLeft className="size-5 mr-2" />
            <span>Back to Home</span>
          </Link>
          <div className="card ">
            <div className="card-body ">
              <h2 className="card-title text-2xl font-bold mb-4 text-purple-700">
                Create Note
              </h2>
              <form onSubmit={handelSubmit} className="space-y-4">
                <div className="form-control mb-4">
                  <label className="label block mb-1">
                    <span className="label-text text-blue-800 font-semibold text-xl">
                      Title
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter note title"
                    className="input input-bordered block w-2/3 "
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label block mb-1">
                    <span className="label-text text-purple-800 font-semibold text-xl">
                      Content
                    </span>
                  </label>
                  <textarea
                    placeholder="Enter note content"
                    className="textarea textarea-bordered block w-2/3"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`btn btn-primary ${loading ? "loading" : ""}`}
                >
                  {loading ? (
                    <span className="text-gray-200">Creating...</span>
                  ) : (
                    <span className="text-white">Create Note</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
