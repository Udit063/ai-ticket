"use client";
import { Menu, MessageSquare, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50">
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
                href="#testimonials"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                Testimonials
              </a>
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-primary-600"
              >
                Sign In
              </Button>
              <Button className="bg-primary-500 hover:bg-primary-600 text-white">
                Get Started
              </Button>
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
              {/* ... keep existing code (mobile menu) */}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};
