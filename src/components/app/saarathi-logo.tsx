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
        <path d="M 25 40 H 75" fill="none" />
        <path d="M 22 37 L 28 43" fill="none" strokeWidth="2" />
        <path d="M 28 37 L 22 43" fill="none" strokeWidth="2" />
        <path d="M 72 37 L 78 43" fill="none" strokeWidth="2" />
        <path d="M 78 37 L 72 43" fill="none" strokeWidth="2" />

        {/* Top Circle */}
        <circle cx="50" cy="20" r="3" fill="hsl(var(--primary))" stroke="none" />

        {/* Curved Hangers */}
        <path d="M 35 40 Q 25 55 30 60" fill="none" />
        <path d="M 65 40 Q 75 55 70 60" fill="none" />
        
        {/* Bowl Separators */}
        <path d="M 30 60 H 45" strokeWidth="2.5" fill="none" />
        <path d="M 55 60 H 70" strokeWidth="2.5" fill="none" />
        
        {/* Filled Bowls */}
        <path d="M 30 60 A 7.5 7.5 0 0 0 45 60 Z" />
        <path d="M 55 60 A 7.5 7.5 0 0 0 70 60 Z" />
    </svg>
);

export default SaarathiLogo;
