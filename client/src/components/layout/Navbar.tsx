
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { TEAM_INFO } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    setIsMobileOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-black border-white/10 py-4"
          : "bg-black border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div 
          className="font-display font-bold text-2xl tracking-widest cursor-pointer flex items-center gap-2"
          onClick={() => scrollToSection("#hero")}
        >
          <span className="text-primary">{TEAM_INFO.number}</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="font-tech text-sm uppercase tracking-widest hover:text-primary transition-colors text-muted-foreground"
            >
              {link.name}
            </button>
          ))}
          <Button 
            variant="outline" 
            className="font-tech uppercase tracking-wider border-primary/50 hover:bg-primary hover:text-black transition-all"
            onClick={() => window.open("https://www.firstinspires.org/robotics/ftc", "_blank")}
          >
            FIRST Tech Challenge
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-left font-tech text-lg uppercase tracking-widest py-2 border-b border-border/50"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
