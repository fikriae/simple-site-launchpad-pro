
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-12 md:py-24 px-6 md:px-12 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Keep <span className="gradient-text">Organized</span> with MemoApp
        </h1>
        <p className="text-lg mb-6 text-gray-600 max-w-lg">
          Simple, easy to use, and powerful note-taking application that helps you stay organized and productive.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-primary text-primary-foreground hover:bg-brand-orange">
            Download App
          </Button>
          <Button variant="outline" className="border-primary text-gray-800 hover:bg-gray-100">
            Learn More
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-yellow to-brand-orange rounded-3xl blur-lg"></div>
          <div className="relative bg-white p-2 rounded-3xl shadow-xl">
            <img 
              src="/placeholder.svg" 
              alt="MemoApp Interface" 
              className="w-64 md:w-72 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
