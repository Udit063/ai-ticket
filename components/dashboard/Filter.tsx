"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

const durations = [
  { value: "1", label: "1 month" },
  { value: "3", label: "3 months" },
  { value: "6", label: "6 months" },
];

export const Filter = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("1");
  const [customValue, setCustomValue] = React.useState("");

  const handleSelect = (currentValue: string) => {
    setValue(currentValue);
    setCustomValue("");
    setOpen(false);
  };

  const handleCustomInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (/^\d*$/.test(inputValue)) {
      setCustomValue(inputValue);
      setValue(inputValue);
    }
  };

  const displayValue = value
    ? `${value} month${Number.parseInt(value) !== 1 ? "s" : ""}`
    : "Select duration...";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {displayValue}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <div className="px-1 py-2">
          {durations.map((duration) => (
            <Button
              key={duration.value}
              onClick={() => handleSelect(duration.value)}
              variant="ghost"
              className="w-full justify-start font-normal"
            >
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  value === duration.value ? "opacity-100" : "opacity-0"
                )}
              />
              {duration.label}
            </Button>
          ))}
          <div className="px-2 py-2">
            <Input
              placeholder="Custom duration"
              value={customValue}
              onChange={handleCustomInput}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setOpen(false);
                }
              }}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
