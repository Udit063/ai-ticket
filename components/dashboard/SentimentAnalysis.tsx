import { Card } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", positive: 65, negative: 35 },
  { name: "Feb", positive: 72, negative: 28 },
  { name: "Mar", positive: 58, negative: 42 },
  { name: "Apr", positive: 80, negative: 20 },
  { name: "May", positive: 75, negative: 25 },
  { name: "Jun", positive: 85, negative: 15 },
];

export const SentimentAnalysis = () => {
  return (
    <Card className="p-6 backdrop-blur-sm bg-white/50 border-purple-100">
      <h3 className="font-semibold text-lg mb-6 text-gray-900">
        Sentiment Trend
      </h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorPositive" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#9b87f5" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorNegative" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#818cf8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#818cf8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              stroke="#6b7280"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#6b7280"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="positive"
              stroke="#9b87f5"
              fillOpacity={1}
              fill="url(#colorPositive)"
            />
            <Area
              type="monotone"
              dataKey="negative"
              stroke="#818cf8"
              fillOpacity={1}
              fill="url(#colorNegative)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
