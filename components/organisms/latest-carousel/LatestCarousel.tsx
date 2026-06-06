"use client";

import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import { useDotButton } from "./useDotButton";
import Image from "next/image";
import PlayIcon from "@/components/atoms/icons/PlayIcon";

export interface CarouselSlide {
  title: string;
  description: string;
  postedAt: string;
  thumbnail: string;
}

interface LatestCarouselProps {
  heading?: string;
  slides: CarouselSlide[];
}

export default function LatestCarousel({
  heading = "Latest from Bitscale",
  slides,
}: LatestCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Fade(),
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="rounded-xl bg-info-subtle py-4 px-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-info">{heading}</h2>

        {/* Dots */}
        <div className="flex items-center gap-1">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => onDotButtonClick(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-6 bg-info"
                  : "w-1.5 bg-border hover:bg-info/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Embla */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_100%] flex gap-4 items-start">
              {/* Thumbnail */}
              <div className="relative w-[143px] h-[97px] shrink-0 rounded-lg overflow-hidden bg-muted aspect-video">
                <Image
                  width={143}
                  height={97}
                  src={slide.thumbnail}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full bg-white/90 shadow-play flex items-center justify-center shadow-md">
                    <PlayIcon />
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1.5 min-w-0">
                <h3 className="text-[13px] font-medium text-foreground leading-snug">
                  {slide.title}
                </h3>
                <p className="text-xs font-normal text-helper leading-4 line-clamp-3">
                  {slide.description}
                </p>
                <span className="text-[10px] text-helper/70 mt-0.5">
                  {slide.postedAt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
