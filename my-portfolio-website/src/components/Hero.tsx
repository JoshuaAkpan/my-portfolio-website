"use client";

import BoxReveal from "@/components/magicui/box-reveal";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "@/hooks/useInView"; // Assume you've put the hook in `hooks` directory

export default function Hero() {
  const heroText =
    "In the land of code and creativity, where pixels dance and designs come alive, there dwells a skilled and passionate frontend developer named Joshua. With the expertise of ReactJS, the wisdom of NextJS, the precision of TypeScript, and the elegance of Tailwind CSS, Joshua crafts digital experiences that captivate and delight.".split(
      " "
    );

  const { isInView, ref } = useInView(0.1);

  return (
    <main className="flex flex-col justify-center items-center h-full w-full">
      <div className="text-center h-[40vh] w-full max-w-[32rem] overflow-hidden mt-20 mb-8 lg:mt-52 lg:mb-10 flex flex-col items-center">
        <BoxReveal boxColor={"#d933f8"} duration={0.2}>
          <p className="items-center text-[3.5rem] font-semibold text-[#fafafa]">
            Welcome to
          </p>
        </BoxReveal>
        <BoxReveal boxColor={"#d933f8"} duration={0.3}>
          <p className="text-[3.5rem] text-center font-semibold text-[#fafafa]">
            <span className="text-[#d933f8]">Joshua&apos;s</span> Portfolio
            <span className="text-[#d933f8]">.</span>
          </p>
        </BoxReveal>
      </div>

      <div
        ref={ref} // attach the ref to the container you want to observe
        className="h-[100vh] flex flex-col-reverse lg:flex-row gap-1 md:gap-10 items-center justify-center"
      >
        <div className="lg:flex-1 text-left text-[20px] md:text-[28px] leading-[1.7] max-w-[800px] text-[#fafafa] font-sans p-16 rounded-[20px]">
          {heroText.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }} // Trigger animation based on isInView
              transition={{ duration: 0.25, delay: i / 10 }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </div>

        <motion.div
          animate={{
            y: [0, -40, 0],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="relative"
        >
          <Image
            src="/heroImage.jpg"
            alt="Photo by Diana ✨ from Pexels: https://www.pexels.com/photo/red-and-white-abstract-painting-3792313/"
            width={300}
            height={300}
            className="rounded-md"
          />
        </motion.div>
      </div>
    </main>
  );
}
