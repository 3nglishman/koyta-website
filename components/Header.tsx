'use client';
import Link from 'next/link';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/the-kipsigis', label: 'The Kipsigis' },
  { href: '/projects', label: 'Projects' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/our-mission', label: 'Our Mission' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full bg-white border-b-2 border-[#c41e7f]">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Desktop nav */}
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-gray-800 hover:text-[#c41e7f] font-medium">{l.label}</Link>
          ))}
        </div>
        {/* Donate - desktop */}
        <a href="https://donate.stripe.com/8x23cx0DQ4RUaDN63i57W00" target="_blank" rel="noopener noreferrer" className="hidden md:block text-[#cc007e] hover:text-[#a0005e] font-medium">Donate Here</a>
        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 bg-[#c41e7f] transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#c41e7f] transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#c41e7f] transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
        <a href="https://donate.stripe.com/8x23cx0DQ4RUaDN63i57W00" target="_blank" rel="noopener noreferrer" className="md:hidden text-[#cc007e] hover:text-[#a0005e] font-medium text-sm">Donate</a>
      </nav>
      {/* Mobile menu dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#c41e7f] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-gray-800 hover:text-[#c41e7f] font-medium" onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
