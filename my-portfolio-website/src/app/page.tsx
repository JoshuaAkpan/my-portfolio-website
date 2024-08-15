import { Hero, About, Projects } from "@/components";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Hero/>
      <About/>
      <Projects/>
    </main>
  );
}
