import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-pink-50 font-sans text-gray-800">
      {children}
    </div>
  );
};

export default Layout;