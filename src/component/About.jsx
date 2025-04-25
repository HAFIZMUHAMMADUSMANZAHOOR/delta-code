// import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  const features = [
    "10+ Years Experience",
    "Certified Professionals",
    "Data-Driven Approach"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">About Us</h2>
            <p className="text-gray-600 mb-6">
            Delta Code Solutions is a leading provider of cutting edge digital lead generation services, offering both web and mobile solutions. We empower businesses to connect with their ideal customers through targeted research, precision-driven outreach, and effective lead nurturing, all via intuitive and robust platforms. Whether accessed through web or mobile, our services ensure seamless lead management and tracking, enabling you to stay connected with prospects anytime, anywhere.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of experts combines industry knowledge with cutting-edge technology to deliver results that drive business growth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  {/* <FaCheckCircle className="text-blue-600 text-xl mr-3" /> */}
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="About Us" 
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;