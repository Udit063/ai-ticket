"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export const Onboarding = () => {
  const [timeRange, setTimeRange] = useState("1");
  const [isConnecting, setIsConnecting] = useState(false);

  const connectIntercom = () => {
    setIsConnecting(true);
    console.log("Connecting Intercom", timeRange);
    setTimeout(() => {
      setIsConnecting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full mx-3 md:w-3/5 xl:mx-0 xl:w-1/4 flex flex-col border-none">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Connect Intercom
          </CardTitle>
          <CardDescription className="text-center text-gray-500">
            Import your Intercom tickets to get started
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Import Time Range</Label>
            <Select
              defaultValue="1"
              onValueChange={(value) => setTimeRange(value)}
            >
              <SelectTrigger className="h-12 bg-gray-50/50">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Last 1 month</SelectItem>
                <SelectItem value="3">Last 3 months</SelectItem>
                <SelectItem value="6">Last 6 months</SelectItem>
                <SelectItem value="12">Last 12 months</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={connectIntercom}
            className="w-full h-12 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            disabled={isConnecting}
          >
            {isConnecting ? "Connecting..." : "Connect Intercom"}
          </Button>

          <Link href="/register">
            <Button
              variant="outline"
              className="w-full h-12 hover:bg-gray-50 border-gray-200 shadow-sm transition-all duration-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};
