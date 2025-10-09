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
        <path d="M 50 20 V 80" fill="none" />
        <path d="M 45 80 H 55" fill="none" />
        
        {/* Crossbeam */}
        <path d="M 25 35 H 75" fill="none" />
        
        {/* Left Hanger */}
        <path d="M 30 35 V 45" fill="none" />
        
        {/* Right Hanger */}
        <path d="M 70 35 V 45" fill="none" />
        
        {/* Left Bowl */}
        <path d="M 20 55 H 40" fill="none" />
        <path d="M 20 55 A 10 10 0 0 0 40 55" fill="none" />
        <path d="M 30 45 V 55" fill="none" />

        {/* Right Bowl */}
        <path d="M 60 55 H 80" fill="none" />
        <path d="M 60 55 A 10 10 0 0 0 80 55" fill="none" />
        <path d="M 70 45 V 55" fill="none" />

    </svg>
);

export default SaarathiLogo;
