import React from 'react';

const DigilockerLogo = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className={className || "h-12 w-auto"}
        preserveAspectRatio="xMidYMid meet"
    >
        <g fill="none" fillRule="evenodd">
            <path
                fill="#F0F0F0"
                d="M0 0h256v256H0z"
            />
            <path
                fill="#FFF"
                d="M32 32h192v192H32z"
            />
            <path
                d="M128 50c-43.06 0-78 34.94-78 78s34.94 78 78 78 78-34.94 78-78-34.94-78-78-78zm0 134c-30.93 0-56-25.07-56-56s25.07-56 56-56 56 25.07 56 56-25.07 56-56 56z"
                fill="#4285F4"
            />
            <path
                d="M150 128h-22v-22a4 4 0 00-8 0v26a4 4 0 004 4h26a4 4 0 000-8z"
                fill="#4285F4"
            />
            <text
                fill="#3F485A"
                fontFamily="Poppins-SemiBold, Poppins"
                fontSize="24"
                fontWeight="500"
                y="240"
                x="60"
            >
                <tspan>DigiLocker</tspan>
            </text>
        </g>
    </svg>
);

export default DigilockerLogo;
