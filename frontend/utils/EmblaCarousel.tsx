import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import clsx from "clsx"; // optional but clean

type SlideData = {
  id: number;
  image: string;
  title: string;
  description: string;
};

type EmblaCarouselPropType = {
  slides: SlideData[];
  options?: EmblaOptionsType;
  mainImageClassName?: string;   // allow controlling main image size externally
  thumbImageClassName?: string;  // allow controlling thumbnail size externally
};

type ThumbPropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
  image: string;
  thumbImageClassName?: string;
};

export const Thumb: React.FC<ThumbPropType> = ({
  selected,
  index,
  onClick,
  image,
  thumbImageClassName,
}) => {
  return (
    <div className="flex-0 w-1/6 sm:w-[10%] px-1">
      <button
        onClick={onClick}
        type="button"
        className={clsx(
          "flex items-center justify-center w-full aspect-square rounded overflow-hidden border-2",
          selected ? "border-red-500" : "border-gray-300"
        )}
      >
        <img
          src={image}
          alt={`Thumbnail ${index + 1}`}
          className={clsx("w-full h-full object-cover", thumbImageClassName)}
        />
      </button>
    </div>
  );
};

const EmblaCarousel: React.FC<EmblaCarouselPropType> = ({
  slides,
  options,
  mainImageClassName,
  thumbImageClassName,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(
    { loop: true, ...options },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    const snap = emblaMainApi.selectedScrollSnap();
    setSelectedIndex(snap);
    emblaThumbsApi.scrollTo(snap);
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="w-auto h-auto">
      <div className="overflow-hidden rounded-lg" ref={emblaMainRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div className="flex-[0_0_100%] px-1 relative" key={slide.id}>
              <img
                src={slide.image}
                alt={slide.title}
                className={clsx(
                  "w-full object-cover rounded-lg",
                  mainImageClassName
                )}
              />
              <div className="absolute bottom-4 left-4 bg-black/60 text-white p-2 rounded">
                <h2 className="text-lg font-semibold">{slide.title}</h2>
                <p className="text-sm">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2 overflow-hidden" ref={emblaThumbsRef}>
        <div className="flex">
          {slides.map(({ image }, index) => (
            <Thumb
              key={index}
              onClick={() => onThumbClick(index)}
              selected={index === selectedIndex}
              index={index}
              image={image}
              thumbImageClassName={thumbImageClassName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;