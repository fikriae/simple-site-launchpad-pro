
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="py-4 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">Memo<span className="text-primary">App</span></h1>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
        <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How it works</a>
        <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
        <a href="#download" className="text-sm font-medium hover:text-primary transition-colors">Download</a>
      </div>
      <div>
        <Button className="bg-primary text-primary-foreground hover:bg-brand-orange">Get Started</Button>
      </div>
    </nav>
  );
};

export default Navbar;
