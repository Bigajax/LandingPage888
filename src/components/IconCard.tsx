import React, { ReactNode } from 'react';

interface IconCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const IconCard: React.FC<IconCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-gray-700 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-medium text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default IconCard;