"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { trex, jungle } from "../../../../public/static/images";
import { blackHan } from "@/app/fonts";
import { RisingText } from "../index";
import { inView, animate, stagger } from "motion";

export default function SectionTwo() {
  const rexRef = useRef<HTMLImageElement>(null);
  const roarRef = useRef<HTMLHeadingElement>(null);
  const extinctRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!roarRef.current) return;
    inView(roarRef.current, () => {
      if (!rexRef.current) return;
      animate(
        rexRef.current,
        { opacity: 1 },
        {
          duration: 2,
          delay: stagger(0.2),
        }
      );
      animate(
        rexRef.current,
        {
          transform: [
            "translateX(-1px)",
            "translateX(1px)",
            "translateX(-1px)",
            "translateX(1px)",
          ],
        },
        { repeat: 1, duration: 0.5 }
      );
      if (!roarRef.current) return;
      animate(
        roarRef.current,
        {
          transform: [
            "translateX(-3px)",
            "translateX(3px)",
            "translateX(-3px)",
            "translateX(3px)",
          ],
        },
        { repeat: 1, duration: 0.5 }
      );
    });
    if (!extinctRef.current) return;

    inView(extinctRef.current, () => {
      if (!extinctRef.current) return;
      animate(
        extinctRef.current,
        {
          transform: [
            "translateX(-5px)",
            "translateX(5px)",
            "translateX(-5px)",
            "translateX(5px)",
          ],
          opacity: [0, 1],
        },
        { offset: [0, 0.5, 1], duration: 2, delay: stagger(0.5) }
      );
    });
  }, []);
  return (
    <section
      className="h-[calc(100vh-6rem)] p-4 px-8 w-full bg-greenFog overflow-hidden text-textDark "
      style={{
        textShadow: `2px 2px 0px #FF0000, 5px 4px 0px rgba(0,0,0,0.06)`,
      }}
    >
      <div className="bg-tangerine w-full h-full rounded-lg flex flex-row overflow-hidden">
        <div className="w-1/2 p-4">
          <div
            className="relative z-1 h-full border-4 rounded-lg border-cheese"
            style={{
              backgroundImage: `url(${jungle.src})`,
              backgroundSize: "cover",
            }}
          >
            <Image src={trex} alt="trex" className={`opacity-1`} ref={rexRef} />
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center py-6 ">
          <h2
            className={`uppercase text-cheese text-5xl ${blackHan.className}`}
            ref={roarRef}
          >
            Roar!!!
          </h2>
          <section className="flex items-center w-full px-8 flex-col grow justify-evenly text-cheese text-xl">
            <RisingText text="...your way to your next hobby or skill with our extensive video library!" />
            <RisingText
              text="Our user curated video library covers a wealth of topics - from
              dinosaurs to knitting, there is something for everyone!"
            />
            <RisingText
              text="You can watch, upload, and leave comments on videos, sharing your
              thoughts and experiences with our vibrant community!"
            />
            <RisingText
              text="We are confident that once you get started learning from our
              videos, that all other video libraries will be..."
            />

            <h2
              className={`uppercase text-cheese text-5xl ${blackHan.className}`}
              ref={extinctRef}
            >
              Extinct
            </h2>
          </section>
        </div>
      </div>
    </section>
  );
}
