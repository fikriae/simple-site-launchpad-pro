
import React from 'react';
import { Card } from "@/components/ui/card";

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ content, author, role, avatar }) => {
  return (
    <Card className="p-6 h-full flex flex-col">
      <div className="mb-4 flex-1">
        <p className="text-gray-600 italic">"{content}"</p>
      </div>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden mr-4">
          <img src={avatar} alt={author} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-medium">{author}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
