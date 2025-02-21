import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TicketCard } from "./TicketCard";
import { Card } from "@/components/ui/card";
import { Progress } from "../ui/progress";
import { TicketIcon } from "lucide-react";

interface TicketStatsProps {
  totalTickets: number;
  activeTickets: number;
  averageQaScore: number;
}

const MOCK_TICKETS = [
  {
    id: "1",
    title: "Login Authentication Issue",
    category: "Technical",
    priority: "high",
    summary:
      "User unable to access account due to persistent login failure after password reset",
    description:
      "Customer reported inability to log in after password reset. Multiple attempts resulted in account lockout.",
    resolution: "In progress - investigating authentication service logs",
    qaScore: 92,
    timeAgo: "2 hours ago",
  },
  {
    id: "2",
    title: "Billing Integration Problem",
    category: "Billing",
    priority: "high",
    summary: "Payment processing delay affecting subscription renewal",
    description:
      "Customer experiencing delays in payment processing for subscription renewal. Integration with payment gateway showing intermittent failures.",
    resolution:
      "Investigating payment gateway logs and coordinating with payment provider",
    qaScore: 88,
    timeAgo: "3 hours ago",
  },
  {
    id: "3",
    title: "Feature Request - Dark Mode",
    category: "Feature Request",
    priority: "medium",
    summary:
      "User requesting dark mode implementation for better accessibility",
    description:
      "Multiple users have requested dark mode implementation to improve accessibility and reduce eye strain during nighttime usage.",
    resolution:
      "Feature request logged and prioritized for next sprint planning",
    qaScore: 95,
    timeAgo: "5 hours ago",
  },
] as const;

export const Tickets = () => {
  return (
    <div className="container ">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <TicketIcon className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold  bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent ">
            Tickets
          </h1>
          <span className="px-3 py-1 text-sm bg-primary-light text-primary rounded-full">
            {MOCK_TICKETS.length} Active Tickets
          </span>
        </div>
      </div>

      <TicketStats
        totalTickets={15}
        activeTickets={MOCK_TICKETS.length}
        averageQaScore={91}
      />

      <div className="flex gap-4 mb-6">
        <Select defaultValue="all">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="technical">Technical</SelectItem>
            <SelectItem value="billing">Billing</SelectItem>
            <SelectItem value="feature">Feature Request</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="24h">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="24h">Last 24 hours</SelectItem>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4 bg-white rounded-md border">
        {MOCK_TICKETS.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

const TicketStats = ({
  totalTickets,
  activeTickets,
  averageQaScore,
}: TicketStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card className="p-6 rounded-md shadow-none">
        <h3 className="text-sm font-medium text-gray-500 mb-2">
          Total Tickets
        </h3>
        <p className="text-2xl font-semibold text-gray-900">{totalTickets}</p>
      </Card>
      <Card className="p-6 rounded-md shadow-none">
        <h3 className="text-sm font-medium text-gray-500 mb-2">
          Active Tickets
        </h3>
        <p className="text-2xl font-semibold text-primary">{activeTickets}</p>
      </Card>
      <Card className="p-6 rounded-md shadow-none">
        <h3 className="text-sm font-medium text-gray-500 mb-2">
          Average QA Score
        </h3>
        <div className="flex items-center gap-4">
          <p className="text-2xl font-semibold text-gray-900">
            {averageQaScore}%
          </p>
          <Progress value={averageQaScore} className="flex-1" />
        </div>
      </Card>
    </div>
  );
};
