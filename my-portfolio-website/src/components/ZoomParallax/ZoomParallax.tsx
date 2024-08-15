"use client";

import "./ZoomParallax.css";
import Image from "next/image";
import picture1 from "/public/picture1.jpg";
import picture2 from "/public/picture2.jpg";
import picture3 from "/public/picture3.jpg";
import picture4 from "/public/picture4.jpg";
import picture5 from "/public/picture5.jpg";
import picture6 from "/public/picture6.jpg";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function ZoomParallax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: picture1,
      scale: scale5,
    },
    {
      src: picture2,
      scale: scale6,
    },
    {
      src: picture3,
      scale: scale5,
    },
    {
      src: picture4,
      scale: scale6,
    },
    {
      src: picture5,
      scale: scale8,
    },
    {
      src: picture6,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className="h-[300vh] relative ">
      {/* container */}
      <div className="h-[100vh] sticky top-0 overflow-hidden">
        {/* sticky */}
          {pictures.map(({ src, scale }, index) => {
            return (
              <motion.div
                key={index}
                style={{ scale }}
                className="w-full h-full absolute top-0 flex items-center justify-center"
              >
                <div className={`imageContainer nth-${index + 2}`}>
                  <Image src={src} fill alt="image" placeholder="blur" />
                </div>
              </motion.div>
            );
          })}

        
        {/* MID TEXT  */}
        <div className="w-full h-full absolute top-0 flex items-center justify-center">
          {/* el */}
          <motion.div
            style={{ scale: scale4 }}
            className="w-[25vw] h-[25vh] font-semibold  text-[#fafafa] text-[20px] flex justify-center items-center relative"
          >
            {/* image container  */}
            <h1 className="text-[30px] font-bold">PROJECTS</h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
