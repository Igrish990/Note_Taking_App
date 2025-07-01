import { Link } from "react-router";
import { PlusIcon } from "lucide-react";
const Navbar = () => {
  return (
    <header className="border-b border-gray-800 h-25 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 shadow-lg rounded-b-lg">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-4xl font-mono text-white tracking-tight">
            Note App
          </div>
          <div className="space-x-4 flex">
            <Link
              to="/"
              className="btn bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 transition"
            >
              Home
            </Link>
            <Link
              to="/create"
              className="btn bg-purple-700 text-white border border-purple-800 hover:bg-purple-800 flex items-center gap-2 transition"
            >
              <PlusIcon className="size-5" />
              Create Note
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
