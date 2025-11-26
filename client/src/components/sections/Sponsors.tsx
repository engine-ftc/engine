
import { motion } from "framer-motion";
import { SPONSORS } from "@/lib/data";

export function Sponsors() {
  return (
    <section id="sponsors" className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR PARTNERS</h2>
        <p className="font-tech text-muted-foreground mb-16 max-w-2xl mx-auto">
          Thank you to the generous organizations that make our season possible through their support and mentorship.
        </p>

        <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-80">
          {SPONSORS.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="text-2xl md:text-3xl font-display font-bold text-neutral-500 group-hover:text-white transition-colors duration-500">
                {sponsor.name}
              </div>
              <div className="font-tech text-xs text-primary opacity-0 group-hover:opacity-100 absolute -bottom-6 left-1/2 -translate-x-1/2 transition-opacity whitespace-nowrap">
                E.N.G.I.N.E partner
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-8 border border-white/10 bg-white/5 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-2">Interested in Sponsoring?</h3>
          <p className="text-muted-foreground mb-6 font-tech">
            Help us build the future of engineering. We offer various sponsorship tiers with branding opportunities.
          </p>
          <p className="text-primary font-tech text-lg">Contact us on ftcdps@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
