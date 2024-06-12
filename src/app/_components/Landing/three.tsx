"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import pharohMask from "../../../../public/static/images/pharoh.png";
import hiero from "../../../../public/static/images/hiero.jpeg";
import { blackHan } from "@/app/fonts";
import RisingText from "../RisingText";
import logo from "../../../../public/static/logos/logo_color.png";
import { inView, animate, stagger } from "motion";

export default function Three() {
  const sectionThreeRef = useRef<HTMLSpanElement>(null);
  const royalRef = useRef<HTMLHeadingElement>(null);
  const pharohRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!pharohRef.current) return;
    inView(pharohRef.current, () => {
      if (!pharohRef.current || !royalRef.current) return;
      animate(
        pharohRef.current,
        { opacity: 1 },
        { duration: 2, delay: stagger(0.2) }
      );
      animate(
        royalRef.current,
        { transform: "none" },
        { duration: 1, delay: stagger(0.2) }
      );
    });
  });

  return (
    <section
      className="h-[calc(100vh-6rem)] p-4 px-8 w-full bg-greenFog overflow-hidden text-textDark"
      ref={sectionThreeRef}
    >
      <div className="bg-cheese w-full h-full rounded-lg flex flex-row overflow-hidden">
        <div className="w-1/2 p-4">
          <div
            className="w-full bg-black h-full border-4 border-greenFog rounded-lg relative z-1 overflow-hidden"
            style={{
              backgroundImage: `url(${hiero.src})`,
            }}
          >
            <Image
              src={pharohMask}
              alt="pharoh"
              ref={pharohRef}
              className={"opacity-0"}
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col py-4 overflow-hidden items-center pl-8">
          <h2
            ref={royalRef}
            className={`uppercase ${blackHan.className} text-5xl -translate-y-40`}
          >
            Educational Videos Worthy of Royalty
          </h2>
          <div className="grow justify-evenly flex flex-col text-xl font-thin">
            <RisingText text="At Learnwell we are committed to helping you on your learning journey" />
            <RisingText text="To get started, either click Watch Videos or Upload Videos" />
            <RisingText text="Answer histories greatest mysteries with our extensive library!" />

            <RisingText text="What are you waiting for? Get started now!" />
          </div>
          <Image
            src={logo}
            alt="logo"
            quality={100}
            unoptimized
            style={{
              marginBottom: "2rem",
            }}
          />
        </div>
      </div>
    </section>
  );
}
