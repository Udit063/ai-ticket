"use client";
import React from "react";
import { Button } from "../ui/button";
import { CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

export const Pricing = () => {
  const router = useRouter();
  const pricingPlans = [
    {
      name: "Free Tier",
      price: "0",
      description: "Perfect for getting started",
      features: [
        "Up to 100 tickets per month",
        "Basic ticket summaries",
        "Standard categorization",
        "Simple QA analysis",
        "Email support",
        "Basic analytics dashboard",
      ],
      highlighted: false,
      buttonText: "Get Started",
    },
    {
      name: "Pro Plan",
      price: "49",
      period: "/month",
      description: "For growing teams",
      features: [
        "Unlimited ticket processing",
        "Advanced AI customization",
        "Full historical data access",
        "Enhanced insights & reporting",
        "Priority support",
        "Custom integration options",
        "Advanced analytics",
        "API access",
      ],
      highlighted: true,
      buttonText: "Start Free Trial",
    },
  ];

  const handlePayment = (planName: string) => {
    router.push(`/payment?plan=${planName}`);
  };

  return (
    <div>
      <section className="py-20 bg-gray-50" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that best fits your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl ${
                  plan.highlighted
                    ? "border-2 border-primary-500 shadow-xl"
                    : "border border-gray-100"
                } overflow-hidden group hover:shadow-lg transition-shadow`}
              >
                <div
                  className={`p-8 ${
                    plan.highlighted ? "bg-primary-500" : "bg-white"
                  }`}
                >
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      plan.highlighted ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div
                    className={`text-4xl font-bold mb-2 ${
                      plan.highlighted ? "text-white" : "text-gray-900"
                    }`}
                  >
                    ${plan.price}
                    {plan.period && (
                      <span className="text-lg font-normal text-gray-400">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p
                    className={
                      plan.highlighted ? "text-primary-100" : "text-gray-600"
                    }
                  >
                    {plan.description}
                  </p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3 text-gray-600"
                      >
                        <CheckCircle2
                          className={`w-5 h-5 ${
                            plan.highlighted
                              ? "text-primary-500"
                              : "text-green-500"
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => handlePayment(plan.name)}
                    className={`w-full h-12 ${
                      plan.highlighted
                        ? "bg-primary-500 hover:bg-primary-600 text-white"
                        : "bg-white border-2 border-primary-500 text-primary-600 hover:bg-primary-50"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
