import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TEAM_INFO } from "@/lib/data";
export function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        {/* @ts-ignore */}
        <spline-viewer url="https://prod.spline.design/CvIouGVH6JxwNa34/scene.splinecode"></spline-viewer>
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background pointer-events-none"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-tech text-primary tracking-[0.2em] text-lg md:text-xl mb-4 uppercase">
            FIRST Tech Challenge
          </h2>
          <h1 className="font-display font-black tracking-tight mb-2 flex flex-col items-center">
            <span className="text-6xl md:text-8xl lg:text-9xl text-white drop-shadow-2xl mb-2">E.N.G.I.N.E</span>
            <span className="text-4xl md:text-6xl text-stroke text-transparent stroke-white/20">{TEAM_INFO.number}</span>
          </h1>
          <p className="font-tech text-muted-foreground text-lg md:text-2xl max-w-2xl mx-auto mt-6 tracking-wide drop-shadow-md">
            {TEAM_INFO.motto.toUpperCase()}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 pointer-events-auto"
        >
          <a 
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 backdrop-blur-md transition-all clip-tech group"
          >
            <span className="font-tech uppercase tracking-widest text-sm text-white">Explore Mission</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform text-white" />
          </a>
        </motion.div>
      </div>

      {/* Decor Elements */}
      <div className="absolute bottom-0 left-0 p-8 hidden md:block pointer-events-none">
        <div className="font-tech text-xs text-muted-foreground/50 vertical-text tracking-widest">
          SYS.READY // V.2.0.25
        </div>
      </div>
    </section>
  );
}
