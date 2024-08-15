// import Image from "next/image";
"use client";
import ZoomParallax from "./ZoomParallax/ZoomParallax";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Projects() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className=" text-[#fafafa] flex flex-col justify-center items-center w-full h-fit p-10 rounded-2xl">
      {/* <h1 className="font-semibold bg-red-500 text-[20px]">PROJECTS</h1> */}

      <div className="mt-[50vh] mb-[100vh] w-full">
        <ZoomParallax />
      </div>
    </main>
  );
}
