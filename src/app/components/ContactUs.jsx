import { Mail, Phone } from "lucide-react";
import React from "react";

function ContactUs() {
  const email = "bezanagribizandgeneralservice@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Email copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <>
      <div className="relative mx-auto md:mt-15 md:p-10 p-3" id="ContactUs">
        <div
          className="rounded-xl p-1"
          style={{
            backgroundImage:
              "linear-gradient(to right bottom, rgb(34, 197, 94) 0%, rgb(74, 222, 125) 50%, rgb(22, 163, 74) 100%)",
          }}
        >
          <div className="rounded-lg bg-black/80 backdrop-blur">
            <div className="md:flex w-full md:flex-wrap items-center justify-between gap-4 px-8 py-10 sm:px-16 lg:flex-nowrap">
              <div className="lg:max-w-xl w-full">
                <h2 className="block w-full pb-2 bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent md:text-3xl text-3xl sm:text-4xl">
                  CONTACT{" "}
                  <span className="text-green-300">
                    BEZAN AGRIBIZ & GENERAL SERVICES
                  </span>
                </h2>
                <div className="flex flex-wrap items-center gap-2 my-4 bg-transparent font-medium leading-relaxed tracking-wide text-gray-200">
                  <Mail />
                  <span className="hidden md:inline">{email}</span>
                  <button
                    onClick={copyToClipboard}
                    className="ml-2 border-2 border-green-700 text-white rounded-sm px-3 py-2 cursor-pointer text-xs transition-all duration-300 hover:bg-green-600"
                  >
                    Copy Email
                  </button>
                </div>
                <h2 className="flex items-center gap-2 my-4 bg-transparent font-medium leading-relaxed tracking-wide text-gray-200">
                  <Phone />
                  08092000600
                </h2>
              </div>
              <div className="flex flex-wrap md:justify-end gap-6">
                <img
                  src="/logo2.png"
                  alt="Logo2"
                  className="filter invert w-[50%] hidden md:block" // Hide on mobile, show on medium and larger screens
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
