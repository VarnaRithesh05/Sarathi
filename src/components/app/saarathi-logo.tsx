import React from 'react';

const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={className || "h-12 w-auto"}
        stroke="hsl(var(--primary))"
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Pillar */}
        <path d="M 50 20 V 85" />
        {/* Base */}
        <path d="M 35 85 H 65" />
        {/* Top circle */}
        <circle cx="50" cy="15" r="5" />
        
        {/* Crossbeam */}
        <path d="M 20 35 H 80" />
        
        {/* Left Bowl & Strings */}
        <path d="M 10 60 A 15 15 0 0 0 40 60" />
        <path d="M 25 35 L 10 60" />
        <path d="M 25 35 L 40 60" />

        {/* Right Bowl & Strings */}
        <path d="M 60 60 A 15 15 0 0 0 90 60" />
        <path d="M 75 35 L 60 60" />
        <path d="M 75 35 L 90 60" />
    </svg>
);

export default SaarathiLogo;
