"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Circle } from "lucide-react";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export type WhatWeHaveProps = SliceComponentProps<Content.WhatWeHaveSlice>;

const WhatWeHave = ({ slice }: WhatWeHaveProps): JSX.Element => {
  const component = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".car-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
        }
      );
    }, component);
    return () => ctx.revert();
  }, []);
  useGSAP(
    () => {
      gsap.from(".aboutTitle", {
        scrollTrigger: {
          trigger: ".aboutTitle",
          start: "top 80%",
        },
        y: -120,
        opacity: 0,
        duration: 0.7,
        ease: "power1.inOut",
        yoyo: true,
      });
    },
    { scope: component }
  );
  return (
    <div className="overflow-hidden max-w-[100vh]">
      <section
        ref={component}
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <h2 className="aboutTitle">{slice.primary.title}</h2>

        {slice.items.map(({ car_name, color }, index) => (
          <div
            key={index}
            className="car-row"
            aria-label={car_name || undefined}
          >
            {Array.from({ length: 15 }, (_, index) => (
              <React.Fragment key={index}>
                <span
                  className="car-item"
                  style={{
                    color: index === 7 && color ? color : "inherit",
                  }}
                >
                  {car_name}
                </span>
                <span className="carIcon">
                  <Circle size={48} strokeWidth={4} />
                </span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default WhatWeHave;
