import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TeamMembers } from "@/components/sections/TeamMembers";
import { Sponsors } from "@/components/sections/Sponsors";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TeamMembers />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
