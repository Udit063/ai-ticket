"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FloatingImageProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  cropPosition?: string;
}

export function FloatingImage({
  src,
  alt,
  className,
  delay = 0,
  cropPosition,
}: FloatingImageProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        delay,
        ease: "easeInOut",
      }}
      className={cn(
        "absolute w-12 h-12 rounded-xl overflow-hidden",
        "bg-purple-100 dark:bg-purple-950/50",
        "shadow-[0_0_30px_rgba(168,85,247,0.35)]",
        "transform-gpu",
        className
      )}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={50}
        height={50}
        className={cn("w-full h-full object-cover", cropPosition)}
      />
    </motion.div>
  );
}
