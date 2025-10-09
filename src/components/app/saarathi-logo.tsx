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
        {/* Central Pillar with base */}
        <path d="M 50 25 V 80" fill="none" />
        <path d="M 45 80 H 55" fill="none" />
        <path d="M 42 85 H 58" fill="none" strokeWidth="2" />
        
        {/* Crossbeam with flourishes */}
        <path d="M 15 40 H 85" fill="none" />
        <path d="M 12 37 L 18 43" fill="none" strokeWidth="2" />
        <path d="M 18 37 L 12 43" fill="none" strokeWidth="2" />
        <path d="M 82 37 L 88 43" fill="none" strokeWidth="2" />
        <path d="M 88 37 L 82 43" fill="none" strokeWidth="2" />

        {/* Top Circle */}
        <circle cx="50" cy="20" r="3" fill="hsl(var(--primary))" />

        {/* Curved Hangers */}
        <path d="M 30 40 Q 20 55 15 60" fill="none" />
        <path d="M 30 40 Q 40 55 45 60" fill="none" />
        <path d="M 70 40 Q 80 55 85 60" fill="none" />
        <path d="M 70 40 Q 60 55 55 60" fill="none" />
        
        {/* Bowl Separators */}
        <path d="M 15 60 H 45" strokeWidth="2.5" fill="none" />
        <path d="M 55 60 H 85" strokeWidth="2.5" fill="none" />
        
        {/* Filled Bowls */}
        <path d="M 15 60 A 15 15 0 0 0 45 60 Z" />
        <path d="M 55 60 A 15 15 0 0 0 85 60 Z" />
    </svg>
);

export default SaarathiLogo;
