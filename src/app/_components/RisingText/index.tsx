"use client";

import { useRef, useEffect } from "react";
import { inView, animate, stagger } from "motion";

type RisingTextProps = {
  text: string;
};
// Component that shows text that rises when scrolled to
export default function RisingText(props: RisingTextProps) {
  const { text } = props;
  const risingText = useRef<HTMLDivElement>(null);
  const risingWrapper = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!risingWrapper.current) return;
    inView(risingWrapper.current, () => {
      if (!risingText.current) return;
      animate(
        risingText.current,
        {
          opacity: 1,
          transform: "none",
        },
        {
          duration: 2,
          delay: stagger(0.2),
        }
      );
    });
  });
  return (
    <div
      className="oveflow-hidden inline-block leading-[2vw]"
      ref={risingWrapper}
    >
      <div
        ref={risingText}
        className="inline-block leading-[2vw] opacity-0 translate-y-[2vw]"
      >
        {text}
      </div>
    </div>
  );
}
