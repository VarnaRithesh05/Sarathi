import React from 'react';

const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={className || "h-12 w-auto"}
    >
        <path
            d="M50 10 V 30 M20 30 H 80 M50 30 V 90 M10 95 H 90 M20 30 V 70 M80 30 V 70 M10 70 A 10 10 0 0 0 30 70 M70 70 A 10 10 0 0 0 90 70"
            stroke="hsl(var(--primary))"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default SaarathiLogo;
