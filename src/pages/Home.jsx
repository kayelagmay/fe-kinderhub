function Home() {
    return (
      <div className="bg-[#FFFDF9] min-h-screen">
        <section className="text-center py-20 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#A8B5A2] mb-4">
            Welcome to KinderHub
          </h1>
          <p className="text-[#D97B66] text-lg mb-6 max-w-xl mx-auto">
            Discover activities and events tailored for kids under 5—and their grown-ups.
          </p>
          <button className="bg-[#E4B363] hover:bg-[#d1a456] text-white px-6 py-3 rounded-2xl shadow-lg transition">
            Explore Now
          </button>
        </section>
      </div>
    );
  }
  
  export default Home;