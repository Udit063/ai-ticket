"use client";
import { Menu, MessageSquare, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { GetStartedButton } from "./GetStartedButton";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#questions", label: "FAQs" },
  ];

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 bg-white/50 backdrop-blur-xl border-b border-gray-100 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3">
                <div className="bg-primary-500 p-2 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-xl text-gray-900">
                  TicketAI
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#questions"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                FAQs
              </a>
              {/* </div>
            <div className="hidden md:flex items-center gap-8"> */}
              {/* <Link href="/register">
                <Button className="bg-primary-500 hover:bg-primary-600 text-white">
                  Get Started
                </Button>
              </Link> */}
              <Link href="/register">
                <GetStartedButton content="Get Started" />
              </Link>
            </div>

            <button
              className="md:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 animate-fade-in">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                  <GetStartedButton content="Get Started" className="w-full" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};
