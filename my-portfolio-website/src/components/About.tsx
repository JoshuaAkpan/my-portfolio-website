"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="h-[80vh] bg-[#fafafa] text-[#0a0a0a] flex flex-col justify-center items-center  w-full p-10 rounded-2xl">
      <h1 className="font-semibold text-[20px]">ABOUT</h1>

      <div className="flex flex-col lg:flex-row justify-center items-center">
        <motion.div
          animate={{
            y: [0, -40, 0],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className=""
        >
          <Image
            src="/0xJosh.jpg"
            alt="0xJosh"
            width={200}
            height={300}
            className="rounded-md"
          />
        </motion.div>
        <p className="lg:flex-1 text-left text-[15px] md:text-[20px] leading-[1.7] max-w-[800px] text-[#0a0a0a] font-sans p-16 rounded-[20px]">
          Joshua's portfolio is a testament to his expertise and dedication.
          Here, you'll find projects that not only showcase his technical
          prowess but also his ability to transform ideas into visually stunning
          and highly functional web applications. Whether it's building dynamic
          single-page applications, creating seamless user interfaces, or
          ensuring every component is pixel-perfect, Joshua brings a touch of
          brilliance to every project. Explore Joshua's work and discover the
          blend of creativity and professionalism that sets him apart. Let his
          portfolio take you on a journey through the realm of frontend
          development, where your vision becomes a reality. Join forces with
          Joshua, and together, let's create something truly exceptional.
        </p>
      </div>
    </main>
  );
}
