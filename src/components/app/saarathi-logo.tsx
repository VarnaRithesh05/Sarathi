import React from 'react';

const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className || "h-12 w-auto"}
        stroke="hsl(var(--primary))"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Base */}
        <line x1="30" y1="90" x2="70" y2="90" />
        
        {/* Pillar */}
        <line x1="50" y1="88" x2="50" y2="20" />
        
        {/* Beam */}
        <line x1="15" y1="20" x2="85" y2="20" />
        
        {/* Left Side */}
        <line x1="25" y1="20" x2="25" y2="30" />
        <path d="M10 50 C 10 35, 40 35, 40 50 Z" />
        
        {/* Right Side */}
        <line x1="75" y1="20" x2="75" y2="30" />
        <path d="M60 50 C 60 35, 90 35, 90 50 Z" />
        
        {/* Center pivot */}
        <circle cx="50" cy="20" r="3" fill="hsl(var(--accent))" stroke="none" />
    </svg>
);

export default SaarathiLogo;
