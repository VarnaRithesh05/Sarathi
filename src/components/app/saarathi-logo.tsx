import React from 'react';

const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={className || "h-12 w-auto"}
    >
        <path
            d="M50 10 V 90 M20 95 H 80 M10 20 H 90 M20 20 V 60 M80 20 V 60 M10 70 C 10 80, 30 80, 30 70 M70 70 C 70 80, 90 80, 90 70"
            stroke="hsl(var(--primary))"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default SaarathiLogo;
