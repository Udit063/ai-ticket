import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export const HeroSection = () => {
  return (
    <div>
      <section className=" py-20 md:pt-40 md:pb-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-8">
                <Zap className="w-4 h-4" />
                <span>Revolutionizing Customer Support</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight">
                Support Smarter with
                <span className="text-primary-600"> AI-Powered Insights</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                Transform your customer support with AI that analyzes,
                categorizes, and prioritizes tickets automatically. Reduce
                response times and improve satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button
                  size="sm"
                  className="bg-primary-600 hover:bg-primary-600 shadow-xl hover:-translate-y-1 transition-all ease-in-out duration-300 text-white px-8 h-14 text-lg group"
                >
                  Start Free Trial
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-all ease-in-out duration-300" />
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
      </section>
    </div>
  );
};
