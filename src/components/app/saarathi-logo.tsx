import React from 'react';

const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className || "h-12 w-auto"}
        fill="hsl(var(--primary))"
    >
        <path d="M 48 15 L 48 85 L 52 85 L 52 15 Z" />
        <path d="M 35 85 L 65 85 L 65 89 L 35 89 Z" />
        <circle cx="50" cy="12" r="4" />
        <path d="M 10 25 L 90 25 L 90 29 L 10 29 Z" />
        <path d="M 47 23 L 53 23 L 53 31 L 47 31 Z" />
        <g>
            <path d="M 25 29 L 25 45" stroke="hsl(var(--primary))" strokeWidth="2" />
            <path d="M 10 55 C 10 45, 40 45, 40 55 L 10 55 Z" />
        </g>
        <g>
            <path d="M 75 29 L 75 45" stroke="hsl(var(--primary))" strokeWidth="2" />
            <path d="M 60 55 C 60 45, 90 45, 90 55 L 60 55 Z" />
        </g>
    </svg>
);

export default SaarathiLogo;
