import React from 'react';

const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className || "h-12 w-auto"}
        fill="hsl(var(--primary))"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Pillar and Base */}
        <path d="M50 85 V 15" fill="none" />
        <path d="M40 90 H 60" fill="none" />
        
        {/* Crossbeam */}
        <path d="M10 20 H 90" fill="none" />
        
        {/* Central Triangle */}
        <path d="M50 20 L 45 28 H 55 Z" fill="hsl(var(--primary))" stroke="none" />
        
        {/* Hangers */}
        <path d="M20 20 V 30" fill="none" />
        <path d="M80 20 V 30" fill="none" />
        
        {/* Left Bowl and Strings */}
        <path d="M20 30 L 5 45" fill="none" />
        <path d="M20 30 L 35 45" fill="none" />
        <path d="M5 45 Q 20 60 35 45" fill="none" />

        {/* Right Bowl and Strings */}
        <path d="M80 30 L 65 45" fill="none" />
        <path d="M80 30 L 95 45" fill="none" />
        <path d="M65 45 Q 80 60 95 45" fill="none" />
    </svg>
);

export default SaarathiLogo;
