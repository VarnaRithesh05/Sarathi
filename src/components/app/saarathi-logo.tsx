import React from 'react';

const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={className || "h-12 w-auto"}
        stroke="hsl(var(--primary))"
        fill="hsl(var(--primary))"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Central Pillar */}
        <path d="M 50 30 V 90" fill="none" />
        
        {/* Base */}
        <path d="M 35 90 H 65" fill="none" />
        
        {/* Crossbeam */}
        <path d="M 10 30 H 90" fill="none" />
        
        {/* Decorative Circles */}
        <circle cx="50" cy="30" r="4" stroke="none" />
        <circle cx="10" cy="30" r="3" stroke="none" />
        <circle cx="90" cy="30" r="3" stroke="none" />
        
        {/* Hangers */}
        <path d="M 25 30 V 45" fill="none" />
        <path d="M 75 30 V 45" fill="none" />

        {/* Bowl Separators */}
        <path d="M 10 60 H 40" strokeWidth="2" fill="none" />
        <path d="M 60 60 H 90" strokeWidth="2" fill="none" />
        
        {/* Bowls (Upright and Filled) */}
        {/* Left Bowl */}
        <path d="M 10 60 A 15 15 0 0 0 40 60" />
        {/* Right Bowl */}
        <path d="M 60 60 A 15 15 0 0 0 90 60" />
        
        {/* Connecting Lines */}
        <path d="M 25 45 L 10 60" fill="none" />
        <path d="M 25 45 L 40 60" fill="none" />
        <path d="M 75 45 L 60 60" fill="none" />
        <path d="M 75 45 L 90 60" fill="none" />
    </svg>
);

export default SaarathiLogo;
