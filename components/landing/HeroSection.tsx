import { CheckCircle2, Zap } from "lucide-react";
import React from "react";
import { GetStartedButton } from "./GetStartedButton";
import { FloatingImage } from "./FloatingImage";

export const HeroSection = () => {
  const images = [
    {
      src: "/assets/images/slack.png",
      alt: "Slack Icon",
      position: "left-0 top-64 md:-left-10",
      delay: 0,
      cropPosition: "object-left-top",
    },
    {
      src: "/assets/images/intercom.png",
      alt: "intercom Icon",
      position: " top-64 md:-right-10",
      delay: 1,
      cropPosition: "object-right-top",
    },
    {
      src: "/assets/images/zendesk.png",
      alt: "zendesk Icon",
      position: "bottom-20 left-[10%]",
      delay: 2,
      cropPosition: "object-left-bottom",
    },
    {
      src: "/assets/images/fleshdesk.png",
      alt: "fleshdesk Icon",
      position: "right-[10%] bottom-20",
      delay: 3,
      cropPosition: "object-right-bottom",
    },
  ];
  return (
    <div>
      <section className=" py-20 md:pt-40 md:pb-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute blur-blob bg-purple-200 top-0 left-[35%] w-[500px] h-[500px]" />
        {/* <div className="absolute blur-blob bg-blue-200 bottom-0 right-[25%] w-[500px] h-[500px]" /> */}

        <div className="container mx-auto px-4">
          <div className=" flex flex-col items-center text-center space-y-8">
            <div className="max-w-4xl mx-auto text-center relative">
              {images.map((image, index) => (
                <FloatingImage
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={image.position}
                  delay={image.delay}
                  cropPosition={image.cropPosition}
                />
              ))}
              <div className="animate-fade-up">
                <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-8 shadow-md text-primary-600">
                  <Zap className="w-4 h-4" />
                  <span>Revolutionizing Customer Support</span>
                </div>
                <h1 className="text-4xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight">
                  Support Smarter with
                  <span className="text-primary-600 block">
                    {" "}
                    AI-Powered Insights
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Transform your customer support with AI that analyzes,
                  categorizes, and prioritizes tickets automatically. Reduce
                  response times and improve satisfaction.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <GetStartedButton
                    content="Start Free Trial"
                    className="py-7 px-12"
                    icon={true}
                  />
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
        </div>

        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
      </section>
    </div>
  );
};
