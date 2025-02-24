"use client";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  LabelList,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import "./ScrollbarHide.css";
import { Filter } from "./Filter";
import { TrendsSummary } from "./TrendSummary";
import { BookOpenText } from "lucide-react";
import { SentimentAnalysis } from "./SentimentAnalysis";
import { TicketVolumeTrends } from "./TicketVolumeTrends";

const categoryData = [
  { name: "Technical Issues", value: 35 },
  { name: "Feature Requests", value: 25 },
  { name: "Billing Questions", value: 20 },
  { name: "General Inquiries", value: 20 },
];

const teamData = [
  { name: "Frontend Team", value: 20 },
  { name: "Backend Team", value: 18 },
  { name: "QA Team", value: 15 },
  { name: "DevOps Team", value: 12 },
  { name: "Security Team", value: 16 },
  { name: "Cloud Team", value: 14 },
  { name: "Product Management", value: 10 },
  { name: "Design Team", value: 8 },
];

export const Dashboard = () => {
  return (
    <div className="animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row gap-6 justify-between md:items-center">
          <div>
            <div className="flex items-center gap-3">
              <BookOpenText className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent">
                Overview
              </h1>
            </div>
            <p className="text-muted-foreground">
              Overview of your support operations
            </p>
          </div>
          <Filter />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          <Card className="rounded-md shadow-none">
            <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Tickets
              </CardTitle>
              <Badge className="bg-green-500/10 text-green-500 w-fit">
                +12.2%
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">vs. last month</p>
            </CardContent>
          </Card>
          <Card className="rounded-md shadow-none">
            <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg. Response Time
              </CardTitle>
              <Badge className="bg-red-500/10 text-red-500 w-fit">-4.1%</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.4h</div>
              <p className="text-xs text-muted-foreground">vs. last month</p>
            </CardContent>
          </Card>
          <Card className="rounded-md shadow-none">
            <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Customer Satisfaction
              </CardTitle>
              <Badge className="bg-green-500/10 text-green-500 w-fit">
                +5.2%
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94%</div>
              <p className="text-xs text-muted-foreground">
                based on sentiment
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-md shadow-none">
            <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Resolution Rate
              </CardTitle>
              <Badge className="bg-green-500/10 text-green-500 w-fit">
                +3.7%
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">88%</div>
              <p className="text-xs text-muted-foreground">vs. last month</p>
            </CardContent>
          </Card>
        </div>

        <TicketVolumeTrends />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="rounded-md shadow-none">
            <CardHeader>
              <CardTitle className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                Ticket Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="overflow-x-auto scrollbar-hide">
                  <div
                    style={{
                      width: `${categoryData.length * 100}px`,
                      minWidth: "100%",
                    }}
                  >
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart
                        data={categoryData}
                        barSize={60}
                        margin={{
                          top: 20,
                        }}
                      >
                        <CartesianGrid
                          strokeDasharray="3 3"
                          opacity={0.5}
                          vertical={false}
                        />
                        <XAxis
                          dataKey="name"
                          angle={-20}
                          textAnchor="middle"
                          height={60}
                          tick={{
                            fill: "#666",
                            fontSize: 10,
                          }}
                          tickMargin={15}
                        />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          tickMargin={10}
                        />
                        <Tooltip
                          cursor={{ fill: "transparent" }}
                          contentStyle={{
                            backgroundColor: "white",
                            border: "none",
                            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                            borderRadius: "0.5rem",
                          }}
                        />
                        <Bar
                          dataKey="value"
                          fill="#9761f4"
                          radius={[4, 4, 0, 0]}
                        >
                          <LabelList
                            dataKey="value"
                            position="top"
                            formatter={(value: number | string) => `${value}%`}
                            style={{ fill: "#666", fontSize: "10px" }}
                          />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-md shadow-none">
            <CardHeader>
              <CardTitle className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                Teams/User Assigned
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="overflow-x-auto scrollbar-hide">
                  <div
                    style={{
                      width: `${teamData.length * 100}px`,
                      minWidth: "100%",
                    }}
                  >
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart
                        data={teamData}
                        barSize={60}
                        margin={{
                          top: 20,
                        }}
                      >
                        <CartesianGrid
                          strokeDasharray="3 3"
                          opacity={0.5}
                          vertical={false}
                        />
                        <XAxis
                          dataKey="name"
                          angle={-20}
                          textAnchor="middle"
                          height={60}
                          tick={{
                            fill: "#666",
                            fontSize: 10,
                          }}
                          tickMargin={15}
                        />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          tickMargin={10}
                        />
                        <Tooltip
                          cursor={{ fill: "transparent" }}
                          contentStyle={{
                            backgroundColor: "white",
                            border: "none",
                            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                            borderRadius: "0.5rem",
                          }}
                        />
                        <Bar
                          dataKey="value"
                          fill="#fc5fbb"
                          radius={[4, 4, 0, 0]}
                        >
                          <LabelList
                            dataKey="value"
                            position="top"
                            formatter={(value: number | string) => `${value}%`}
                            style={{ fill: "#666", fontSize: "10px" }}
                          />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <SentimentAnalysis />

        <TrendsSummary />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="rounded-md shadow-none">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Tickets</CardTitle>
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard/tickets">View All</Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Login Authentication Error",
                    description: "Users unable to access their accounts",
                    priority: "High",
                    time: "2 hours ago",
                  },
                  {
                    title: "Billing Integration Issue",
                    description: "Payment processing delays reported",
                    priority: "Medium",
                    time: "3 hours ago",
                  },
                  {
                    title: "Feature Enhancement Request",
                    description: "Multiple users requesting dark mode",
                    priority: "Low",
                    time: "5 hours ago",
                  },
                ].map((ticket) => (
                  <div
                    key={ticket.title}
                    className="flex items-center justify-between p-4 border rounded-md"
                  >
                    <div>
                      <h3 className="font-medium">{ticket.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {ticket.description}
                      </p>
                    </div>
                    <div className="flex flex-col md:flex-row min-w-16 items-center gap-2">
                      <Badge
                        className={
                          ticket.priority === "High"
                            ? "bg-red-500/10 text-red-500 hover:bg-red-500/10 hover:text-red-500"
                            : ticket.priority === "Medium"
                            ? "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/10 hover:text-yellow-500"
                            : "bg-green-500/10 text-green-500 hover:bg-green-500/10 hover:text-green-500"
                        }
                      >
                        {ticket.priority}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {ticket.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-md shadow-none">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Alerts</CardTitle>
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard/alerts">View All</Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "High Ticket Volume Alert",
                    description: "Unusual spike in technical support tickets",
                    severity: "High",
                    time: "10 minutes ago",
                  },
                  {
                    title: "Response Time Warning",
                    description: "Average response time exceeding threshold",
                    severity: "Medium",
                    time: "1 hour ago",
                  },
                  {
                    title: "New Feature Trend",
                    description: "Multiple requests for dark mode feature",
                    severity: "Low",
                    time: "2 hours ago",
                  },
                ].map((alert) => (
                  <div
                    key={alert.title}
                    className="flex gap-2 items-center justify-between p-4 border rounded-md"
                  >
                    <div>
                      <h3 className="font-medium">{alert.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {alert.description}
                      </p>
                    </div>
                    <div className="flex flex-col lg:flex-row min-w-16 items-center gap-2">
                      <Badge
                        className={
                          alert.severity === "High"
                            ? "bg-red-500/10 text-red-500 hover:bg-red-500/10 hover:text-red-500"
                            : alert.severity === "Medium"
                            ? "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/10 hover:text-yellow-500"
                            : "bg-green-500/10 text-green-500 hover:bg-green-500/10 hover:text-green-500"
                        }
                      >
                        {alert.severity}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {alert.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
