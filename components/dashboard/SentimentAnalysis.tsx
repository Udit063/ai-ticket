"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent, CardTitle } from "@/components/ui/card";

const data = [
  { date: "Jan", positive: 65, negative: 35 },
  { date: "Feb", positive: 59, negative: 41 },
  { date: "Mar", positive: 80, negative: 20 },
  { date: "Apr", positive: 81, negative: 19 },
  { date: "May", positive: 56, negative: 44 },
  { date: "Jun", positive: 55, negative: 45 },
  { date: "Jul", positive: 40, negative: 60 },
];

export const SentimentAnalysis = () => {
  const [hoveredPoint, setHoveredPoint] = useState<(typeof data)[0] | null>(
    null
  );

  const latestTrend = useMemo(() => {
    const lastTwo = data.slice(-2);
    const diff = lastTwo[1].positive - lastTwo[0].positive;
    return {
      direction: diff > 0 ? "increasing" : diff < 0 ? "decreasing" : "stable",
      value: Math.abs(diff),
    };
  }, []);

  return (
    <Card className="overflow-hidden rounded-md shadow-none border ">
      <CardContent className="p-6">
        <div className="mb-6">
          <h2 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 ">
            <CardTitle>Sentiment Analysis Trend</CardTitle>
          </h2>
          <p className="text-xs text-purple-600  mt-1">
            Tracking positive and negative sentiment over time
          </p>
        </div>

        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              onMouseMove={(props) => {
                if (props.activePayload) {
                  setHoveredPoint(props.activePayload[0].payload);
                }
              }}
              onMouseLeave={() => setHoveredPoint(null)}
            >
              <defs>
                <linearGradient
                  id="gradientPositive"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="rgba(147, 51, 234, 0.5)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="rgba(147, 51, 234, 0.5)"
                    stopOpacity={0}
                  />
                </linearGradient>
                <linearGradient
                  id="gradientNegative"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="rgba(79, 70, 229, 0.5)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="rgba(79, 70, 229, 0.5)"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="date"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="positive"
                stroke="rgb(147, 51, 234)"
                strokeWidth={3}
                dot={false}
                activeDot={{
                  r: 8,
                  fill: "rgb(147, 51, 234)",
                  strokeWidth: 0,
                }}
                fillOpacity={1}
                fill="url(#gradientPositive)"
              />
              <Line
                type="monotone"
                dataKey="negative"
                stroke="rgb(79, 70, 229)"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 8, fill: "rgb(79, 70, 229)", strokeWidth: 0 }}
                fillOpacity={1}
                fill="url(#gradientNegative)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={hoveredPoint ? "hovered" : "default"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="mt-4 text-center"
          >
            {hoveredPoint ? (
              <p className="text-sm text-purple-700 dark:text-purple-300">
                In <span className="font-semibold">{hoveredPoint.date}</span>,
                positive sentiment was{" "}
                <span className="font-semibold text-green-600 dark:text-green-400">
                  {hoveredPoint.positive}%
                </span>{" "}
                and negative sentiment was{" "}
                <span className="font-semibold text-red-600 dark:text-red-400">
                  {hoveredPoint.negative}%
                </span>
              </p>
            ) : (
              <p className="text-sm text-purple-600 dark:text-purple-300">
                Hover over the chart to see detailed information
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 text-center">
          <p className="text-sm font-medium text-purple-700 dark:text-purple-300">
            Current Trend:
            <span
              className={`ml-2 ${
                latestTrend.direction === "increasing"
                  ? "text-green-600 dark:text-green-400"
                  : latestTrend.direction === "decreasing"
                  ? "text-red-600 dark:text-red-400"
                  : "text-yellow-600 dark:text-yellow-400"
              }`}
            >
              {latestTrend.direction === "increasing"
                ? `↗ Positive sentiment is up by ${latestTrend.value}%`
                : latestTrend.direction === "decreasing"
                ? `↘ Positive sentiment is down by ${latestTrend.value}%`
                : "→ Sentiment is stable"}
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    const positive = payload[0].value;
    const negative = payload[1].value;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-purple-100 dark:border-purple-800 max-w-xs"
      >
        <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2">
          {label}
        </h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-green-600 dark:text-green-400">
              Positive:
            </span>
            <span className="font-semibold text-green-600 dark:text-green-400">
              {positive}%
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-red-600 dark:text-red-400">
              Negative:
            </span>
            <span className="font-semibold text-red-600 dark:text-red-400">
              {negative}%
            </span>
          </div>
        </div>
        <p className="text-xs text-purple-600 dark:text-purple-300 mt-2">
          {positive > negative
            ? `Sentiment is ${positive - negative}% more positive`
            : positive < negative
            ? `Sentiment is ${negative - positive}% more negative`
            : "Sentiment is neutral"}
        </p>
      </motion.div>
    );
  }
  return null;
};
