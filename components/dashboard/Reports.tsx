"use client";

import { useState } from "react";
import { FileDown, FileText, FileTextIcon, Table } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

export const Reports = () => {
  const [reportType, setReportType] = useState("executive");
  const [reportPeriod, setReportPeriod] = useState("this-week");

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-col sm:items- sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <FileTextIcon className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent">
            Reports
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <Select value={reportType} onValueChange={setReportType}>
            <SelectTrigger className="w-[200px] rounded-sm shadow-none">
              <SelectValue placeholder="Select report type" />
            </SelectTrigger>
            <SelectContent className="rounded-sm shadow-none">
              <SelectItem value="executive">Executive Report</SelectItem>
              <SelectItem value="support">Support Manager Report</SelectItem>
              <SelectItem value="product">Product Team Report</SelectItem>
            </SelectContent>
          </Select>

          <Select value={reportPeriod} onValueChange={setReportPeriod}>
            <SelectTrigger className="w-[160px] rounded-sm shadow-none">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent className="rounded-sm shadow-none">
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="last-week">Last Week</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-[160px] bg-transparent">
                <FileDown className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="rounded-sm shadow-none w-[160px]"
            >
              <DropdownMenuItem>
                <Table className="w-4 h-4 mr-2" />
                Export as CSV
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText className="w-4 h-4 mr-2" />
                Export as PDF
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Card className="w-full rounded-sm shadow-none">
        <CardHeader>
          <CardTitle className="text-lg">
            {reportType === "executive"
              ? "Executive Report"
              : reportType === "support"
              ? "Support Manager Report"
              : "Product Team Report"}{" "}
            -{" "}
            {reportPeriod === "this-week"
              ? "This Week"
              : reportPeriod === "last-week"
              ? "Last Week"
              : reportPeriod === "this-month"
              ? "This Month"
              : "Custom Range"}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {reportType === "executive" && <ExecutiveReport />}
          {reportType === "support" && <SupportManagerReport />}
          {reportType === "product" && <ProductTeamReport />}
        </CardContent>
      </Card>
    </div>
  );
};

function MetricCard({
  title,
  value,
  change,
}: {
  title: string;
  value: string;
  change: string;
}) {
  const isPositive = change.startsWith("+");
  const isNeutral = !change.startsWith("+") && !change.startsWith("-");

  return (
    <div className="p-4  rounded-md border">
      <h3 className="text-sm font-medium text-muted-foreground mb-2">
        {title}
      </h3>
      <div className="text-2xl font-bold">{value}</div>
      <p
        className={`text-xs mt-1 ${
          isPositive
            ? "text-green-600"
            : isNeutral
            ? "text-muted-foreground"
            : "text-red-600"
        }`}
      >
        {change} from last period
      </p>
    </div>
  );
}

function ExecutiveReport() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard title="Customer Sentiment" value="4.2/5" change="+0.3" />
        <MetricCard title="Net Promoter Score" value="42" change="+5" />
        <MetricCard title="Churn Rate" value="2.1%" change="-0.5%" />
      </div>
      <Separator />
      <div className="space-y-2">
        <h3 className="font-semibold">Key Product Trends</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          <li>Increasing demand for mobile app features (+15% mentions)</li>
          <li>Positive reception to new pricing model (92% approval)</li>
          <li>API integration issues reported by enterprise clients</li>
        </ul>
      </div>
      <Separator />
      <div className="space-y-2">
        <h3 className="font-semibold">TLDR Summary</h3>
        <p className="text-sm text-muted-foreground">
          Overall positive customer sentiment with growing interest in mobile
          features. New pricing model well-received, but attention needed on API
          performance for enterprise clients. Churn rate shows improvement,
          indicating successful retention strategies.
        </p>
      </div>
    </div>
  );
}

function SupportManagerReport() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard title="Ticket Volume" value="342" change="+28" />
        <MetricCard title="Avg. QA Score" value="92%" change="+2%" />
        <MetricCard title="First Response Time" value="1.8h" change="-15m" />
      </div>
      <Separator />
      <div className="space-y-4">
        <h3 className="font-semibold">Trending Topics</h3>
        <div className="space-y-2">
          {[
            {
              topic: "Login Authentication",
              volume: 68,
              trend: "increasing",
            },
            { topic: "Payment Processing", volume: 52, trend: "stable" },
            { topic: "Data Export", volume: 45, trend: "decreasing" },
          ].map((item) => (
            <div
              key={item.topic}
              className="flex items-center justify-between text-sm"
            >
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>{item.topic}</li>{" "}
              </ul>

              <div className="flex items-center gap-2">
                <span className="font-medium">{item.volume}</span>
                <span
                  className={
                    item.trend === "increasing"
                      ? "text-green-600"
                      : item.trend === "decreasing"
                      ? "text-red-600"
                      : "text-muted-foreground"
                  }
                >
                  {item.trend === "increasing"
                    ? "↑"
                    : item.trend === "decreasing"
                    ? "↓"
                    : "→"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Separator />
      <div className="space-y-2">
        <h3 className="font-semibold">Agent Performance Highlights</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          <li>Top performer: Sarah M. (98% QA score, 145 tickets resolved)</li>
          <li>Team average response time improved by 8% this week</li>
          <li>
            3 agents identified for additional training on new feature set
          </li>
        </ul>
      </div>
    </div>
  );
}

function ProductTeamReport() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard title="New Feature Requests" value="86" change="+12" />
        <MetricCard title="Bug Reports" value="34" change="-8" />
        <MetricCard title="Feature Adoption" value="76%" change="+5%" />
      </div>
      <Separator />
      <div className="space-y-4">
        <h3 className="font-semibold">Top Feature Requests</h3>
        <div className="space-y-2">
          {[
            { feature: "Dark Mode", votes: 234, status: "In Progress" },
            { feature: "Mobile App", votes: 189, status: "Under Review" },
            { feature: "API v2", votes: 156, status: "Planned" },
          ].map((item) => (
            <div
              key={item.feature}
              className="flex items-center justify-between text-sm"
            >
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>{item.feature}</li>
              </ul>
              <div className="flex items-center gap-2">
                <span className="font-medium">{item.votes} votes</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-xs ${
                    item.status === "In Progress"
                      ? "bg-purple-100 text-purple-600"
                      : item.status === "Under Review"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Separator />
      <div className="space-y-2">
        <h3 className="font-semibold">Integration & Pricing Feedback</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          <li>Enterprise clients reporting slow API response times</li>
          <li>Positive reception to new tiered pricing model</li>
          <li>Requests for more detailed API documentation</li>
        </ul>
      </div>
    </div>
  );
}
