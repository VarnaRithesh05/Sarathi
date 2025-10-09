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
        
        {/* Left Bowl & Strings */}
        <path d="M 10 55 A 15 15 0 0 0 40 55" fill="none" />
        <path d="M 20 35 L 10 55" fill="none" />
        <path d="M 20 35 L 40 55" fill="none" />

        {/* Right Bowl & Strings */}
        <path d="M 60 55 A 15 15 0 0 0 90 55" fill="none" />
        <path d="M 80 35 L 60 55" fill="none" />
        <path d="M 80 35 L 90 55" fill="none" />

    </svg>
);

export default SaarathiLogo;
