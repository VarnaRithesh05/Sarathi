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
        {/* Pillar */}
        <path d="M 50 25 V 85" fill="none" />
        {/* Base */}
        <path d="M 35 85 H 65" fill="none" />
        {/* Top circle */}
        <circle cx="50" cy="20" r="5" fill="none" />
        
        {/* Crossbeam */}
        <path d="M 20 35 H 80" fill="none" />
        
        {/* Left Bowl (Triangle) */}
        <path d="M 20 35 L 40 65 L 0 65 Z" stroke="none" />
        
        {/* Right Bowl (Triangle) */}
        <path d="M 80 35 L 100 65 L 60 65 Z" stroke="none" />

    </svg>
);

export default SaarathiLogo;