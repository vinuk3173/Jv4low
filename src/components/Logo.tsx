import React from 'react';
import logo from '../assets/logo.svg';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logo} 
        alt="JV 4low Logo" 
        className="h-10 w-auto object-contain"
      />
    </div>
  );
}
