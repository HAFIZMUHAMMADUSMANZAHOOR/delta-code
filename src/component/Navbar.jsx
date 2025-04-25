import { useState } from 'react';
// import { FaBars } from 'react-icons/fa';
import img1 from"../assets/Images/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white bg-opacity-95 backdrop-filter backdrop-blur-lg shadow-md fixed w-full top-0 z-50 transition-all duration-300 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
        <a href="#" className=" text-white ml-5 px-3 py-1 rounded-md font-bold text-xl relative">
  {/* Replace this with your logo image */}
  <img 
    src={img1}
    alt="Delta Code Logo" 
    className="h-11 w-auto" // Adjust height as needed
  />
</a>
          {/* <a href="#" className=" text-black px-4 py-2 rounded-md font-extrabold text-x1 relative">
            D<span className="text-red-500">C</span>
          </a> */}
          <a href="#" className="text-2xl font-bold text-white-900 no-underline text-red-1200">Delta Code</a>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 list-none">
            {['Home', 'Services', 'Our Progress', 'Testimonials', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-800 font-medium text-base relative transition-all duration-300 py-2 hover:text-blue-900"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-blue-700 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 ml-8">
            <a href="#contact" className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              Get Started
            </a>
            <a href="#services" className="border-2 border-blue-900 text-blue-900 px-6 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              Learn More
            </a>
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-900 text-2xl">
            {/* <FaBars /> */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white w-full px-4 py-2 shadow-lg transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col gap-4 list-none">
          {['Home', 'Services', 'Our progress', 'Testimonials', 'About', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={closeMenu}
                className="text-gray-800 font-medium text-base block py-2 hover:text-blue-900"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-4 mt-4">
          <a href="#contact" className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-2 rounded-md font-medium text-center">
            Get Started
          </a>
          <a href="#services" className="border-2 border-blue-900 text-blue-900 px-6 py-2 rounded-md font-medium text-center">
            Learn More
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;