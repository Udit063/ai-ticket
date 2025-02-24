"use client";
import {
  SparklesIcon,
  Brain,
  Lightbulb,
  TrendingUp,
  Paperclip,
} from "lucide-react";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;

  title: string;

  description: string;

  className?: string;

  delay?: number;
}

const FeatureCard = ({
  icon,
  title,
  description,
  className,
  delay = 0,
}: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={cn(
      "p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300",

      "group cursor-pointer",

      className
    )}
  >
    <div className="mb-6 inline-block p-3 rounded-xl bg-primary/5 text-primary transition-colors duration-300 group-hover:bg-primary/10">
      {icon}
    </div>

    <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>

    <p className="text-gray-600 leading-relaxed">{description}</p>

    <motion.div
      className="mt-6 inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300"
      whileHover={{ x: 5 }}
    >
      Learn more
      <svg
        className="w-4 h-4 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </motion.div>
  </motion.div>
);

export const BentoGrid = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-50 rounded-full px-4 py-2 mb-6">
            <SparklesIcon className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium text-purple-600">
              Features
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-primary-600">Powerful Features</span> for
            Modern Support Teams
          </h2>
          <p className="text-md md:text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to transform your customer support experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            icon={<Brain className="w-6 h-6" />}
            title="AI-Powered Ticket Analysis"
            description="Our advanced AI processes each ticket, extracting key information, sentiment, and priority to streamline your support workflow."
            delay={0.1}
          />

          <FeatureCard
            icon={<Lightbulb className="w-6 h-6" />}
            title="Smart Categorization"
            description="Automatically categorize and route tickets to the right department or team member, reducing response times and improving efficiency."
            delay={0.2}
          />

          <FeatureCard
            icon={<TrendingUp className="w-6 h-6" />}
            title="Actionable Insights"
            description="Gain valuable insights into your support performance with detailed analytics and customizable reports."
            delay={0.3}
          />
          <FeatureCard
            icon={<Paperclip className="w-6 h-6" />}
            title="Better Alerts and Reports "
            description="Get all of your data directly to your slack channels, get all the alerts you want to set."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};
