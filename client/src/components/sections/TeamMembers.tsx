
import { motion } from "framer-motion";
import { TEAM_MEMBERS } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

export function TeamMembers() {
  return (
    <section id="team" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">THE CREW</h2>
            <p className="font-tech text-muted-foreground max-w-md">
              The minds behind the machine. A diverse group of students united by a passion for engineering.
            </p>
          </div>
          <div className="hidden md:block h-px w-1/3 bg-white/10"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <Card className="bg-black border-white/10 group hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all overflow-hidden h-full">
                <CardContent className="p-0">
                  <div className="h-32 bg-neutral-900/50 relative overflow-hidden flex items-center justify-center">
                    {/* Member Images Removed */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black to-transparent">
                      <h3 className="font-display text-lg font-bold text-white mb-1 group-hover:translate-x-2 transition-transform group-hover:text-blue-200">
                        {member.name}
                      </h3>
                      <div className="flex justify-between items-center">
                        <p className="font-tech text-blue-400 text-xs uppercase tracking-wider">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
