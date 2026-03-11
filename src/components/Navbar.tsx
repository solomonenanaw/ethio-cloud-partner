import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Navbar = ({ onNavigate }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Mobile App', id: 'mobile-app' },
    { name: 'Cloud Solutions', id: 'cloud' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate('landing');
    setIsOpen(false);
    // Scroll to element after navigation if on landing page
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const logoUrl = "https://storage.googleapis.com/dala-prod-public-storage/attachments/aa418c45-5d1b-4ada-8ad1-da4e94d73ca0/1773209449827_logo_target.jpg";

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center cursor-pointer group" onClick={() => onNavigate('landing')}>
            <div className="relative h-12 w-auto overflow-hidden rounded-lg mr-3">
              <img 
                src={logoUrl} 
                alt="Target Integrated Solution Logo" 
                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-lg font-extrabold leading-tight text-gray-900 tracking-tight">
                Target Integrated
              </span>
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                Solution Trading PLC
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6 mr-4 border-r border-gray-100 pr-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-gray-600 hover:text-blue-600 transition-colors font-semibold text-sm flex items-center gap-1"
                >
                  {item.id === 'mobile-app' && <Smartphone className="w-4 h-4" />}
                  {item.name}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="hidden lg:inline-flex" onClick={() => onNavigate('auth')}>
                Login
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 shadow-md" onClick={() => onNavigate('auth')}>
                Get Started
              </Button>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <a href="tel:0960707058" className="p-2 text-blue-600 bg-blue-50 rounded-full">
              <Phone size={20} />
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}\
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-6 px-6 space-y-6 shadow-2xl absolute w-full left-0 top-20 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all font-medium text-lg flex items-center gap-3"
              >\
                {item.id === 'mobile-app' && <Smartphone className="w-5 h-5 text-blue-600" />}
                {item.name}
              </button>
            ))}
          </div>
          <div className="pt-6 border-t border-gray-100 space-y-3">
            <div className="flex flex-col gap-3">
              <div className="flex items-center text-gray-600 px-4 py-2">
                <Phone className="w-5 h-5 mr-3 text-blue-600" />
                <span className="font-medium">0960707058</span>
              </div>
              <div className="flex items-center text-gray-600 px-4 py-2">
                <Mail className="w-5 h-5 mr-3 text-blue-600" />
                <span className="font-medium text-sm">ethiopianappsale@gmail.com</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Button variant="outline" className="w-full h-12 rounded-xl" onClick={() => onNavigate('auth')}>
                Login
              </Button>
              <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg" onClick={() => onNavigate('auth')}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};