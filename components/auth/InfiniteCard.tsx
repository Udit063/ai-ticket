"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import "./InfiniteVerticalCards.css";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  rating: number;
  image: string;
}

const mockData: Testimonial[] = [
  {
    id: 1,
    name: "Dominik Sebald",
    title: "CEO of Sebald Consulting",
    quote: "the best testimonial platform I have found",
    rating: 5,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fepJ4iNwt06uosT7KQV9cdcAiiIvNb.png",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "CTO of Tech Solutions",
    quote: "incredible platform with amazing features",
    rating: 5,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fepJ4iNwt06uosT7KQV9cdcAiiIvNb.png",
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Founder of Growth Co",
    quote: "exceeded all our expectations",
    rating: 5,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fepJ4iNwt06uosT7KQV9cdcAiiIvNb.png",
  },
  {
    id: 4,
    name: "Emma Wilson",
    title: "Product Manager",
    quote: "simply the best in class solution",
    rating: 5,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fepJ4iNwt06uosT7KQV9cdcAiiIvNb.png",
  },
  {
    id: 5,
    name: "Alex Thompson",
    title: "Marketing Director",
    quote: "transformed our customer feedback process",
    rating: 5,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fepJ4iNwt06uosT7KQV9cdcAiiIvNb.png",
  },
];

const InfiniteVerticalCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const originalCards = Array.from(container.children);
      originalCards.forEach((card) => {
        const clone = card.cloneNode(true);
        container.appendChild(clone);
      });
    }
  }, []);

  const renderStars = (rating: number) => {
    return [...Array(rating)].map((_, i) => (
      <span
        key={i}
        style={{
          color: "#FFB300", // Darker yellow for stars
          fontSize: "28px",
          filter: "drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1))",
        }}
      >
        ★
      </span>
    ));
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "900px",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#FFC107",
        padding: "40px",
      }}
    >
      <div
        ref={containerRef}
        className={`infinite-vertical-cards animate`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "40px",
          gap: "24px",
        }}
      >
        {mockData.map((testimonial) => (
          <div
            key={testimonial.id}
            style={{
              width: "100%",
              padding: "30px",
              backgroundColor: "#FFD54F",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              gap: "24px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <img
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "12px",
                objectFit: "cover",
                border: "3px solid #FFE082",
              }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: "12px" }}>
                {renderStars(testimonial.rating)}
              </div>
              <p
                style={{
                  color: "#424242",
                  fontSize: "24px",
                  fontWeight: "600",
                  margin: "0 0 12px 0",
                  lineHeight: "1.4",
                }}
              >
                {testimonial.quote}
              </p>
              <p
                style={{
                  color: "#212121",
                  fontSize: "20px",
                  fontWeight: "600",
                  margin: "0",
                }}
              >
                {testimonial.name}
              </p>
              <p
                style={{
                  color: "#F57F17",
                  fontSize: "16px",
                  fontWeight: "500",
                  margin: "4px 0 8px 0",
                }}
              >
                {testimonial.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteVerticalCards;
