/*
! Created On Mon July 07 1:33 AM 2025

! @author: Talha Usman
! Status: Developer
*/

import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";
const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("talhau137@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="Avatar Picture"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Talha</p>
              <p className="grid-subtext">
                With solid experience in Full Stack Development, I’ve honed my
                expertise in building dynamic and visually engaging 3D animated
                websites.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="Tech Stack"
              className="w-full sm:w-[276px] h-fit object-contain"
            />
            <div className="">
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in Full Stack Development with a focus on building
                animated 3D websites using Three.js and Next.js, powered by
                robust backends built with Python frameworks like Django and
                FastAPI.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 30,
                    lng: -650,
                    text: "Globally Remote",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                Working Remotely Across Global Time Zones
              </p>
              <p className="grid-subtext">
                Based in Pakistan, available for remote work worldwide.
              </p>
              <a href="#contact">
                <Button
                  name="Contact Me"
                  containerClass="w-full mt-10"
                  isBeam
                />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="Integration"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                Programming isn’t just my profession—it’s my passion. I love
                solving complex problems and turning ideas into reality through
                code. It’s not just about writing syntax; it’s about creating
                solutions that make a difference.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="Dial"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="Copy Button"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  talhau137@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
