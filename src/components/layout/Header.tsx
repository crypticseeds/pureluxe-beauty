"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn, getImageSizes, getImageQuality } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (
        isMenuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".menu-button")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);

    if (href.startsWith('/')) {
      // Page navigation
      window.location.href = href;
    } else {
      // Smooth scroll to section
      const element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white",
        className
      )}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("home");
              }}
              className="block focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 rounded-md"
              aria-label="Pureluxe Beauty - Go to homepage"
            >
              <Image
                src="/banner.jpeg"
                alt="Pureluxe Beauty - Premium Beauty Products and Services"
                width={180}
                height={60}
                className="h-12 lg:h-14 w-auto object-contain hover:opacity-80 transition-opacity"
                priority
                quality={getImageQuality("logo")}
                sizes={getImageSizes("logo")}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href.startsWith('#') ? item.href.substring(1) : item.href);
                }}
                className="text-gray-700 hover:text-pink-500 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 rounded-md px-2 py-1"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Request Item CTA Button */}
            <Button
              variant="primary"
              size="md"
              onClick={() => handleNavClick("contact")}
              className="hidden sm:inline-flex"
              aria-label="Request a specific beauty item"
            >
              Request Item
            </Button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="menu-button md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-pink-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-colors"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          aria-hidden="true"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          "mobile-menu fixed top-0 right-0 h-full w-80 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2
              id="mobile-menu-title"
              className="text-lg font-semibold text-gray-900"
            >
              Menu
            </h2>
            <button
              type="button"
              className="p-2 rounded-md text-gray-700 hover:text-pink-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Menu Navigation */}
          <nav
            className="flex-1 px-4 py-6 space-y-4"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href.startsWith('#') ? item.href.substring(1) : item.href);
                }}
                className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-pink-500 hover:bg-pink-50 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu CTA */}
          <div className="p-4 border-t border-gray-200">
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleNavClick("contact")}
              className="w-full"
              aria-label="Request a specific beauty item"
            >
              Request Item
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
