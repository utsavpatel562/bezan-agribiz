import { MoveRight } from "lucide-react";
import { useEffect, useState } from "react";

export default () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "About Us", path: "#AboutUs" },
    { title: "Our Services", path: "#OurServices" },
    { title: "Investment Opportunities", path: "#InvestmentOpportunities" },
    { title: "Contact Us", path: "#ContactUs" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Brand = () => (
    <div className="flex items-center justify-between md:block">
      <a href="#">
        <img
          src="/logo.png"
          width={150}
          height={50}
          alt="Float UI logo"
          className={`${isScrolled ? "" : ""} mt-3`}
        />
      </a>
      <div className="md:hidden">
        <button
          className="menu-btn text-gray-500 hover:text-gray-800"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative">
      <div
        className="absolute inset-0 blur-xl h-[580px]"
        style={{
          background:
            "linear-gradient(143.6deg, rgba(132, 252, 192, 0) 20.79%, rgba(121, 249, 232, 0.26) 40.92%, rgba(171, 238, 204, 0) 70.35%)",
        }}
      ></div>
      <div className="relative">
        <header
          className={`fixed top-0 left-0 w-full z-20 p-0 transition-colors duration-300 ${
            isScrolled
              ? "border border-b-2 border-slate-300 bg-slate-100"
              : "bg-transparent"
          }`}
        >
          <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
            <Brand />
          </div>
          <nav
            className={`pb-5 md:text-sm ${
              state
                ? "absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent"
                : ""
            }`}
          >
            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
              <Brand />
              <div
                className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
                  state ? "block" : "hidden"
                }`}
              >
                <ul className="flex-1 justify-center gap-5 text-[17px] items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                  {navigation.map((item, idx) => (
                    <li
                      key={idx}
                      className={`${
                        isScrolled
                          ? "text-gray-700 font-semibold hover:text-gray-900 md:hover:bg-slate-800 md:hover:text-slate-50"
                          : "text-gray-700 hover:text-gray-900 md:hover:bg-slate-800 md:hover:text-slate-50"
                      } md:pr-4 md:pl-4 p-3 md:hover:rounded-full mt-3`}
                    >
                      <a href={item.path} className="block">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <section>
          <div className="max-w-screen-xl mx-auto px-4 pt-36 md:pt-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
            <div className="flex-none space-y-5 max-w-xl md:py-28">
              <h1 className="text-4xl text-gray-800 font-extrabold md:text-5xl md:text-left text-center">
                Innovative Solutions For Agriculture, Trading & Infrastructure
              </h1>
              <p className="text-center md:text-left">
                Cultivating Prosperity and Powering Possibilities
              </p>
              <div
                className="text-slate-300 p-6 rounded-md border-2 border-slate-500"
                style={{
                  background:
                    "linear-gradient(to top, #09203f 0%, #537895 100%)",
                }}
              >
                <h3 className="font-semibold text-lg text-center md:text-left">
                  Providing top-tier agriculture, agro-processing, trading, and
                  construction services to empower businesses and individuals
                  worldwide. Possible with{" "}
                  <i>BEZAN AGRIBIZ & GENERAL SERVICES</i>
                </h3>
              </div>
              <div className="flex md:inline flex-col items-center md:gap-y-0 gap-y-1 sm:text-sm">
                {/* Button 1 for Learn More */}
                <a href="#AboutUs">
                  <button className="group text-center md:mr-2 relative cursor-pointer bg-slate-900 h-16 w-64 border-2 border-teal-600 text-white text-base font-bold rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:border-emerald-400 hover:text-emerald-300 p-3 before:absolute before:w-10 before:h-10 before:content[''] before:right-2 before:top-2 before:z-10 before:bg-indigo-500 before:rounded-full before:blur-lg before:transition-all before:duration-500 after:absolute after:z-10 after:w-16 after:h-16 after:content[''] after:bg-teal-400 after:right-6 after:top-4 after:rounded-full after:blur-lg after:transition-all after:duration-500 hover:before:right-10 hover:before:-bottom-4 hover:before:blur hover:after:-right-6 hover:after:scale-110">
                    Learn More
                  </button>
                </a>
                {/* Button 2 for Contact Us */}
                <a href="#ContactUs">
                  <button className="group mt-2 text-center relative cursor-pointer bg-slate-900 h-16 w-64 border-2 border-teal-600 text-white text-base font-bold rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:border-emerald-400 hover:text-emerald-300 p-3 before:absolute before:w-10 before:h-10 before:content[''] before:right-2 before:top-2 before:z-10 before:bg-fuchsia-600 before:rounded-full before:blur-lg before:transition-all before:duration-500 after:absolute after:z-10 after:w-16 after:h-16 after:content[''] after:bg-sky-800 after:right-6 after:top-4 after:rounded-full after:blur-lg after:transition-all after:duration-500 hover:before:right-10 hover:before:-bottom-4 hover:before:blur hover:after:-right-6 hover:after:scale-110">
                    Contact Us
                  </button>
                </a>
              </div>
            </div>
            <div className="flex-1 hidden md:block">
              {/* Replace with your image */}
              <img src="/herosection_img.png" className="max-w-xl" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
