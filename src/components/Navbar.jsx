import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#F5EDE1] shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-[#A8B5A2]">
        KinderHub
      </Link>
      <div className="space-x-4">
        <Link to="/" className="text-[#D97B66] hover:underline">Home</Link>
        <Link to="/explore" className="text-[#D97B66] hover:underline">Explore</Link>
        <Link to="/about" className="text-[#D97B66] hover:underline">About</Link>
        <Link to="/login" className="text-[#D97B66] hover:underline">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;