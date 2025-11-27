// components/HeroSlider.tsx
"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Fresh Organic Groceries",
    subtitle: "Farm-fresh fruits, vegetables, and daily essentials delivered to you.",
    buttonText: "Shop Now",
    image: "/hero-1.jpg", // replace with your image or use the one from your example
  },
  {
    id: 2,
    title: "Healthy & Sustainable",
    subtitle: "100% organic produce directly from local farmers.",
    buttonText: "Explore More",
    image: "/hero-1.jpg",
  },
  {
    id: 3,
    title: "Same-Day Delivery",
    subtitle: "Order before 12 PM and get it delivered today!",
    buttonText: "Order Today",
    image: "/hero-1.jpg",
  },
];

export default function Hero() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: true,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.id}>
            <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={slide.id === 1}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="relative h-full flex items-center justify-center text-center px-6">
                <div className="max-w-4xl mx-auto text-white">
                  <h1 className="text-mt-20 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="mt-6 text-lg md:text-2xl text-white/90 max-w-2xl mx-auto">
                    {slide.subtitle}
                  </p>
                  <Button
                    size="lg"
                    className="mt-10 bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full shadow-lg"
                  >
                    {slide.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation Arrows */}
      <CarouselPrevious className="left-4 md:left-10 bg-white/20 hover:bg-white/40 text-white border-none" />
      <CarouselNext className="right-4 md:right-10 bg-white/20 hover:bg-white/40 text-white border-none" />

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className="w-3 h-3 rounded-full bg-white/60 hover:bg-white transition"
            // You can enhance this with Carousel API if needed
          />
        ))}
      </div>
    </Carousel>
  );
}