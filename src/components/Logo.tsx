/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  isLight?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-10', iconOnly = false, isLight = false }) => {
  // If isLight is true (white header background), use colorful accents (lavender-purple trail/plane, brand teal text).
  // If isLight is false (dark header background), use the clean, modern fully white aesthetic.
  const trailColor = isLight ? '#8a7fec' : '#ffffff';
  const planeColor = isLight ? '#8a7fec' : '#ffffff';

  return (
    <div className={`flex items-center gap-2 select-none ${className}`} id="dream-way-logo">
      {/* New Airplane & Loop Flight Trail Icon vector representation */}
      <div className="relative w-12 h-10 shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 60"
          className="w-full h-full"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Stylized dotted flight trail loop from Image */}
          <path
            d="M 12 42 C 22 42, 36 10, 22 10 C 10 10, 18 36, 42 36 C 56 36, 68 24, 76 18"
            stroke={trailColor}
            strokeWidth="2"
            strokeDasharray="4 4"
            className="opacity-90 transition-colors duration-350"
          />

          {/* Airplane pointing to top right positioned exactly at end of trail */}
          <g transform="translate(68, 8) rotate(-15) scale(0.9)">
            <path
              d="M19 12L5 21V18.5L12.5 13L2 11V9L12.5 8L5 2.5V0L19 9V12Z"
              fill={planeColor}
              stroke={planeColor}
              strokeWidth="1.5"
              className="transition-colors duration-350"
            />
          </g>
        </svg>
      </div>

      {!iconOnly && (
        <span className="flex flex-col justify-center leading-none transition-colors duration-350">
          <span className={`text-sm sm:text-base font-display font-black tracking-widest uppercase transition-colors duration-350 ${isLight ? 'text-[#2a9bbc]' : 'text-white'}`}>
            Dream Way
          </span>
          <span className={`text-[9px] tracking-[0.38em] font-sans font-bold uppercase mt-0.5 transition-colors duration-350 ${isLight ? 'text-[#2a9bbc]' : 'text-white'}`}>
            Travels
          </span>
        </span>
      )}
    </div>
  );
};
