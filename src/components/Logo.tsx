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
  return (
    <div className={`flex items-center gap-3 select-none ${className}`} id="dream-way-logo">
      <div className="w-10 h-10 bg-gradient-to-r from-[#2a9bbc] to-indigo-600 rounded-xl flex items-center justify-center font-black text-xl italic text-white shadow-md shadow-[#2a9bbc]/20 transform hover:rotate-3 transition-transform duration-350 shrink-0">
        D
      </div>
      {!iconOnly && (
        <span className={`text-xl font-display font-extrabold tracking-tight uppercase leading-none transition-colors duration-300`}>
          <span className="text-[#2a9bbc]">Dream</span>
          <span className={`ml-1.5 font-bold transition-colors duration-300 ${isLight ? 'text-slate-950' : 'text-slate-200'}`}>Way</span>
          <span className={`block text-[8px] tracking-[0.4em] font-sans font-medium transition-colors duration-300 -mt-1 uppercase ${isLight ? 'text-slate-550' : 'text-slate-400'}`}>
            Travels
          </span>
        </span>
      )}
    </div>
  );
};
