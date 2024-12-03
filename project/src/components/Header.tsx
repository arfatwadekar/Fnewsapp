import React from 'react';
import { Newspaper } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 animate-gradient text-white py-12 mb-8 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white p-3 rounded-full shadow-lg transform hover:rotate-12 transition-transform duration-300">
            <Newspaper size={40} className="text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold mt-6 text-center">
            Global News Hub
          </h1>
          <p className="text-xl mt-4 text-blue-100 max-w-2xl text-center">
            Stay informed with the latest headlines from around the world
          </p>
        </div>
      </div>
    </header>
  );
};