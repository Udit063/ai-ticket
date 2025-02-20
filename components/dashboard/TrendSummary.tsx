import { TrendingUpIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const trends = [
  "Authentication issues are the most reported problem this month",
  "Growing interest in dark mode functionality",
  "Billing integration delays causing user concerns",
];

export const TrendsSummary = () => {
  return (
    <Card className="w-full mb-6 rounded-md shadow-none">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold text-purple-800 dark:text-purple-100">
          Top Trends Summary
        </CardTitle>
        <TrendingUpIcon className="w-5 h-5 text-purple-500" />
      </CardHeader>
      <CardContent className="pt-4">
        <ul className="space-y-3">
          {trends.map((trend, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {trend}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            AI Analysis: Users are primarily reporting authentication issues
            when accessing their accounts. There&apos;s also growing interest in
            dark mode functionality and some concerns about payment processing
            delays.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
