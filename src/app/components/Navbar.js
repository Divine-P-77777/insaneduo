"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import clsx from "clsx";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggle]);

  const navLinks = [
    { name: "Home", link: "home" },
    {
      name: "More",
      link: "about",
      dropdown: [
        { name: "Who We Are", link: "about" },
        { name: "Performances", link: "achievements" },
        { name: "Tour", link: "/tour" },
        { name: "Events Archive", link: "gallery" },
      ],
    },
    { name: "Work", link: "experience" },
    { name: "Achievements", link: "achievements" },
    { name: "About", link: "about" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <nav
      className={clsx(
        "fixed top-0 w-full z-50 py-4 px-6 transition-all duration-500",
        scrolled && !toggle ? "backdrop-blur-md bg-black/60" : "bg-transparent"
      )}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <ScrollLink
          to="home"
          smooth
          duration={1000}
          className="cursor-pointer flex items-center gap-3 group"
        >
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20 group-hover:border-purple-500 transition-colors">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="font-cinzel text-2xl text-white tracking-widest">
            Insane Duo
          </div>
        </ScrollLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <li key={item.link} className="relative group">
              {item.dropdown ? (
                <div className="relative h-full flex items-center">
                  <span className="text-sm font-outfit uppercase tracking-wider text-gray-300 hover:text-purple-400 cursor-pointer transition-colors duration-300 flex items-center gap-1 group-hover:text-purple-400">
                    {item.name}
                    <svg
                      className="w-4 h-4 transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-xl p-2 flex flex-col gap-1">
                      {item.dropdown.map((subItem) => {
                        if (subItem.link.startsWith("/")) {
                          return (
                            <Link
                              key={subItem.link}
                              href={subItem.link}
                              className="block px-4 py-3 text-sm font-outfit text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer text-center"
                            >
                              {subItem.name}
                            </Link>
                          );
                        }
                        return (
                          <ScrollLink
                            key={subItem.link}
                            to={subItem.link}
                            smooth
                            duration={1000}
                            className="block px-4 py-3 text-sm font-outfit text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer text-center"
                          >
                            {subItem.name}
                          </ScrollLink>
                        )
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <ScrollLink
                  to={item.link}
                  smooth
                  duration={1000}
                  className="text-sm font-outfit uppercase tracking-wider text-gray-300 hover:text-purple-400 cursor-pointer transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-purple-400 transition-all duration-300 group-hover:w-full" />
                </ScrollLink>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <svg className="w-8 h-8 text-white transition-transform duration-300 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8 text-white transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={clsx(
          "md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500",
          toggle
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <button
          className="absolute top-8 right-8"
          onClick={() => setToggle(false)}
        >
          <svg className="w-8 h-8 text-white hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className="flex flex-col gap-6 text-center max-h-[80vh] overflow-y-auto w-full px-6">
          {navLinks.map((item) => (
            <li key={item.link} className="w-full">
              {item.dropdown ? (
                <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl font-cinzel text-white/50 mb-2">{item.name}</span>
                  <div className="flex flex-col gap-3 w-full items-center bg-white/5 rounded-xl p-4 border border-white/5">
                    {item.dropdown.map((subItem) => {
                      if (subItem.link.startsWith("/")) {
                        return (
                          <Link
                            key={subItem.link}
                            href={subItem.link}
                            className="text-lg font-outfit text-purple-300 hover:text-white cursor-pointer"
                            onClick={() => setToggle(false)}
                          >
                            {subItem.name}
                          </Link>
                        );
                      }
                      return (
                        <ScrollLink
                          key={subItem.link}
                          to={subItem.link}
                          smooth
                          duration={1000}
                          className="text-lg font-outfit text-purple-300 hover:text-white cursor-pointer"
                          onClick={() => setToggle(false)}
                        >
                          {subItem.name}
                        </ScrollLink>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <ScrollLink
                  to={item.link}
                  smooth
                  duration={1000}
                  className="text-2xl font-cinzel text-white hover:text-purple-400 cursor-pointer block"
                  onClick={() => setToggle(false)}
                >
                  {item.name}
                </ScrollLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
