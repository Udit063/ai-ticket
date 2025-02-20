"use client";
import { useState } from "react";
import {
  Bell,
  Clock,
  RefreshCcw,
  Activity,
  MessageSquare,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Alert {
  id: string;
  title: string;
  description: string;
  severity: "high" | "medium" | "low";
  timestamp: string;
  category: "volume" | "response" | "sentiment" | "escalation";
  metrics?: {
    count?: number;
    percentage?: string;
  };
}

const mockAlerts: Alert[] = [
  {
    id: "1",
    title: "High Ticket Volume Alert",
    description:
      "Unusual spike in technical support tickets - 150% increase in the last hour",
    severity: "high",
    timestamp: "10 minutes ago",
    category: "volume",
    metrics: {
      count: 150,
      percentage: "+150%",
    },
  },
  {
    id: "2",
    title: "Response Time Warning",
    description:
      "Average first response time has increased to 45 minutes, exceeding the target of 30 minutes",
    severity: "medium",
    timestamp: "1 hour ago",
    category: "response",
    metrics: {
      count: 45,
      percentage: "+50%",
    },
  },
  {
    id: "3",
    title: "Customer Satisfaction Drop",
    description:
      "CSAT score has dropped below 90% in the last hour for new conversations",
    severity: "high",
    timestamp: "30 minutes ago",
    category: "sentiment",
    metrics: {
      percentage: "88%",
    },
  },
  {
    id: "4",
    title: "Critical Escalations",
    description: "5 VIP customer tickets require immediate attention",
    severity: "high",
    timestamp: "5 minutes ago",
    category: "escalation",
    metrics: {
      count: 5,
    },
  },
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "volume":
      return <Activity className="h-5 w-5 text-purple-500" />;
    case "response":
      return <Clock className="h-5 w-5 text-blue-500" />;
    case "sentiment":
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case "escalation":
      return <AlertTriangle className="h-5 w-5 text-red-500" />;
    default:
      return <MessageSquare className="h-5 w-5 text-gray-500" />;
  }
};

export const Alerts = () => {
  // const [alerts, setAlerts] = useState<Alert[]>(mockAlerts);
  const alerts = mockAlerts;
  const [filter, setFilter] = useState("all");
  const [dateRange, setDateRange] = useState("24h");

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-500/10 text-red-500";
      case "medium":
        return "bg-yellow-500/10 text-yellow-500";
      case "low":
        return "bg-green-500/10 text-green-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case "volume":
        return "Ticket Volume Alerts";
      case "response":
        return "Response Time Alerts";
      case "sentiment":
        return "Customer Satisfaction Alerts";
      case "escalation":
        return "Escalation Alerts";
      default:
        return "Other Alerts";
    }
  };

  const filteredAlerts = alerts.filter((alert) => {
    if (filter !== "all" && alert.severity !== filter) return false;
    return true;
  });

  const groupedAlerts = filteredAlerts.reduce((acc, alert) => {
    if (!acc[alert.category]) {
      acc[alert.category] = [];
    }
    acc[alert.category].push(alert);
    return acc;
  }, {} as Record<string, Alert[]>);

  return (
    <div className="min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-3">
              <Bell className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold  bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent ">
                Alerts
              </h1>
            </div>
            <p className="text-muted-foreground mt-1">
              Real-time notifications and critical issues
            </p>
          </div>
          <Badge
            variant="outline"
            className="px-4 py-2 rounded-full font-medium"
          >
            {alerts.length} Active Alerts
          </Badge>
        </div>

        <Card className="p-4 rounded-md shadow-none">
          <div className="flex flex-wrap gap-4">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Severities</SelectItem>
                <SelectItem value="high">High Priority</SelectItem>
                <SelectItem value="medium">Medium Priority</SelectItem>
                <SelectItem value="low">Low Priority</SelectItem>
              </SelectContent>
            </Select>
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24h">Last 24 hours</SelectItem>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="custom">Custom range</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              size="icon"
              className="hover:text-primary hover:border-primary"
              //   onClick={() => {
              //     toast({
              //       title: "Refreshing Alerts",
              //       description: "Fetching latest alerts...",
              //       duration: 2000,
              //     });
              //   }}
            >
              <RefreshCcw className="h-4 w-4" />
            </Button>
          </div>
        </Card>

        <div className="space-y-16">
          {Object.entries(groupedAlerts).map(([category, categoryAlerts]) => (
            <div key={category} className="space-y-4">
              <div className="flex items-center gap-2">
                {getCategoryIcon(category)}
                <h2 className="text-lg font-semibold">
                  {getCategoryTitle(category)}
                </h2>
              </div>
              <div className="grid gap-4">
                {categoryAlerts.map((alert) => (
                  <Card
                    key={alert.id}
                    className="border shadow-none rounded-md"
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{alert.title}</h3>
                            <Badge className={getSeverityColor(alert.severity)}>
                              {alert.severity.charAt(0).toUpperCase() +
                                alert.severity.slice(1)}
                            </Badge>
                            {alert.metrics && (
                              <span className="text-sm font-medium">
                                {alert.metrics.count &&
                                  `${alert.metrics.count} items`}
                                {alert.metrics.percentage && (
                                  <span
                                    className={`${
                                      alert.metrics.percentage.includes("+")
                                        ? "text-red-500"
                                        : "text-green-500"
                                    }`}
                                  >
                                    {alert.metrics.percentage}
                                  </span>
                                )}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {alert.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {alert.timestamp}
                        </div>
                        <div className="space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="hover:text-primary hover:border-primary"
                          >
                            View Details
                          </Button>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-theme-purple to-theme-indigo"
                          >
                            Take Action
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
