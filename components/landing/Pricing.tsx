"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  createClientComponentClient,
  User,
} from "@supabase/auth-helpers-nextjs";
import { pricingPlans } from "@/constants/pricingPlans";

export const Pricing = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const supabase = createClientComponentClient();
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();
        if (error) {
          console.error("Auth error:", error);
        }
        if (session?.user) {
          setUser(session?.user);
        }
      } catch (err) {
        console.error("Failed to get session:", err);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [supabase]);

  const handlePlanSelect = async (plan: any) => {
    if (plan.price === "0") {
      router.push(plan.link);
      return;
    }

    if (!user) {
      router.push(`/login?redirectTo=${"/"}`);
      return;
    }

    router.push(`${plan.link}?prefilled_email=${user.email}`);
  };
  return (
    <div id="pricing">
      <div className="py-20 bg-gray-50" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that best fits your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8  mx-auto">
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
                    onClick={() => handlePlanSelect(plan)}
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
      </div>
    </div>
  );
};
