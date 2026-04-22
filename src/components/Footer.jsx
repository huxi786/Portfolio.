import React from 'react';
import { Shield } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="w-full py-6 border-t border-white/10 bg-slate-950/50 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-2 text-center">
        <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
          <Shield size={16} className="text-blue-500" />
          <span>Protected by Copyright</span>
        </div>
        <p className="text-gray-500 text-xs sm:text-sm">
          &copy; {year} Huzaifa Ajmal. All Rights Reserved.
        </p>
        <p className="text-gray-600 text-xs mt-1 max-w-md">
          Unauthorized copying, reproduction, or distribution of this website's code or design is strictly prohibited.
        </p>
      </div>
    </footer>
  );
}
