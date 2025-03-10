import { ChartNoAxesCombined, HandCoins, Sprout } from "lucide-react";
import React from "react";

function HowItWorks() {
  return (
    <>
      <div className="pt-20">
        <div className="mx-auto w-full max-w-lg relative flex flex-col items-center justify-center text-center overflow-visible">
          <h3
            className="text-4xl font-bold uppercase"
            id="InvestmentOpportunities"
          >
            Investor Opportunities
          </h3>
          <div className="w-full mt-2 relative flex flex-col items-center justify-center">
            <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[2px] w-full blur-sm"></div>
            <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-full"></div>
            <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-green-400 to-transparent h-[5px] w-1/2 blur-sm"></div>
            <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-green-400 to-transparent h-px w-1/2"></div>
            <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(50%_200px_at_top,transparent_20%,white)]"></div>
          </div>
          <span className="absolute -z-[1] backdrop-blur-sm inset-0 w-full h-full flex before:content-[''] before:h-3/4 before:w-full before:bg-gradient-to-r before:from-black before:to-purple-600 before:blur-[90px] after:content-[''] after:h-1/2 after:w-full after:bg-gradient-to-br after:from-cyan-400 after:to-sky-300 after:blur-[90px]"></span>
        </div>
        {/* How it works content */}
        <div className="p-3 pt-12 md:p-12 md:flex gap-10 flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-5 md:mb-0">
            <img src="/img5.png" className="w-full h-auto" alt="How it works" />
          </div>

          {/* Investor section */}
          <div className="flex flex-col md:flex-row gap-8 w-full p-5 rounded-xl bg-slate-200 border">
            <div
              className="relative flex justify-center items-center h-auto mb-5 md:mb-0 w-full md:w-1/2 border-4 border-black rounded-2xl bg-gray-50"
              style={{ boxShadow: "0px 0px 40px -6px rgba(176, 177, 188, 1)" }}
            >
              <span className="absolute border top-0 border-black bg-black w-24 h-2 rounded-br-xl rounded-bl-xl"></span>

              <span className="absolute -right-2 top-14 border-4 border-black h-9 rounded-md"></span>
              <span className="absolute -right-2 bottom-36 border-4 border-black h-14 rounded-md"></span>

              <div className="text-center p-4 w-full">
                <h1 className="font-bold text-3xl mb-5">HOW IT WORKS</h1>
                <div className="inline-block w-full text-left">
                  <div className="bg-slate-200 w-full mb-2 p-3 rounded-sm border border-slate-300 hover:bg-green-500 hover:text-slate-100">
                    <h2 className="font-bold text-lg mb-2">Step 1</h2>
                    <p>Contact us to discuss your agricultural needs.</p>
                  </div>
                  <div className="bg-slate-200 w-full p-3 mb-2 rounded-sm border border-slate-300 hover:bg-green-500 hover:text-slate-100">
                    <h2 className="font-bold text-lg mb-2">Step 2</h2>
                    <p>Receive tailored solutions and a project plan.</p>
                  </div>
                  <div className="bg-slate-200 w-full p-3 rounded-sm border border-slate-300 hover:bg-green-500 hover:text-slate-100">
                    <h2 className="font-bold text-lg mb-2">Step 3</h2>
                    <p>Implement our services and see results.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 p-6 md:p-10 rounded-lg h-full md:pt-15 md:w-[80%]">
              <h2 className="flex items-center gap-2 text-slate-50 text-xl md:text-3xl font-extrabold">
                <HandCoins className="md:w-7 md:h-7" />
                High Returns
              </h2>
              <p className="text-slate-200 text-xl mt-2">
                Join us in our mission to drive agricultural growth and earn
                attractive returns on your investment.
              </p>
              <h2 className="flex items-center gap-2 mt-10 text-slate-50 md:text-3xl text-xl font-extrabold">
                <ChartNoAxesCombined className="md:w-7 md:h-7" />
                Partnership Growth
              </h2>
              <p className="text-slate-200 text-xl mt-2">
                Build lasting partnerships with a trusted agricultural service
                provider.
              </p>
              <h2 className="flex items-center gap-2 mt-10 text-slate-50 md:text-3xl text-xl font-extrabold">
                <Sprout className="md:w-7 md:h-7" />
                Sustainable Impact
              </h2>
              <p className="text-slate-200 text-xl mt-2">
                Contribute to sustainable agricultural practices and create
                long-term value for communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
