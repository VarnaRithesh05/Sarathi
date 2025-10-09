import React from 'react';

const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={className || "h-12 w-auto"}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Pillar and Base */}
        <path d="M50 90 V 15" />
        <path d="M40 95 H 60" />
        
        {/* Crossbeam */}
        <path d="M10 20 H 90" />
        
        {/* Central Triangle */}
        <path d="M50 15 L 45 23 H 55 Z" stroke="none" fill="hsl(var(--primary))"/>
        
        {/* Left Hanger and Bowl */}
        <path d="M20 20 V 35" />
        <path d="M10 35 L 30 35" />
        <path d="M10 35 C 10 45, 30 45, 30 35" />

        {/* Right Hanger and Bowl */}
        <path d="M80 20 V 35" />
        <path d="M70 35 L 90 35" />
        <path d="M70 35 C 70 45, 90 45, 90 35" />
    </svg>
);

export default SaarathiLogo;