import React from 'react';

const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className || "h-12 w-auto"}
    >
        <g fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Base and Pillar */}
            <path d="M 35 90 H 65" fill="none" />
            <path d="M 48 10 V 90" fill="none" />
            <path d="M 52 10 V 90" fill="none" />
            
            {/* Crossbeam */}
            <path d="M 10 10 H 90" fill="none" />
            
            {/* Left Hanger and Bowl */}
            <path d="M 25 10 V 25" fill="none" />
            <path d="M 15 40 L 25 25 L 35 40" fill="none" />
            <path d="M 10 40 A 15 10 0 0 0 40 40" fill="none" />

            {/* Right Hanger and Bowl */}
            <path d="M 75 10 V 25" fill="none" />
            <path d="M 65 40 L 75 25 L 85 40" fill="none" />
            <path d="M 60 40 A 15 10 0 0 1 90 40" fill="none" />
        </g>
    </svg>
);

export default SaarathiLogo;
