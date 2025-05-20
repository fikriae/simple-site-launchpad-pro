
import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Download the app",
      description: "Available on App Store and Google Play Store"
    },
    {
      number: "02",
      title: "Create an account",
      description: "Sign up with your email or social media accounts"
    },
    {
      number: "03",
      title: "Start taking notes",
      description: "Create, organize, and access your notes anywhere"
    }
  ];

  return (
    <section id="how-it-works" className="py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started with MemoApp is simple and straightforward
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 bg-white p-8 rounded-lg shadow-md border border-gray-100 relative">
              <div className="absolute -top-5 left-8 bg-primary text-primary-foreground px-3 py-1 rounded-md font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
