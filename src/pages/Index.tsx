import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Actions from "@/components/Actions";
import Team from "@/components/Team";
import Support from "@/components/Support";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Actions />
      <Team />
      <HomePage/>
      <Support />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
