import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] antialiased">
      {children}
    </div>
  );
};

export default Layout;