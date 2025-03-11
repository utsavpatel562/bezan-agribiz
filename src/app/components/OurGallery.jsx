import React, { useEffect, useState, useRef } from "react";

const OurGallery = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = 15; // Total number of slides
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
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
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
      <div className="pt-20">
        <div className="mx-auto w-full max-w-xs relative flex flex-col items-center justify-center text-center overflow-visible">
          <h3 className="text-4xl font-bold">Our Gallery</h3>
          <div className="w-full mt-2 relative flex flex-col items-center justify-center">
            <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[2px] w-full blur-sm"></div>
            <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-full"></div>
            <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-green-400 to-transparent h-[5px] w-1/2 blur-sm"></div>
            <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-green-400 to-transparent h-px w-1/2"></div>
            <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(50%_200px_at_top,transparent_20%,white)]"></div>
          </div>
          <span className="absolute -z-[1] backdrop-blur-sm inset-0 w-full h-full flex before:content-[''] before:h-3/4 before:w-full before:bg-gradient-to-r before:from-black before:to-purple-600 before:blur-[90px] after:content-[''] after:h-1/2 after:w-full after:bg-gradient-to-br after:from-cyan-400 after:to-sky-300 after:blur-[90px]"></span>
        </div>
      </div>
      <section className="md:p-8 md:mb-16">
        <div className="w-full mx-auto relative group p-5 pb-10 rounded-2xl md:pr-20 md:pl-20">
          <div className="relative overflow-hidden rounded-lg md:p-5">
            <div
              className="flex md:gap-3 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  (activeSlide * 100) / (window.innerWidth < 768 ? 1 : 3)
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
                    className="object-cover w-full h-full rounded-lg shadow-lg"
                    style={{
                      boxShadow: "10px -14px 60px 4px rgba(0,0,0,0.1)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-slate-900 text-slate-100 hover:bg-slate-700 rounded-full p-2.5"
          >
            &#8249;
          </button>

          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-slate-900 text-slate-100 hover:bg-slate-700 rounded-full p-2.5"
          >
            &#8250;
          </button>

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
