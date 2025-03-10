import React from "react";

function WhyChooseUs() {
  return (
    <>
      <div className="pt-20">
        <div className="mx-auto w-full max-w-xs relative flex flex-col items-center justify-center text-center overflow-visible">
          <h3 className="text-4xl font-bold">WHY CHOOSE US</h3>
          <div className="w-full mt-2 relative flex flex-col items-center justify-center">
            <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[2px] w-full blur-sm"></div>
            <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-full"></div>
            <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-green-400 to-transparent h-[5px] w-1/2 blur-sm"></div>
            <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-green-400 to-transparent h-px w-1/2"></div>
            <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(50%_200px_at_top,transparent_20%,white)]"></div>
          </div>
          <span className="absolute -z-[1] backdrop-blur-sm inset-0 w-full h-full flex before:content-[''] before:h-3/4 before:w-full before:bg-gradient-to-r before:from-black before:to-purple-600 before:blur-[90px] after:content-[''] after:h-1/2 after:w-full after:bg-gradient-to-br after:from-cyan-400 after:to-sky-300 after:blur-[90px]"></span>
        </div>
        {/* For Why Choose Us Blocks */}
        <div className="inline-block md:flex md:gap-5 justify-center md:p-14 p-5 mt-5 md:mt-5">
          {/*Block 1*/}
          <div className="w-full mb-5 md:mb-0 border bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden transition-transform transition-shadow hover:scale-105 hover:shadow-lg">
            <div className="w-24 h-24 bg-green-500 rounded-full absolute -right-5 -top-7">
              <p className="absolute bottom-6 left-7 text-white text-2xl">01</p>
            </div>
            <div className="fill-violet-500 w-12">
              <img src="/high-quality.png" alt="High Quality" />
            </div>
            <h1 className="font-bold text-2xl">Quality Assurance</h1>
            <p className="text-lg text-zinc-500 leading-6">
              We prioritize delivering fresh and high-quality produce.
            </p>
          </div>
          {/*Block 2*/}
          <div className="w-full mb-5 md:mb-0 border bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden transition-transform transition-shadow hover:scale-105 hover:shadow-lg">
            <div className="w-24 h-24 bg-green-500 rounded-full absolute -right-5 -top-7">
              <p className="absolute bottom-6 left-7 text-white text-2xl">02</p>
            </div>
            <div className="fill-green-500 w-12">
              <img src="/dependable.png" alt="Dependable" />
            </div>
            <h1 className="font-bold text-2xl">Reliability</h1>
            <p className="text-lg text-zinc-500 leading-6">
              Consistent and timely supply of agricultural products.
            </p>
          </div>
          {/*Block 3*/}
          <div className="w-full mb-5 md:mb-0 border bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden transition-transform transition-shadow hover:scale-105 hover:shadow-lg">
            <div className="w-24 h-24 bg-green-500 rounded-full absolute -right-5 -top-7">
              <p className="absolute bottom-6 left-7 text-white text-2xl">03</p>
            </div>
            <div className="fill-green-500 w-12">
              <img src="/client.png" alt="Client" />
            </div>
            <h1 className="font-bold text-2xl">Expertise</h1>
            <p className="text-lg text-zinc-500 leading-6">
              Professional and efficient land cultivation services.
            </p>
          </div>
          {/*Block 4*/}
          <div className="w-full border bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden transition-transform transition-shadow hover:scale-105 hover:shadow-lg">
            <div className="w-24 h-24 bg-green-500 rounded-full absolute -right-5 -top-7">
              <p className="absolute bottom-6 left-7 text-white text-2xl">04</p>
            </div>
            <div className="fill-violet-500 w-12">
              <img src="/investor.png" alt="Investor" />
            </div>
            <h1 className="font-bold text-2xl">Investor-Focused</h1>
            <p className="text-lg text-zinc-500 leading-6">
              A trusted partner for growth and profitability.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;
