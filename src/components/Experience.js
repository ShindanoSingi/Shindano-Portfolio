import React from "react";
import GA from "../images/GA.png";
import USM from "../images/usm.png";
import HOL from "../images/HOL.png";

const Experience = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans  gap-4 py-[5rem]  bg-black">
      <div className="text-center fixed top-[3.5rem]  md:top-[4rem] h-16 min-w-full py-auto  justify-center text-white   bg-teal-800">
        <h5 class=" align-baseline py-2 leading-tight font-sans font-light text-4xl text-center">
          EXPERIENCE
        </h5>
      </div>
      <div class="flex mt-[5rem]  justify-center">
        <div class="block w-[92vw]  rounded-md shadow-lg bg-white max-w-4xl md:text-xl text-center">
          <div class="py-3 px-3 flex flex-col items-center  border-b border-gray-300">
            <a
              href="https://generalassemb.ly/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GA} alt="GA" className="w-8 h-8 md:w-12 md:h-12" />
            </a>
            <a
              href="https://generalassemb.ly/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="px-3 hover:bg-[#E4222A] mt-0.5  w-fit">
                GENERAL ASSEMBLY
              </h1>
            </a>
            <h1>Fellow Full Stack Developer</h1>
          </div>
          <div class="p-2">
            <div class="text-gray-700 text-left  mb-1">
              <li className="px-3">
                Completed 400+ hours of expert-led instruction in front-end and
                full- stack development, database management, and hands-on
                learning of full-stack fundamentals and the industry's most
                in-demand technologies.
              </li>
            </div>
          </div>
          <div class="py-3 px-3  border-t border-gray-300 text-gray-600">
            Jan. 2022 - July 2022
          </div>
        </div>
      </div>

      <div class="flex  justify-center">
        <div class="block w-[92vw]  rounded-md shadow-lg bg-white max-w-4xl md:text-xl text-center">
          <div class="py-3 px-3 flex flex-col items-center  border-b border-gray-300">
            <a
              href="https://www.siemens.com/us/en.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/2560px-Siemens-logo.svg.png"
                }
                alt="Siemens"
                className="h-8 md:h-10"
              />
            </a>
            <a
              href="https://www.siemens.com/us/en.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="px-3 hover:bg-[#009A9A] w-fit">SIEMENS</h1>
            </a>
            <h1>Systems Engineer</h1>
          </div>
          <div class="p-2">
            <div class="text-gray-700 text-left mb-1">
              <li className="px-3">
                Participate in turnover meetings to discuss the project to be
                designed.
              </li>
              <li className="px-3">
                Design HVAC systems valued at $500k - $1 million each week using
                AutoCAD, commissioning tools, and design tools based on
                requirements on mechanical and electrical contract drawings.
              </li>
              <li className="px-3">
                Collaborate with a cross-functional team to complete projects
                efficiently and timely to the client!s specifications.
              </li>
            </div>
          </div>
          <div class="py-3 px-3 border-t border-gray-300 text-gray-600">
            March. 2020 - Present | Irving, TX
          </div>
        </div>
      </div>

      <div class="flex  justify-center">
        <div class="block w-[92vw]  rounded-md shadow-lg bg-white max-w-4xl md:text-xl text-center">
          <div class="py-3 px-3 flex flex-col items-center  border-b border-gray-300">
            <a
              href="https://global.abb/group/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/2560px-ABB_logo.svg.png"
                }
                alt="ABB"
                className="h-6 md:h-10"
              />
            </a>
            <a
              href="https://global.abb/group/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="px-3 hover:bg-[#FF000F] hover:text-white mt-0.5  w-fit">
                ABB
              </h1>
            </a>
            <h1>Lean Engineering Intern</h1>
          </div>
          <div class="p-2">
            <div class="text-gray-700 text-left  mb-1">
              <li className="px-3">
                Used LEAN tools such as GEMBA on the production floor to
                identify what needed improvement and found a solution.
              </li>
              <li className="px-3">
                Collaborated with cross-function in the Weld braze team and
                Vertical Machining Center (VMC) teams to develop work, and
                process standards to improve productivity and reduce
                injury-related risks.
              </li>
              <li className="px-3">
                Wrote more than 50 Standard Operation Procedures (SOP) and
                organized tools to improve safety and production flow.
              </li>
              <li className="px-3">
                Designed/fabricated and assembled parts in Moonshine shop using
                the 3D printer (Ender 3), mechanical, electrical, hydraulic...
                tools such as Milling machine (Bridgeport), heat bender, shop
                saws, ... that saved us about 500$ per each fabricated 3
                machines.
              </li>
            </div>
          </div>
          <div class="py-3 px-3  border-t border-gray-300 text-gray-600">
            Sept. 2019 - Mar. 2020 | Auburn, ME
          </div>
        </div>
      </div>

      <div class="flex  justify-center">
        <div class="block w-[92vw]  rounded-md shadow-lg bg-white max-w-4xl md:text-xl text-center">
          <div class="py-3 px-3 flex flex-col items-center  border-b border-gray-300">
            <a
              href="https://usm.maine.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={USM} alt="USM" className="h-8 md:h-10" />
            </a>
            <a
              href="https://usm.maine.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="px-3 hover:bg-[#01529B] w-fit mt-0.5">USM</h1>
            </a>
            <h1>Electronics Lab. Technician</h1>
          </div>
          <div class="p-2">
            <div class="text-gray-700 text-left mb-1">
              <li className="px-3">
                Provided technical support to more than 15 students performing
                electronics lab experiments.
              </li>
              <li className="px-3">
                Maintained more than 20 pieces of electronics equipment such as
                oscilloscopes, frequency generators, power supplies...
              </li>
            </div>
          </div>
          <div class="py-3 px-3  border-t border-gray-300 text-gray-600">
            Jan. 2019 - Sept. 2019 | Gorham, ME
          </div>
        </div>
      </div>

      <div class="flex  justify-center">
        <div class="block w-[92vw]  rounded-md shadow-lg bg-white max-w-4xl md:text-xl text-center">
          <div class="py-3 px-3 flex flex-col items-center  border-b border-gray-300">
            <a
              href="https://houseoflanguages.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={HOL} alt="HOL" className="h-8 md:h-12" />
            </a>
            <a
              href="https://houseoflanguages.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="px-3 hover:bg-[#344460] hover:text-white  w-fit">
                HOUSE OF LANGUAGES
              </h1>
            </a>
            <h1>Interpreter</h1>
          </div>
          <div class="p-2">
            <div class="text-gray-700 text-left  mb-1">
              <li className="px-3">
                Interpreted (oral) and translated (written) English into/from 3
                languages: French, Swahili, and Kibembe for multiple clients
                such as courts, hospitals, schools, refugees's orgnaizations...
                and their beneficiaries (English-limited speakers) to ensure
                services were well delivered.
              </li>
            </div>
          </div>
          <div class="py-3 px-3  border-t border-gray-300 text-gray-600">
            May 2016 - Mar. 2020 | Portland, ME
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
