import { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "Delta Code Solutions transformed our lead generation process. Their expertise and dedication have helped us achieve remarkable growth.",
      author: "John Smith",
      position: "CEO, Tech Solutions",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      content: "Working with Delta Code Solutions has been a game-changer for our business. Their strategic approach to lead generation is unmatched.",
      author: "Sarah Johnson",
      position: "Marketing Director, Innovate Inc",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      content: "The team at Delta Code Solutions understands our business needs perfectly. They've helped us reach our target audience effectively.",
      author: "Michael Brown",
      position: "Founder, Growth Ventures",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-600">What our clients say about us</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-8 md:mb-0 md:mr-8">
              <img 
                src={testimonials[currentTestimonial].image} 
                alt={testimonials[currentTestimonial].author}
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            <div>
              <blockquote className="text-lg italic text-gray-700 mb-6">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div>
                <h4 className="font-semibold text-blue-900">{testimonials[currentTestimonial].author}</h4>
                <p className="text-gray-600">{testimonials[currentTestimonial].position}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;