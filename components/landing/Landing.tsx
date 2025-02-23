import { Lightbulb, TrendingUp, Brain, SparklesIcon } from "lucide-react";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { CTA } from "./CTA";
import { Footer } from "./Footer";
import { Pricing } from "./Pricing";
import { FAQ } from "./FAQs";
import Image from "next/image";
import { Testimonials } from "./Testimonials";
import FeaturesSection from "./FeatureSection";

export const LandingPage = () => {
  const advancedFeatures = [
    {
      icon: <Brain className="w-6 h-6 text-primary-600" />,
      title: "AI-Powered Ticket Analysis",
      description:
        "Our advanced AI processes each ticket, extracting key information, sentiment, and priority to streamline your support workflow.",
      image:
        "https://media.istockphoto.com/id/1515913422/photo/a-data-analyst-using-technology-ai-for-working-tool-for-data-analysis-chatbot-chat-with-ai.jpg?s=612x612&w=0&k=20&c=oOKLdZJpcsrUbNrnGVf8TwoIdYud4mWoBkx1A3PdXI0=",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-primary-600" />,
      title: "Smart Categorization",
      description:
        "Automatically categorize and route tickets to the right department or team member, reducing response times and improving efficiency.",
      image:
        "https://collectionperformance.com/wp-content/uploads/elementor/thumbs/smart-home-house-technology-3574545-qh8obn6cde8lirj94bvtmh1dk6feel21gfc8vf86y8.jpg",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary-600" />,
      title: "Actionable Insights",
      description:
        "Gain valuable insights into your support performance with detailed analytics and customizable reports.",
      image:
        "https://media.istockphoto.com/id/1488294044/photo/businessman-works-on-laptop-showing-business-analytics-dashboard-with-charts-metrics-and-kpi.jpg?s=612x612&w=0&k=20&c=AcxzQAe1LY4lGp0C6EQ6reI7ZkFC2ftS09yw_3BVkpk=",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Navbar />

      <HeroSection />

      <FeaturesSection />
      <div className=" bg-white py-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-purple-50 rounded-full px-4 py-2 mb-6">
              <SparklesIcon className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">
                Integrations
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              <span className="text-primary-600">Seamless Integration</span>{" "}
              with Your Tools
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-xl">
              Connect with your favorite platforms in minutes. Start with
              Intercom, with more integrations coming soon.
            </p>
          </div>
          <div className="flex justify-center gap-8 animate-fade-in">
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

      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-50 rounded-full px-4 py-2 mb-6">
              <SparklesIcon className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">
                Features
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              <span className="text-primary-600">Powerful Features</span> for
              Modern Support Teams
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to transform your customer support experience
            </p>
          </div>
          <div className="space-y-24">
            {advancedFeatures.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="max-w-xl">
                    <div className="bg-primary-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-xl text-gray-600 mb-8">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="flex-1">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="rounded-2xl shadow-2xl w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />

      <Footer />
    </div>
  );
};
