"use client";

import { motion } from "framer-motion";
import { Check, SparklesIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { pricingPlans } from "@/constants/pricingPlans";
// import { User } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { createClient } from "@/lib/supabase/client";

interface Plan {
  price: string | number;
  link: string;
}

export const Pricing = () => {
  const supabase = createClient();
  const router = useRouter();
  const [isYearly, setIsYearly] = useState(false);
  const [user, setUser] = useState(null);

  const getDisplayPlans = () => {
    return pricingPlans.filter(
      (plan) => plan.period === (isYearly ? "/year" : "/month")
    );
  };

  useEffect(() => {
    async function fetchUser() {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        console.error("Error fetching user:", error);
      } else {
        console.log("user data", data.user);

        setUser(data.user);
      }
    }

    fetchUser();
  }, []);

  const handlePlanSelect = async (plan: Partial<Plan>) => {
    if (plan.price === "0") {
      router.push(plan.link);
      return;
    }

    if (!user) {
      router.push(`/login?redirectTo=${"/#pricing"}`);
      return;
    }

    router.push(`${plan.link}?prefilled_email=${user.email}`);
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
            className="mb-4 text-3xl md:text-5xl font-semibold tracking-tight sm:text-4xl"
          >
            Simple, Transparent <span className="text-purple-600">Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-300 text-md md:text-xl"
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
                  ? "bg-purple-600 text-white"
                  : "hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              Yearly
            </button>
          </motion.div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {getDisplayPlans().map((plan, index) => (
            <motion.div
              key={`${plan.name}-${plan.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`relative rounded-2xl border ${
                plan.highlighted
                  ? "border-purple-200 dark:border-purple-800/50"
                  : "border-gray-200 dark:border-gray-800"
              } bg-white p-8 shadow-sm transition-all hover:shadow-md dark:bg-gray-900`}
            >
              {plan.highlighted && (
                <div className="absolute -top-px left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
              )}
              <div className="mb-8 space-y-4">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {plan.description}
                </p>
                <div>
                  <span className="text-4xl font-semibold">${plan.price}</span>
                  <span className="ml-1 text-gray-600 dark:text-gray-300">
                    {plan.period}
                  </span>
                  {plan.callout && (
                    <p className="mt-1 text-sm text-purple-600 dark:text-purple-400">
                      {plan.callout}
                    </p>
                  )}
                </div>
                <Button
                  className={`mt-2 w-full rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    plan.buttonVariant === "outline"
                      ? "border border-purple-600 bg-white text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:bg-gray-900 dark:text-purple-400 dark:hover:bg-gray-800"
                      : "bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700"
                  }`}
                  onClick={() => handlePlanSelect(plan)}
                >
                  {plan.buttonText}
                </Button>
              </div>
              <div className="space-y-3">
                {plan.features.map((feature) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};
