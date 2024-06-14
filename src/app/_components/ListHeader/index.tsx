"use client";
import { useEffect, useRef } from "react";
import { inView, animate, stagger } from "motion";

type ListHeaderProps = {
  text: string;
};
// Header for video list
export default function ListHeader(props: ListHeaderProps) {
  const { text } = props;
  const headerRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (!headerRef.current) return;
    inView(headerRef.current, () => {
      if (!headerRef.current) return;
      animate(
        headerRef.current,
        { opacity: 1, transform: "none" },
        { duration: 2, delay: stagger(0.2) }
      );
    });
  }, []);
  return (
    <h2
      className={`text-white text-5xl uppercase font-thin rotate-90 opacity-0`}
      ref={headerRef}
      style={{
        textShadow: `2px 2px 0px #000000, 5px 4px 0px rgba(0,0,0,0.06)`,
      }}
    >
      {text}
    </h2>
  );
}
