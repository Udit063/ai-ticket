"use client";
import { useEffect } from "react";
import { Mail } from "lucide-react";

export const VerificationForm = () => {
  useEffect(() => {
    const container = document.querySelector(".verify-container");
    if (container) {
      container.classList.add("opacity-100");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="verify-container max-w-md w-full mx-4 p-8 bg-white rounded-2xl shadow-sm opacity-0 transition-opacity duration-700">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-purple-600" />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-gray-900">
              Check your email
            </h1>
            <p className="text-gray-600">
              We&apos;ve sent a link to your email address. Please click the
              link to verify your account.
            </p>
          </div>

          <div className="pt-4 space-y-4">
            <div className="text-sm text-gray-500">
              Didn&apos;t receive the email? Check your spam folder or
              <button
                className="text-purple-600 hover:text-purple-700 font-medium ml-1 transition-colors duration-200"
                onClick={() => window.history.back()}
              >
                try another email address
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
