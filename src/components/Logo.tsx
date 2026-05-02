import React from 'react';

export function Logo({ className = "", hideText = false }: { className?: string; hideText?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-8 h-8 flex-shrink-0">
        {/* Hexagon icon base */}
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path 
            d="M50 5 L90 27.5 V72.5 L50 95 L10" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="8" 
            strokeLinecap="round"
            className="text-white opacity-20"
          />
          {/* Stylized 'V' and 'J' forming the top part */}
          <path 
            d="M30 35 L50 55 L70 35" 
            fill="none" 
            stroke="white" 
            strokeWidth="10" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          {/* Stylized '4' integration */}
          <path 
            d="M40 75 V55 H75 V85" 
            fill="none" 
            stroke="#FF6B2B" 
            strokeWidth="10" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </div>
      {!hideText && (
        <span className="text-xl font-black tracking-[-0.04em] uppercase text-white">
          JV <span className="text-[#FF6B2B]">4</span>LOW
        </span>
      )}
    </div>
  );
}
