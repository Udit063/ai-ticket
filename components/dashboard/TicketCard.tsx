"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";

interface TicketCardProps {
  ticket: {
    id: string;
    title: string;
    category: string;
    priority: "high" | "medium" | "low";
    summary: string;
    description: string;
    resolution: string;
    qaScore: number;
    timeAgo: string;
  };
}

export const TicketCard = ({ ticket }: TicketCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentQaScore, setCurrentQaScore] = useState(ticket.qaScore);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-50 text-red-600 border-red-200";
      case "medium":
        return "bg-orange-50 text-orange-600 border-orange-200";
      case "low":
        return "bg-green-50 text-green-600 border-green-200";
      default:
        return "bg-gray-50 text-gray-600 border-gray-200";
    }
  };

  const getCategoryColor = (category: string) => {
    return "bg-[#F1F0FB] text-[#9b87f5] border-[#D6BCFA]";
  };

  return (
    <Card
      className={`mb-4 overflow-hidden transition-all duration-300 shadow-none border-none rounded-md cursor-pointer `}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-lg font-semibold text-[#6E59A5]">
                {ticket.title}
              </h3>
              <Badge
                className={`${getCategoryColor(ticket.category)} px-3 py-1`}
              >
                {ticket.category}
              </Badge>
              <Badge
                variant="outline"
                className={`${getPriorityColor(ticket.priority)} px-3 py-1`}
              >
                {ticket.priority}
              </Badge>
            </div>
            <p className="text-[#8E9196] leading-relaxed">{ticket.summary}</p>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-[#8E9196]">QA Score</span>
              <span className="text-lg font-semibold text-[#9b87f5]">
                {currentQaScore}%
              </span>
            </div>
            <Progress
              value={currentQaScore}
              className="w-32 h-2 bg-[#F1F0FB]"
            />
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="pt-4 border-t ">
            <div className="space-y-2">
              <div className="text-sm">
                <span className="text-gray-500">Description: </span>
                <span className="text-gray-700">{ticket.description}</span>
              </div>
              {ticket.resolution && (
                <div className="text-sm">
                  <span className="text-gray-500">Resolution: </span>
                  <span className="text-gray-700">{ticket.resolution}</span>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-[#8E9196]">{ticket.timeAgo}</span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentQaScore(Math.min(100, currentQaScore + 5));
                  }}
                  className="hover:bg-[#F1F0FB] hover:text-[#9b87f5] border-[#D6BCFA]"
                >
                  <ThumbsUp className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentQaScore(Math.max(0, currentQaScore - 5));
                  }}
                  className="hover:bg-[#F1F0FB] hover:text-[#9b87f5] border-[#D6BCFA]"
                >
                  <ThumbsDown className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </Card>
  );
};
