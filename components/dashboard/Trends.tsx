"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const data = [
  { month: "Jun 2023", deals: 200, closedDeals: 180 },
  { month: "Jul 2023", deals: 250, closedDeals: 220 },
  { month: "Aug 2023", deals: 300, closedDeals: 280 },
  { month: "Sep 2023", deals: 400, closedDeals: 350 },
  { month: "Oct 2023", deals: 500, closedDeals: 450 },
  { month: "Nov 2023", deals: 800, closedDeals: 700 },
  { month: "Dec 2023", deals: 1000, closedDeals: 900 },
  { month: "Jan 2024", deals: 1200, closedDeals: 1100 },
];

export const TrendAnalysis = () => {
  return (
    <div className="animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground">
              Trend Analysis
            </h1>
            <p className="text-muted-foreground">
              Track your performance metrics over time
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Pipeline Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="deals" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#9b87f5"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#9b87f5"
                          stopOpacity={0}
                        />
                      </linearGradient>
                      <linearGradient
                        id="closedDeals"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#6366f1"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#6366f1"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="deals"
                      stroke="#9b87f5"
                      fillOpacity={1}
                      fill="url(#deals)"
                    />
                    <Area
                      type="monotone"
                      dataKey="closedDeals"
                      stroke="#6366f1"
                      fillOpacity={1}
                      fill="url(#closedDeals)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Success Rate Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="deals"
                      stroke="#9b87f5"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="closedDeals"
                      stroke="#6366f1"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
