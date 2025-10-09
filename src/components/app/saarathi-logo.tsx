import React from 'react';

const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={className || "h-12 w-auto"}
        stroke="hsl(var(--primary))"
        fill="hsl(var(--primary))"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Stylized Central Pillar with base */}
        <path d="M 50 25 V 80" fill="none" />
        <path d="M 45 80 H 55" fill="none" />
        <path d="M 42 85 H 58" fill="none" strokeWidth="2" />
        
        {/* Shorter Crossbeam with flourishes */}
        <path d="M 35 40 H 65" fill="none" />
        <path d="M 32 37 L 38 43" fill="none" strokeWidth="2" />
        <path d="M 38 37 L 32 43" fill="none" strokeWidth="2" />
        <path d="M 62 37 L 68 43" fill="none" strokeWidth="2" />
        <path d="M 68 37 L 62 43" fill="none" strokeWidth="2" />

        {/* Top Circle */}
        <circle cx="50" cy="20" r="3" fill="hsl(var(--primary))" stroke="none" />

        {/* Curved Hangers */}
        <path d="M 40 40 Q 30 55 35 60" fill="none" />
        <path d="M 60 40 Q 70 55 65 60" fill="none" />
        
        {/* Bowl Separators */}
        <path d="M 35 60 H 45" strokeWidth="2.5" fill="none" />
        <path d="M 55 60 H 65" strokeWidth="2.5" fill="none" />
        
        {/* Smaller Filled Bowls */}
        <path d="M 35 60 A 5 5 0 0 0 45 60 Z" />
        <path d="M 55 60 A 5 5 0 0 0 65 60 Z" />
    </svg>
);

export default SaarathiLogo;
