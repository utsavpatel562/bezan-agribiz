import React from "react";

function AboutUs() {
  return (
    <>
      <div className="absolute inset-0 w-full h-full z-[-10] custom-background"></div>
      <div
        className="inline-block md:flex gap-5 p-3 mt-25 md:p-10 md:mt-0"
        id="AboutUs"
      >
        <div className="relative border border-green-300 flex flex-col w-full rounded-xl bg-clip-border text-gray-700 bg-green-50">
          <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            <img
              src="img2.jpg"
              className="w-full h-full object-center object-cover"
              alt="About Us"
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
              KNOW ABOUT BEZAN AGRIBIZ & GENERAL SERVICES
            </h5>
            <p className="block font-sans text-lg md:text-justify leading-relaxed text-inherit antialiased">
              BEZAN AGRIBIZ & GENERAL SERVICES specializes in providing
              top-notch agricultural products, including freshly harvested rice,
              beans, and yam. We also offer large-scale land cultivation
              services, ensuring efficient and reliable land preparation for
              commercial farming needs. Our mission is to support agricultural
              success by delivering high-quality produce and comprehensive
              farming solutions.
            </p>
          </div>
        </div>
        <div
          className="w-full inline-block mt-5 md:mt-0 md:flex md:gap-4"
          id="OurServices"
        >
          {/* First Service */}
          <div className="group mb-5 md:mb-0 cursor-pointer group-hover:duration-500 overflow-hidden relative rounded-2xl shadow-inner shadow-gray-50 flex flex-col justify-around items-center w-full h-full bg-neutral-900 text-gray-50 p-12">
            {/* Coming Soon Ribbon */}
            <div className="absolute top-10 text-center right-8 transform translate-x-1/2 -translate-y-1/2 w-full bg-red-500 text-white text-sm font-bold px-3 py-1 rotate-45">
              Our Services
            </div>

            <div className="after:duration-500 before:duration-500 duration-500 group-hover:before:translate-x-11 group-hover:before:-translate-y-11 group-hover:after:translate-x-11 group-hover:after:translate-y-16 after:absolute after:w-12 after:h-12 after:bg-green-400 after:rounded-full after:-z-10 after:blur-xl after:bottom-32 after:right-16 after:w-14 after:h-14 before:absolute before:w-30 before:h-30 before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl before:top-20 before:right-16 before:w-12 before:h-12 flex flex-col font-extrabold text-xl z-10">
              <span>Fresh Agricultural Produce</span>
              <br />
              <ul className="font-light list-disc">
                <li>Premium quality rice, beans, and yam</li>
                <li>Consistent supply for bulk purchasing.</li>
              </ul>
            </div>
          </div>
          {/* Second Service */}
          <div className="group mb-5 md:mb-0 cursor-pointer group-hover:duration-500 overflow-hidden relative  rounded-2xl shadow-inner shadow-gray-50 flex flex-col justify-around items-center w-full h-full bg-neutral-900 text-gray-50 p-12">
            {/* Coming Soon Ribbon */}
            <div className="absolute top-10 text-center right-8 transform translate-x-1/2 -translate-y-1/2 w-full bg-red-500 text-white text-sm font-bold px-3 py-1 rotate-45">
              Our Services
            </div>
            <div className="after:duration-500 before:duration-500 duration-500  group-hover:before:translate-x-11 group-hover:before:-translate-y-11  group-hover:after:translate-x-11 group-hover:after:translate-y-16 after:absolute after:w-12 after:h-12 after:bg-pink-800 after:rounded-full after:-z-10 after:blur-xl after:bottom-32 after:right-16 after:w-14 after:h-14 before:absolute before:w-30 before:h-30 before:bg-teal-800 before:rounded-full before:-z-10 before:blur-2xl before:top-20 before:right-16 before:w-12 before:h-12 flex flex-col font-extrabold text-xl z-10">
              <span>Land Cultivation Services</span>
              <br />
              <ul className="font-light list-disc">
                <li>Large-scale land preparation for commercial farming.</li>
                <li>Modern techniques to maximize yield and efficiency.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
