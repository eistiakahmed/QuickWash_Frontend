
import Banner from '@/components/banner';
import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Banner />
      
      {/* Demo content to show navbar scroll effect */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Car Care Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our premium car wash and detailing services. 
              We use eco-friendly products and state-of-the-art equipment to keep your vehicle looking its best.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: "🚗",
                title: "Exterior Wash",
                description: "Complete exterior cleaning with premium soap and protective wax coating."
              },
              {
                icon: "✨",
                title: "Interior Detailing", 
                description: "Deep cleaning of seats, carpets, and dashboard with professional equipment."
              },
              {
                icon: "🛡️",
                title: "Paint Protection",
                description: "Advanced ceramic coating and paint protection services for long-lasting shine."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
