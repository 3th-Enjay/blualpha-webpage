import React from 'react';
import { Link } from 'react-router-dom';
import headerphoto from '../assets/blualpha-logo.png'

const Header = () => {
  const links = [
    { label: 'Home', url: '/' },
    { label: 'Contact Us', url: '/contact' },
    { label: 'About', url: '/about' }
  ];

  return (
<nav className="flex justify-between bg-gradient-to-r from-sky-500 to-gray-300 p-4 font-bold">
  <div className="flex items-center">
    <img src= {headerphoto} alt="Logo" className="h-10 w-auto" />
  </div>
  <div className="flex justify-center gap-20 ">
    {links.map(({ label, url }) => (
      <Link to={url} key={url} className="text-lg hover:text-blue-700">
        <span>{label}</span>
      </Link>
    ))}
  </div>
</nav>

  );
};

export default Header;
