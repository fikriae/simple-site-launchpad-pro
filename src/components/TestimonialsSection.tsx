
import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "MemoApp completely changed how I organize my thoughts. It's so intuitive and easy to use!",
      author: "Sarah Johnson",
      role: "Freelance Writer",
      avatar: "/placeholder.svg"
    },
    {
      content: "As a student, this app has been a lifesaver for my lecture notes and research organization.",
      author: "Michael Chen",
      role: "College Student",
      avatar: "/placeholder.svg"
    },
    {
      content: "The best note-taking app I've ever used. The cloud sync feature means I can access my notes anywhere.",
      author: "Amanda Rodriguez",
      role: "Project Manager",
      avatar: "/placeholder.svg"
    },
    {
      content: "Simple yet powerful. I use it daily for my work and personal projects.",
      author: "David Kim",
      role: "Software Engineer",
      avatar: "/placeholder.svg"
    },
    {
      content: "The reminders feature has helped me never miss important deadlines. Highly recommended!",
      author: "Jessica Patel",
      role: "Marketing Specialist",
      avatar: "/placeholder.svg"
    },
    {
      content: "I love how I can organize my recipes, work notes, and personal journal all in one place.",
      author: "Robert Wilson",
      role: "Chef",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their note-taking experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
