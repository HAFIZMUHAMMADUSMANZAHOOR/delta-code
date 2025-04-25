import video1 from "../assets/Images/video1.mp4"; // Adjust the path to your video

const Hero = () => {
  return (
    <section id="home" className="relative text-white pt-40 pb-20 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Optional: Add a dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Business with Web/App & Lead Generation
          </h1>
          <p className="text-xl opacity-90 mb-10">
            {/* Web & mobile development + smart lead generation = business growth */}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
            <a href="#contact" className="bg-gradient-to-r from-blue-900 to-blue-700 text-white-900 px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              Get Started
            </a>
            <a href="#services" className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;