import { PaymentSuccess } from "@/components/payment/PaymentSuccess";
import React from "react";

export default function PaymentSuccessPage({
  searchParams: { amount },
}: {
  searchParams: { amount: string };
}) {
  return (
    <div>
      <PaymentSuccess amount={amount} />
    </div>
  );
}
