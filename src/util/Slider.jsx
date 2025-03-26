import { useState } from "react";

const slides = [
  {
    id: 1,
    src: "/src/assets/images/slider/slider1_ru.webp",
    alt: "Первый слайд",
  },
  {
    id: 2,
    src: "/src/assets/images/slider/slider2_ru.webp",
    alt: "Второй слайд",
  },
  {
    id: 3,
    src: "/src/assets/images/slider/slider3_ru.webp",
    alt: "Третий слайд",
  },
  {
    id: 4,
    src: "/src/assets/images/slider/slider4_ru.webp",
    alt: "Четвертый слайд",
  },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-[1180px] mx-auto h-[170px] mt-[150px]">
      <div className="relative flex items-center justify-center">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          const isPrev =
            index === (currentIndex - 1 + slides.length) % slides.length;
          const isNext = index === (currentIndex + 1) % slides.length;

          return (
            <div
              key={slide.id}
              className={`absolute top-1/2 transform -translate-y-1/2 transition-all duration-700 ease-in-out ${
                isActive
                  ? "z-10 opacity-100 scale-100"
                  : isPrev
                  ? "z-5 opacity-50 scale-90 -translate-x-[120%]"
                  : isNext
                  ? "z-5 opacity-50 scale-90 translate-x-[120%]"
                  : "hidden"
              }`}
              style={{
                width: isActive ? "800px" : "600px",
              }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          );
        })}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/5 left-0 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-200 z-20"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/5 right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-200 z-20"
      >
        ❯
      </button>
    </div>
  );
}
