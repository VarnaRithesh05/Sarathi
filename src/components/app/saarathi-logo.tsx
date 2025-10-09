import React from 'react';

const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className || "h-12 w-auto"}
        fill="hsl(var(--primary))"
    >
        {/* Central Pillar */}
        <path d="M 48 20 L 52 20 L 52 80 L 48 80 Z" />
        {/* Base */}
        <path d="M 35 80 L 65 80 L 65 85 L 35 85 Z" />
        {/* Top decorative element */}
        <circle cx="50" cy="15" r="5" />
        
        {/* Crossbeam */}
        <path d="M 10 25 L 90 25 L 90 30 L 10 30 Z" />
        
        {/* Connecting Lines */}
        <path d="M 25 30 L 25 40" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none" />
        <path d="M 75 30 L 75 40" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none" />
        <path d="M 15 50 L 25 40" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none" />
        <path d="M 35 50 L 25 40" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none" />
        <path d="M 65 50 L 75 40" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none" />
        <path d="M 85 50 L 75 40" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none" />

        {/* Bowls */}
        <path d="M 10 50 A 15 10 0 0 0 40 50 Z" />
        <path d="M 60 50 A 15 10 0 0 0 90 50 Z" />
    </svg>
);

export default SaarathiLogo;