import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

interface GetStartedButtonProps {
  content: string;
  className?: string;
  icon?: boolean;
}

export const GetStartedButton = ({
  content,
  className,
  icon,
}: GetStartedButtonProps) => {
  return (
    <Button
      className={cn(
        "group relative rounded-xl px-6 py-5 text-lg font-medium text-white shadow-lg shadow-purple-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-purple-500/30 hover:translate-y-[-1px] overflow-hidden ring-1 ring-text ring-opacity-60",
        className
      )}
      style={{
        background: " hsl(262.1deg 66.99% 67.08%)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
              linear-gradient(to bottom,
                rgba(255, 255, 255, 0.5) 0%,
                rgba(255, 255, 255, 0.15) 5%,
                transparent 20%
              ),
              linear-gradient(to top,
                rgba(0, 0, 0, 0.4) 0%,
                rgba(0, 0, 0, 0.15) 4%,
                transparent 20%
              )
            `,
          borderRadius: "12px",
        }}
      />
      <span className="z-10 text-md font-semibold">{content}</span>
      {icon && (
        <MoveRight
          size={50}
          className="ml-4 group-hover:translate-x-1 transition-all ease-in-out duration-300"
        />
      )}
    </Button>
  );
};
