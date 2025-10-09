import React from 'react';

const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={className || "h-12 w-auto"}
        stroke="hsl(var(--primary))"
        fill="hsl(var(--primary))"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Central Pillar */}
        <path d="M 50 35 V 90" fill="none" />
        
        {/* Base */}
        <path d="M 40 90 H 60" fill="none" />
        
        {/* Crossbeam */}
        <path d="M 10 35 H 90" fill="none" />
        
        {/* Decorative Circles */}
        <circle cx="50" cy="35" r="3" stroke="none" />
        <circle cx="10" cy="35" r="2.5" stroke="none" />
        <circle cx="90" cy="35" r="2.5" stroke="none" />
        
        {/* Hangers with a slight curve */}
        <path d="M 25 35 Q 25 45, 25 50" fill="none" />
        <path d="M 75 35 Q 75 45, 75 50" fill="none" />

        {/* Bowl Separators */}
        <path d="M 10 65 H 40" strokeWidth="2.5" fill="none" />
        <path d="M 60 65 H 90" strokeWidth="2.5" fill="none" />
        
        {/* Upright Bowls (Filled) */}
        <path d="M 10 65 A 15 15 0 0 0 40 65" />
        <path d="M 60 65 A 15 15 0 0 0 90 65" />
        
        {/* Connecting Lines */}
        <path d="M 25 50 L 10 65" fill="none" />
        <path d="M 25 50 L 40 65" fill="none" />
        <path d="M 75 50 L 60 65" fill="none" />
        <path d="M 75 50 L 90 65" fill="none" />
    </svg>
);

export default SaarathiLogo;
