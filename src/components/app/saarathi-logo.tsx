import React from 'react';

const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className || "h-12 w-auto"}
        fill="hsl(var(--primary))"
    >
        {/* Base */}
        <path d="M 30 85 L 70 85 L 70 90 L 30 90 Z" />
        <path d="M 35 80 L 65 80 L 65 85 L 35 85 Z" />

        {/* Pillar */}
        <path d="M 45 35 L 55 35 L 55 80 L 45 80 Z" />
        
        {/* Top decorative piece */}
        <path d="M 47 25 L 53 25 L 50 20 Z" />

        {/* Beam */}
        <path d="M 10 35 L 90 35 L 90 45 L 10 45 Z" />

        {/* Pivot */}
        <circle cx="50" cy="30" r="5" />
        
        {/* Left Scale */}
        <path d="M 10 45 L 40 45 L 25 75 Z" />
        
        {/* Right Scale */}
        <path d="M 60 45 L 90 45 L 75 75 Z" />

    </svg>
);

export default SaarathiLogo;
