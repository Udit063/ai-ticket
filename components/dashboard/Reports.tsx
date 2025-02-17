"use client";
import { useState } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";
import { Filter, FileText } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// Updated mock data to match Intercom-style metrics
// const trendData = [
//   { name: "Jan", tickets: 1000, resolved: 950 },
//   { name: "Feb", tickets: 1200, resolved: 1150 },
//   { name: "Mar", tickets: 800, resolved: 780 },
//   { name: "Apr", tickets: 1400, resolved: 1350 },
//   { name: "May", tickets: 1100, resolved: 1050 },
//   { name: "Jun", tickets: 1300, resolved: 1250 },
// ];

// const categoryData = [
//   { name: "Technical Issues", value: 35 },
//   { name: "Feature Requests", value: 25 },
//   { name: "Billing Questions", value: 20 },
//   { name: "General Inquiries", value: 20 },
// ];

// const sentimentData = [
//   { name: "Jan", positive: 85, neutral: 10, negative: 5 },
//   { name: "Feb", positive: 80, neutral: 15, negative: 5 },
//   { name: "Mar", positive: 90, neutral: 7, negative: 3 },
//   { name: "Apr", positive: 82, neutral: 13, negative: 5 },
//   { name: "May", positive: 88, neutral: 9, negative: 3 },
//   { name: "Jun", positive: 92, neutral: 6, negative: 2 },
// ];

// // Updated colors to match theme
// const COLORS = ["#9b87f5", "#7E69AB", "#D6BCFA", "#6366f1"];

// const ticketData = [
//   {
//     id: "T1001",
//     title: "Integration Issue with API",
//     category: "Technical",
//     status: "Open",
//     agent: "Sarah Wilson",
//     created: "2024-02-15",
//     resolved: "-",
//   },
//   {
//     id: "T1002",
//     title: "Subscription Upgrade Request",
//     category: "Billing",
//     status: "Resolved",
//     agent: "Michael Chen",
//     created: "2024-02-14",
//     resolved: "2024-02-15",
//   },
//   {
//     id: "T1003",
//     title: "Dashboard Feature Enhancement",
//     category: "Feature",
//     status: "In Progress",
//     agent: "Alex Thompson",
//     created: "2024-02-13",
//     resolved: "-",
//   },
// ];

export const Reports = () => {
  const [dateRange, setDateRange] = useState("1m");
  const [category, setCategory] = useState("all");
  const [userRole, setUserRole] = useState("all");

  return (
    <div className="min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-theme-purple to-theme-indigo bg-clip-text text-transparent">
                Reports
              </h1>
            </div>
            <p className="text-muted-foreground mt-1">
              Detailed analytics and insights
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1m">Last month</SelectItem>
              <SelectItem value="3m">Last quarter</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="technical">Technical Issues</SelectItem>
              <SelectItem value="feature">Feature Requests</SelectItem>
              <SelectItem value="billing">Billing</SelectItem>
            </SelectContent>
          </Select>
          <Select value={userRole} onValueChange={setUserRole}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select user role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="agent">Support Agents</SelectItem>
              <SelectItem value="manager">Managers</SelectItem>
              <SelectItem value="executive">Executives</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="hover:bg-purple-50">
            <Filter className="mr-2 h-4 w-4" /> Apply Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card className="bg-card/50 backdrop-blur-sm rounded-md shadow-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Conversations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,456</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm rounded-md shadow-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Resolved Tickets
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,089</div>
              <p className="text-xs text-muted-foreground">
                88% resolution rate
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm rounded-md shadow-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg. Response Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.4h</div>
              <p className="text-xs text-muted-foreground">
                -15% from last month
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm rounded-md shadow-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">CSAT Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.7</div>
              <p className="text-xs text-muted-foreground">
                94% satisfaction rate
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm rounded-md shadow-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Resolution Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">88%</div>
              <p className="text-xs text-muted-foreground">
                +2% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Visualizations */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-card/50 backdrop-blur-sm rounded-md shadow-none">
            <CardHeader>
              <CardTitle>Conversation Volume Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="tickets"
                    stroke="#9b87f5"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="resolved"
                    stroke="#6366f1"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm rounded-md shadow-none">
            <CardHeader>
              <CardTitle>Category Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {categoryData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm lg:col-span-2 rounded-md shadow-none">
            <CardHeader>
              <CardTitle>Sentiment Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={sentimentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="positive" fill="#82ca9d" />
                  <Bar dataKey="negative" fill="#ff7300" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div> */}

        {/* Detailed Ticket Reports */}
        {/* <Card className="bg-card/50 backdrop-blur-sm rounded-md shadow-none">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Detailed Ticket Reports</CardTitle>
              <Button variant="outline" className="hover:bg-purple-50">
                <Download className="mr-2 h-4 w-4" /> Export
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ticket ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Assigned Agent</TableHead>
                  <TableHead>Created Date</TableHead>
                  <TableHead>Resolution Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ticketData.map((ticket) => (
                  <TableRow key={ticket.id}>
                    <TableCell>{ticket.id}</TableCell>
                    <TableCell>{ticket.title}</TableCell>
                    <TableCell>{ticket.category}</TableCell>
                    <TableCell>{ticket.status}</TableCell>
                    <TableCell>{ticket.agent}</TableCell>
                    <TableCell>{ticket.created}</TableCell>
                    <TableCell>{ticket.resolved}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card> */}

        {/* Actionable Insights */}
        <Card className="bg-card/50 backdrop-blur-sm rounded-md shadow-none">
          <CardHeader>
            <CardTitle>Actionable Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Response times for technical issues have improved by 15% this
                month. Consider sharing best practices across the team.
              </li>
              <li>
                There&apos;s a rising trend in feature requests. Schedule a
                product team meeting to review and prioritize these requests.
              </li>
              <li>
                Customer satisfaction scores for billing-related tickets are
                lower than average. Consider additional training for the billing
                support team.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
