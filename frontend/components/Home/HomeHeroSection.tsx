"use client";
import React from "react";
import EmblaCarousel from "@/utils/EmblaCarousel";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Autoplay from "embla-carousel-autoplay";

const SliderData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Slide 1",
    description: "This is the first slide description.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Slide 2",
    description: "This is the second slide description.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Slide 3",
    description: "This is the third slide description.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Slide 3",
    description: "This is the third slide description.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Slide 3",
    description: "This is the third slide description.",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Slide 3",
    description: "This is the third slide description.",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Slide 3",
    description: "This is the third slide description.",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Slide 3",
    description: "This is the third slide description.",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Slide 3",
    description: "This is the third slide description.",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Slide 3",
    description: "This is the third slide description.",
  },
];

const HomeHeroSection = () => {
  // Initialize autoplay plugin with desired settings
  const autoplayPlugin = Autoplay({
    delay: 5000,           // 3s delay
    stopOnInteraction: false,
    stopOnMouseEnter: false,
  });

  return (
    <div className="container mx-auto h-auto">
      <div className="flex gap-5 p-4 pt-5">
        <div className="w-full h-auto md:w-2/3">
          <EmblaCarousel
            slides={SliderData}
            mainImageClassName="h-[300px] object-contain"
            thumbImageClassName="object-contain"
          />
        </div>

        <div className="w-full h-auto md:w-1/3 hidden md:block">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[autoplayPlugin]} // ✅ Add autoplay plugin here
            orientation="vertical"
            className="w-full"
          >
            <CarouselContent className="-mt-1 md:h-[350px] lg:h-[375px] xl:h-[405px]">
                {
                    SliderData.map((slide,index) => {
                        return (
                        <CarouselItem key={index} className="md:basis-full">
                  <Card>
                    <CardContent className="flex items-center justify-center p-0">
                      <img
                        src= {slide.image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-[345px] lg:h-[365px] xl:h-[400px] object-cover rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>)
                    })
                }

            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;