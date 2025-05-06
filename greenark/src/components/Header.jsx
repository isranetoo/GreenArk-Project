import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/LOGO.BioVolt-home.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="BioVolt" className="h-12 w-auto" />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-green-400"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/solutions">Soluções</NavLink>
            <NavLink to="/benefits">Benefícios</NavLink>
            <NavLink to="/contact">Contato</NavLink>
            <Link 
              to="/login" 
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full
              transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Minha Conta
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <nav className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="flex flex-col space-y-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/solutions">Soluções</NavLink>
            <NavLink to="/benefits">Benefícios</NavLink>
            <NavLink to="/contact">Contato</NavLink>
            <Link 
              to="/login" 
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full
              transition-all duration-300 text-center"
            >
              Minha Conta
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

const NavLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="text-white hover:text-green-400 transition-colors duration-300"
  >
    {children}
  </Link>
);

export default Header;