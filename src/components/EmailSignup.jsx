import { useState } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for signing up, ${email}!`);
    setEmail("");
  };

  return (
<form
  onSubmit={handleSubmit}
  className="mt-4 flex flex-col items-center"
>
  <input
    type="email"
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="px-4 py-2 border border-[#A8B5A2] rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-[#A4C3D2]"
    required
  />
  <button
    type="submit"
    className="mt-4 px-6 py-2 bg-[#D97B66] text-white rounded-lg shadow-md hover:bg-[#c76858] transition-all duration-300"
  >
    Notify Me
  </button>
</form>

  );
}