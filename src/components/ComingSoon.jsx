import EmailSignup from "./EmailSignup";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export default function ComingSoon() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#F5EDE1] text-center px-6">
      {/* Background SVG with lower opacity */}
      <div className="absolute inset-0  bg-[url('/images/random-shapes.svg')] bg-repeat opacity-20"></div>
      {/* Overlay for better contrast */}
      <div className="relative z-10"></div>
      {/* Header Section */}
      <h1 className="text-5xl font-bold text-[#D97B66] drop-shadow-md animate-fade-in">
        KinderHub is Coming Soon
      </h1>
      <p className="mt-4 text-lg text-[#E4B363] max-w-lg">
        Discover family-friendly events near you. Sign up to be the first to know when we launch!
      </p>

      {/* Email Signup */}
      <EmailSignup />

      {/* Social Media Links */}
      <div className="mt-6 flex space-x-6 text-[#A8B5A2] text-2xl">
        <a href="#" className="hover:text-[#D97B66] transition">
          <FaInstagram />
        </a>
        <a href="#" className="hover:text-[#D97B66] transition">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-[#D97B66] transition">
          <FaFacebook />
        </a>
      </div>

      {/* Footer */}
      <p className="mt-8 text-sm text-gray-600">
        &copy; 2025 KinderHub. All rights reserved.
      </p>
    </div>
  );
}