import React from 'react';

interface AnimatedSphereProps {
  size?: string;
  className?: string;
}

const AnimatedSphere: React.FC<AnimatedSphereProps> = ({ 
  size = 'w-64 h-64',
  className = '' 
}) => {
  return (
    <div className={`relative ${size} ${className}`}>
      <div 
        className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-100/80 via-blue-100/60 to-pink-100/70 blur-md animate-pulse"
        style={{ animationDuration: '8s' }}
      />
      <div 
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/80 via-blue-50/40 to-purple-100/50 backdrop-blur-sm"
      />
    </div>
  );
};

export default AnimatedSphere;