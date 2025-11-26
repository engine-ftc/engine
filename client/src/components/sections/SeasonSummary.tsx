
import { motion } from "framer-motion";
import { SEASON_STATS } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

export function SeasonSummary() {
  return (
    <section className="py-20 border-y border-white/10 bg-neutral-950/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">SEASON PERFORMANCE</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {SEASON_STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-black border-white/10 hover:border-white/30 transition-all h-full">
                <CardContent className="p-8 text-center flex flex-col justify-center h-full">
                  <span className="font-display text-5xl md:text-6xl font-bold text-white mb-2 block">
                    {stat.value}
                  </span>
                  <span className="font-tech text-muted-foreground uppercase tracking-widest text-sm">
                    {stat.label}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
