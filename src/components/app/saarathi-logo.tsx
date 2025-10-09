import React from 'react';

const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={className || "h-12 w-auto"}
        stroke="hsl(var(--primary))"
        fill="none"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Central Pillar */}
        <path d="M 50 30 V 90" />
        
        {/* Base */}
        <path d="M 35 90 H 65" />
        
        {/* Crossbeam */}
        <path d="M 10 30 H 90" />
        
        {/* Decorative Circle Top */}
        <circle cx="50" cy="22" r="4" fill="hsl(var(--primary))" stroke="none" />
        
        {/* Hangers */}
        <path d="M 25 30 V 45" />
        <path d="M 75 30 V 45" />

        {/* Bowl Separators */}
        <path d="M 10 60 H 40" strokeWidth="2" />
        <path d="M 60 60 H 90" strokeWidth="2" />
        
        {/* Bowls */}
        {/* Left Bowl */}
        <path d="M 10 60 A 15 15 0 0 0 40 60" />

        {/* Right Bowl */}
        <path d="M 60 60 A 15 15 0 0 0 90 60" />
        
        {/* Connecting Lines */}
        <path d="M 25 45 L 10 60" />
        <path d="M 25 45 L 40 60" />
        <path d="M 75 45 L 60 60" />
        <path d="M 75 45 L 90 60" />
    </svg>
);

export default SaarathiLogo;