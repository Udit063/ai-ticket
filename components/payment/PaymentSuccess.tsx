import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export const PaymentSuccess = ({ amount }: { amount: string }) => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md shadow-md">
        <CardHeader className="text-center">
          <div className="mb-4 flex justify-center">
            <CheckCircle className="h-16 w-16 text-purple-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Payment Successful
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4 text-gray-600">
            Your payment of{" "}
            <span className="font-semibold text-purple-600">${amount}</span> has
            been processed successfully.
          </p>
          <p className="text-sm text-gray-500">Thank you for your purchase!</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/dashboard">
            <Button className="bg-purple-600 text-white hover:bg-purple-700">
              Return to Dashboard
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
