import React from 'react';

const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={className || "h-12 w-auto"}
        fill="hsl(var(--primary))"
    >
        <path
            stroke="hsl(var(--primary))"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="
                M 50 15 V 30 
                M 10 30 H 90 
                M 50 30 V 80 
                M 40 85 H 60 
                M 10 35 V 55
                M 90 35 V 55
                M 5 65 A 20 20 0 0 0 45 65 Z
                M 55 65 A 20 20 0 0 0 95 65 Z
            "
        />
    </svg>
);

export default SaarathiLogo;
