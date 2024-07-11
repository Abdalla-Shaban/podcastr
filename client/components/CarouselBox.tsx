"use client";
import feedsImg from "../public/test.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

export function CarouselBox() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 4 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="relative overflow-hidden aspect-square flex flex-col justify-end rounded-xl">
                <Image
                  src={feedsImg}
                  alt="feeds"
                  className="absolute size-full bg-cover bg-center rounded-b-3xl"
                  fill
                />
                <div className="glassmorphism-black flex flex-col gap-0.5 p-3">
                  <p className="text-light-1 font-semibold text-14">Waveform</p>
                  <p className="text-light-3 text-12 font-normal">MKBHD</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex items-center justify-center gap-2 mt-3">
        {Array.from({ length: count }, (_, i) => (
          <span
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={`block size-[10px] rounded-full cursor-pointer ${
              current === i + 1 ? "bg-light-1" : "bg-gray-1"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
export default CarouselBox;
