
import React from 'react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      title: "Simple Organization",
      description: "Keep your notes organized with folders and tags for easy access",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M2 7v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-6.5l-2-2H4a2 2 0 0 0-2 2Z"></path>
        </svg>
      )
    },
    {
      title: "Cloud Backup",
      description: "Never lose your notes with automatic cloud backup and sync",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M4 12h6.5"></path>
          <path d="M18 9v6"></path>
          <path d="M15 12h6"></path>
        </svg>
      )
    },
    {
      title: "Rich Text Editing",
      description: "Format your notes with rich text, images, and checkboxes",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"></path>
        </svg>
      )
    },
    {
      title: "Quick Search",
      description: "Find exactly what you need with powerful search functionality",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
      )
    },
    {
      title: "Reminders",
      description: "Set reminders to never miss important notes or tasks",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M12 22c4.2 0 8-3.22 8-8.2 0-4.98-4-9.8-8-17.8-4 8-8 12.82-8 17.8 0 4.98 3.8 8.2 8 8.2Z"></path>
        </svg>
      )
    },
    {
      title: "Dark Mode",
      description: "Comfortable note-taking day and night with light and dark themes",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M12 2v1"></path>
          <path d="M12 21v1"></path>
          <path d="M4.2 4.2l.78.78"></path>
          <path d="M18.29 18.28l.79.79"></path>
          <path d="M2 12h1"></path>
          <path d="M21 12h1"></path>
          <path d="M4.2 19.79l.78-.78"></path>
          <path d="M18.29 5.7l.79-.8"></path>
          <circle cx="12" cy="12" r="4"></circle>
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to capture your thoughts, stay organized, and never forget important information.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
