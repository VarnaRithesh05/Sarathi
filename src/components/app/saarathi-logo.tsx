import React from 'react';

const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className || "h-12 w-auto"}
        stroke="hsl(var(--primary))"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Base */}
        <path d="M 25 90 L 75 90 L 70 95 L 30 95 Z" />
        
        {/* Pillar */}
        <line x1="50" y1="90" x2="50" y2="15" />
        
        {/* Top decorative circle */}
        <circle cx="50" cy="12" r="4" strokeWidth="3" />
        
        {/* Beam */}
        <line x1="10" y1="35" x2="90" y2="35" />
        
        {/* Center pivot */}
        <line x1="50" y1="15" x2="50" y2="35" />

        {/* Left Scale */}
        <path d="M 15 35 L 15 45" />
        <path d="M 5 65 C 5 50, 45 50, 45 65 Z" />
        
        {/* Right Scale */}
        <path d="M 85 35 L 85 45" />
        <path d="M 55 65 C 55 50, 95 50, 95 65 Z" />

    </svg>
);

export default SaarathiLogo;
