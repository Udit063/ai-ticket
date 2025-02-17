import { MessageSquare } from "lucide-react";
import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-50 border-t border-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            {/* Logo Section */}
            <div className="lg:w-1/4">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary-500 p-2 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-xl text-gray-900">
                  TicketAI
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                Transforming customer support with AI-powered ticket analysis
                and automation.
              </p>
            </div>

            <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-gray-900 font-semibold mb-4">Product</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#features"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#integrations"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      Integrations
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#about"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#blog"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#careers"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#docs"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#support"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#status"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      Status
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#privacy"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#terms"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      Terms
                    </a>
                  </li>
                  <li>
                    <a
                      href="#security"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      Security
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8">
            <p className="text-gray-600 text-sm text-center">
              © 2024 AI Ticket Summarizer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
