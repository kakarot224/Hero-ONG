import Hero from "@/components/Hero";
import About from "@/components/About";
import Actions from "@/components/Actions";
import Team from "@/components/Team";
import HomePage from "@/components/HomePage";
import Support from "@/components/Support";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Actions />
      <Team />
      <HomePage />
      <Support />
      <Contact />
    </main>
  );
}
