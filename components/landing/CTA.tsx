import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <div>
      <section className="py-12 md:py-20 bg-white w-full">
        <div className="container mx-auto px-1 md:px-4">
          <div className=" mx-auto bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-6 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Support?
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Join thousands of companies using TicketAI to improve their
                customer support.
              </p>
              <Button
                size="lg"
                className="bg-white text-primary-600 hover:bg-primary-50 h-14 px-8 text-lg"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]" />
          </div>
        </div>
      </section>
    </div>
  );
};
