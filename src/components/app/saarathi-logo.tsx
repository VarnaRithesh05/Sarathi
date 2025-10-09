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
        {/* Central Pillar */}
        <path d="M 50 25 V 85" fill="none" />
        
        {/* Crossbeam */}
        <path d="M 15 40 H 85" fill="none" />
        
        {/* Concentric Circles on top */}
        <circle cx="50" cy="20" r="5" fill="none" />
        <circle cx="50" cy="20" r="2" />

        {/* Straight Hangers */}
        <path d="M 30 40 L 15 55" fill="none" />
        <path d="M 30 40 L 45 55" fill="none" />
        <path d="M 70 40 L 55 55" fill="none" />
        <path d="M 70 40 L 85 55" fill="none" />
        
        {/* Bowl Separators */}
        <path d="M 10 55 H 50" strokeWidth="2.5" fill="none" />
        <path d="M 50 55 H 90" strokeWidth="2.5" fill="none" />
        
        {/* Filled Bowls */}
        <path d="M 10 55 A 20 20 0 0 0 50 55 Z" />
        <path d="M 50 55 A 20 20 0 0 0 90 55 Z" />
    </svg>
);

export default SaarathiLogo;