"use client";
import Image from "next/image";
import astronaut from "../../../../public/static/images/astronaut.png";
import learnwellLogo from "../../../../public/static/logos/logo_dark.png";
import stars from "../../../../public/static/images/stars.jpeg";

import { useRef, useEffect } from "react";
import { animate, stagger } from "motion";
import { blackHan } from "@/app/fonts";

export default function One() {
  useEffect(() => {
    if (!astroRef.current) return;
    animate(
      astroRef.current,
      { opacity: 1 },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
    animate(
      astroRef.current,
      {
        transform: [
          "translate(0px, -15px)",
          "translate(-15px, 0px)",
          "transslate(15px, -15px)",
        ],
      },
      { offset: [0, 0.5, 1], repeat: Infinity, duration: 8 }
    );
    if (!logoRef.current) return;
    animate(
      logoRef.current,
      { transform: "none" },
      { duration: 2, delay: stagger(0.2) }
    );
    if (
      !welcomeRef.current ||
      !worldRef.current ||
      !readyRef.current ||
      !experienceRef.current
    )
      return;
    animate(
      [
        welcomeRef.current,
        worldRef.current,
        readyRef.current,
        experienceRef.current,
      ],
      {
        opacity: 1,
        transform: "none",
      },
      { duration: 2, delay: stagger(0.2) }
    );
  }, []);

  const astroRef = useRef<HTMLImageElement>(null);
  const welcomeRef = useRef<HTMLHeadingElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const readyRef = useRef<HTMLSpanElement>(null);
  const worldRef = useRef<HTMLSpanElement>(null);
  const experienceRef = useRef<HTMLSpanElement>(null);

  return (
    <section className="h-[calc(100vh-6rem)] p-4 px-8 w-full bg-greenFog overflow-hidden text-textDark">
      <div className="bg-elecBlue w-full h-full rounded-lg flex flex-row overflow-hidden">
        <div className="w-1/2 p-4">
          <div
            className="w-full bg-black h-full border-4 border-cheese rounded-lg"
            style={{
              backgroundImage: `url(${stars.src})`,
            }}
          >
            <Image
              src={astronaut}
              alt="astronaut"
              ref={astroRef}
              className={`opacity-0`}
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col py-4 gap-2 overflow-hidden">
          <h2
            className="text-5xl  pl-4 opacity-0 translate-x-20 rotate-x-90 transition-all"
            ref={welcomeRef}
          >
            Welcome to
          </h2>
          <div className="w-full justify-center flex flex-row overflow-hidden ">
            <Image
              src={learnwellLogo}
              ref={logoRef}
              alt="logo"
              className={"translate-y-20"}
            />
          </div>
          <section className="flex flex-col grow justify-center w-full items-center text-xl gap-10 overflow-hidden">
            <span ref={readyRef} className="-translate-x-full opacity-0">
              Are you ready for an...
            </span>
            <span
              className={`${blackHan.className} text-5xl uppercase text-cheese overflow-hidden translate-y-20 opacity-0`}
              ref={worldRef}
            >
              out of this world
            </span>
            <span ref={experienceRef} className="translate-x-full opacity-0">
              ...video learning experience?
            </span>
          </section>
        </div>
      </div>
    </section>
  );
}
