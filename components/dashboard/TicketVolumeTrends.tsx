import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ticketTrendData = [
  { date: "2024-01", tickets: 950, resolved: 850 },
  { date: "2024-02", tickets: 1200, resolved: 1000 },
  { date: "2024-03", tickets: 1200, resolved: 1250 },
  { date: "2024-04", tickets: 1000, resolved: 1400 },
  { date: "2024-05", tickets: 1200, resolved: 1100 },
  { date: "2024-06", tickets: 1300, resolved: 1200 },
];

export const TicketVolumeTrends = () => {
  return (
    <div>
      <Card className="rounded-md shadow-none">
        <CardHeader>
          <CardTitle>Ticket Volume Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide">
              <div
                style={{
                  width: `${ticketTrendData.length * 100}px`,
                  minWidth: "100%",
                }}
              >
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={ticketTrendData}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.5} />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "none",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                        borderRadius: "0.5rem",
                      }}
                    />
                    <defs>
                      <linearGradient
                        id="ticketsGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#7c3aed"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#7c3aed"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                      <linearGradient
                        id="resolvedGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#a78bfa"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#a78bfa"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="tickets"
                      name="Total Tickets"
                      stroke="#7c3aed"
                      fill="url(#ticketsGradient)"
                      fillOpacity={0.4}
                      strokeWidth={2}
                    />
                    <Area
                      type="monotone"
                      dataKey="resolved"
                      name="Resolved"
                      stroke="#a78bfa"
                      fill="url(#resolvedGradient)"
                      fillOpacity={0.4}
                      strokeWidth={2}
                    />
                    <Legend />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
