"use client";

import { motion } from "framer-motion";
import { Brain, Clock, Shield, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Smart AI Analysis",
    description:
      "Advanced machine learning algorithms analyze and categorize support tickets automatically.",
    gradient: "from-purple-600 to-indigo-600",
  },
  {
    icon: Clock,
    title: "Real-time Processing",
    description:
      "Instant analysis and categorization of incoming tickets as they arrive.",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime guarantee.",
    gradient: "from-purple-600 to-blue-600",
  },
  {
    icon: RefreshCw,
    title: "Auto Updates",
    description:
      "Continuous improvements and model updates for better accuracy.",
    gradient: "from-purple-600 to-violet-600",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative w-full px-4 bg-gray-50 py-16">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[100px] -translate-x-1/2 rounded-full bg-purple-200/50 blur-3xl " />
      </div>

      <div className="container relative">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800 h-full">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 to-purple-400/20 opacity-0 transition-opacity duration-300 " />

                <div className="relative mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600/10 to-purple-400/10 p-2.5">
                    <feature.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>

                <h3 className="mb-2 text-xl font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
