import React from 'react';

const Header = () => (
  <header className="bg-blue-700 text-white">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src="https://th.bing.com/th/id/OIP.8pVfo0Ob90ZS8av1uVA4mAHaMk?rs=1&pid=ImgDetMain" alt="Logo" className="h-12 w-auto" />
        <h1 className="text-2xl font-bold">PMSSS Finance Bureau</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-blue-200">Home</a></li>
          <li><a href="/dashboard" className="hover:text-blue-200">Dashboard</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
