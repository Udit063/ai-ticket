"use client";

import { motion } from "framer-motion";
import { Check, SparklesIcon } from "lucide-react";
import { useState } from "react";

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const features = {
    free: [
      "Up to 100 tickets per month",
      "Basic ticket summaries",
      "Standard categorization",
      "Simple QA analysis",
      "Email support",
      "Basic analytics dashboard",
    ],
    pro: [
      "Unlimited ticket processing",
      "Advanced AI customization",
      "Full historical data access",
      "Enhanced insights & reporting",
      "Priority support",
      "Custom integration options",
      "Advanced analytics",
      "API access",
    ],
  };

  return (
    <section id="pricing" className="w-full bg-white py-24 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 bg-purple-50 rounded-full px-4 py-2 mb-6">
            <SparklesIcon className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium text-purple-600">Pricing</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-5xl font-semibold tracking-tight sm:text-4xl"
          >
            Simple, Transparent <span className="text-purple-600">Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-300 text-xl"
          >
            Choose the plan that best fits your needs
          </motion.p>
        </div>
        <div className="mb-12 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 p-1 dark:border-gray-800"
          >
            <button
              onClick={() => setIsYearly(false)}
              className={`rounded-full px-6 py-1.5 text-sm font-medium transition-all ${
                !isYearly
                  ? "bg-purple-600 text-white"
                  : "hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`rounded-full px-6 py-1.5 text-sm font-medium transition-all ${
                isYearly
                  ? "bg-primary-600 text-white"
                  : "hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              Yearly
            </button>
          </motion.div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-purple-200 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="mb-8 space-y-4">
              <h3 className="text-xl font-semibold">Free Tier</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Perfect for getting started
              </p>
              <div>
                <span className="text-4xl font-semibold">$0</span>
                <span className="ml-1 text-gray-600 dark:text-gray-300">
                  /month
                </span>
                <p className="mt-1 text-sm text-purple-600 dark:text-purple-400">
                  Get started for free • No credit card required
                </p>
              </div>
              <button className="mt-2 w-full rounded-lg border border-purple-600 bg-white px-4 py-2 text-sm font-medium text-purple-600 transition-colors hover:bg-purple-50 dark:border-purple-400 dark:bg-gray-900 dark:text-purple-400 dark:hover:bg-gray-800">
                Get Started
              </button>
            </div>
            <div className="space-y-3">
              {features.free.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-purple-600 dark:text-purple-400" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative rounded-2xl border border-purple-200 bg-white p-8 shadow-sm transition-all hover:shadow-md dark:border-purple-800/50 dark:bg-gray-900"
          >
            <div className="absolute -top-px left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            <div className="mb-8 space-y-4">
              <h3 className="text-xl font-semibold">Pro Plan</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                For growing teams
              </p>
              <div>
                <span className="text-4xl font-semibold">
                  ${isYearly ? "499" : "49"}
                </span>
                <span className="ml-1 text-gray-600 dark:text-gray-300">
                  /{isYearly ? "year" : "month"}
                </span>
                {isYearly ? (
                  <p className="mt-1 text-sm text-purple-600 dark:text-purple-400">
                    Save $89 yearly
                  </p>
                ) : (
                  <p className="mt-1 text-sm text-purple-600 dark:text-purple-400">
                    Pay monthly, cancel anytime
                  </p>
                )}
              </div>
              <button className="mt-2 w-full rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700">
                Start Free Trial
              </button>
            </div>
            <div className="space-y-3">
              {features.pro.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-purple-600 dark:text-purple-400" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
