"use client"; // Ensures this component only runs on the client

import React, { useEffect, useState, useRef } from "react";

const OurGallery = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1024); // Default desktop width
  const slides = 15;
  const intervalRef = useRef(null);

  const imageUrls = [
    "/gallery_img1.jpeg",
    "/gallery_img2.jpeg",
    "/gallery_img3.jpeg",
    "/gallery_img4.jpeg",
    "/gallery_img5.jpeg",
    "/gallery_img6.jpeg",
    "/gallery_img7.jpeg",
    "/gallery_img8.jpeg",
    "/gallery_img9.jpeg",
    "/gallery_img10.jpeg",
    "/gallery_img11.jpeg",
    "/gallery_img12.jpeg",
    "/gallery_img13.jpeg",
    "/gallery_img14.jpeg",
    "/gallery_img15.jpeg",
    "/gallery_img16.jpeg",
  ];

  useEffect(() => {
    // Ensure this only runs in the browser
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      startAutoSlide();

      return () => {
        window.removeEventListener("resize", handleResize);
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, []);

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides);
    }, 3000);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides) % slides);
    startAutoSlide();
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides);
    startAutoSlide();
  };

  const handleDotClick = (index) => {
    setActiveSlide(index);
    startAutoSlide();
  };

  return (
    <>
      <div className="pt-20 md:mb-0 mb-10">
        <div className="mx-auto w-full max-w-xs relative flex flex-col items-center justify-center text-center overflow-visible">
          <h3 className="text-4xl font-bold">Our Gallery</h3>
          <div className="w-full mt-2 relative flex flex-col items-center justify-center">
            <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[2px] w-full blur-sm"></div>
            <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-full"></div>
            <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-green-400 to-transparent h-[5px] w-1/2 blur-sm"></div>
            <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-green-400 to-transparent h-px w-1/2"></div>
          </div>
        </div>
      </div>

      <section className="md:p-8 md:mb-16">
        <div className="w-full mx-auto relative group p-5 pb-10 rounded-2xl md:pr-20 md:pl-20">
          <div className="relative overflow-hidden rounded-lg md:p-5">
            <div
              className="flex md:gap-3 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  (activeSlide * 100) / (windowWidth < 768 ? 1 : 3)
                }%)`,
              }}
            >
              {imageUrls.map((url, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-full md:w-1/3 h-64 flex items-center justify-center"
                >
                  <img
                    src={url}
                    alt={`Slide ${i + 1}`}
                    className="object-cover w-full h-full rounded-lg shadow-lg border-2 border-slate-400"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Buttons (Prev & Next) */}
          <button
            onClick={handlePrev}
            className="absolute cursor-pointer top-1/2 left-4 -translate-y-1/2 bg-slate-900 text-white hover:bg-slate-700 rounded-full p-3 text-xl"
          >
            &#8249;
          </button>

          <button
            onClick={handleNext}
            className="absolute top-1/2 cursor-pointer right-4 -translate-y-1/2 bg-slate-900 text-white hover:bg-slate-700 rounded-full p-3 text-xl"
          >
            &#8250;
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {[...Array(slides)].map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeSlide === i ? "bg-slate-700" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurGallery;
