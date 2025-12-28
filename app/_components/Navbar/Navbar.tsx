"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Cart", href: "/cart" },
    { label: "Products", href: "/products" },
    { label: "Categories", href: "/categories" },
    { label: "Brands", href: "/brands" },
];

const socialLinks = [
    { icon: "fab fa-facebook", label: "Facebook", href: "https://facebook.com" },
    { icon: "fab fa-twitter", label: "Twitter", href: "https://twitter.com" },
    { icon: "fab fa-instagram", label: "Instagram", href: "https://instagram.com" },
    { icon: "fab fa-tiktok", label: "TikTok", href: "https://tiktok.com" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-emerald-600 text-white">
      <div className="container mx-auto flex items-center justify-between p-4 lg:w-[90%]">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center gap-2">
          <i className="fas fa-shopping-cart"></i>
          E-Commerce
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-emerald-200">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <ul className="hidden lg:flex gap-4 items-center">
          {socialLinks.map(({ icon, label }, index) => (
            <li key={index}>
              <a href="#" className="hover:text-emerald-200" aria-label={label}>
                <i className={icon}></i>
              </a>
            </li>
          ))}
          <li><Link href="/register" className="hover:text-emerald-200">Register</Link></li>
          <li><Link href="/login" className="hover:text-emerald-200">Login</Link></li>
          <li><Link href="/login" className="hover:text-emerald-200">Signout</Link></li>
        </ul>

        {/* Mobile Button */}
        <button
          className="lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
    <div
      className={`overflow-hidden bg-emerald-700 transition-all duration-300 ease-in-out transform origin-top ${
        menuOpen
        ? "max-h-[500px] opacity-100 scale-100 py-6 visible"
        : "max-h-0 opacity-0 scale-95 py-0 invisible"
      }`}
    >
        <ul className="flex flex-col items-center gap-4">
          {navLinks.map((link,index) => (
            <li key={index}>
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="block py-2"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex justify-center gap-4 mt-6">
          {socialLinks.map(({ icon, label }) => (
            <li key={label}>
              <a href="#" aria-label={label}>
                <i className={icon}></i>
              </a>
            </li>
          ))}
          <li><a href="#">Register</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}
