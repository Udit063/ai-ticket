import { SparklesIcon } from "lucide-react";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { CTA } from "./CTA";
import { Footer } from "./Footer";
import { Pricing } from "./Pricing";
import { FAQ } from "./FAQs";
import Image from "next/image";
import { Testimonials } from "./Testimonials";
import FeaturesSection from "./FeatureSection";
import { BentoGrid } from "./BentoGrid";

export const LandingPage = () => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-white to-purple-50">
      <Navbar />

      <HeroSection />

      <FeaturesSection />
      <div className=" bg-white py-12 md:py-20">
        <div className="container mx-auto px-2 md:px-4 py-16">
          <div className="text-center mb-12 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-purple-50 rounded-full px-4 py-2 mb-6">
              <SparklesIcon className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">
                Integrations
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-primary-600">Seamless Integration</span>{" "}
              with Your Tools
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-md md:text-xl">
              Connect with your favorite platforms in minutes. Start with
              Intercom, with more integrations coming soon.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 animate-fade-in">
            <div className="bg-white p-4 rounded-md shadow-sm flex items-center gap-4 border border-gray-100">
              <Image
                src="/assets/images/slack.png"
                width={25}
                height={25}
                alt="slack"
                // className="w-8 h-8 object-contain"
              />
              <span className="text-gray-700 font-medium">Slack</span>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4 border border-gray-100">
              <Image
                src="/assets/images/intercom.png"
                alt="Intercom"
                width={25}
                height={25}
                // className="w-8 h-8 object-contain"
              />
              <span className="text-gray-700 font-medium">Intercom</span>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4 border border-gray-100">
              <Image
                src="/assets/images/zendesk.png"
                alt="zendesk"
                width={25}
                height={25}
                // className="w-8 h-8 object-contain"
              />
              <span className="text-gray-700 font-medium">Intercom</span>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4 border border-gray-100">
              <Image
                src="/assets/images/fleshdesk.png"
                alt="fleshdesk"
                width={25}
                height={25}
                // className="w-8 h-8 object-contain"
              />
              <span className="text-gray-700 font-medium">Intercom</span>
            </div>
          </div>
        </div>
      </div>

      <BentoGrid />

      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />

      <Footer />
    </div>
  );
};
