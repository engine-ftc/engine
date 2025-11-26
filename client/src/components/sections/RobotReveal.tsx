
import { motion } from "framer-motion";
import { ROBOT_SPECS } from "@/lib/data";
import robotImg from "@assets/generated_images/high-tech_ftc_competition_robot_in_studio_setting.png";

export function RobotReveal() {
  return (
    <section id="robot" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <motion.div 
            className="w-full md:w-1/2 relative order-2 md:order-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <img 
              src={robotImg} 
              alt="Competition Robot" 
              className="w-full h-auto relative z-10 drop-shadow-2xl"
            />
            
            {/* Technical lines decoration */}
            <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none opacity-50" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line x1="10" y1="10" x2="30" y2="10" stroke="white" strokeWidth="0.2" />
              <line x1="10" y1="10" x2="10" y2="30" stroke="white" strokeWidth="0.2" />
              <line x1="90" y1="90" x2="70" y2="90" stroke="white" strokeWidth="0.2" />
              <line x1="90" y1="90" x2="90" y2="70" stroke="white" strokeWidth="0.2" />
            </svg>
          </motion.div>

          <div className="w-full md:w-1/2 order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-2">MARK VII</h2>
              <p className="font-tech text-primary text-xl mb-12 tracking-widest uppercase">
                /// Engineering Portfolio
              </p>

              <div className="space-y-8">
                {ROBOT_SPECS.map((spec, index) => (
                  <div key={index} className="border-l-2 border-white/10 pl-6 py-2 hover:border-primary transition-colors group">
                    <h4 className="font-tech text-muted-foreground text-sm uppercase tracking-wider mb-1 group-hover:text-primary transition-colors">
                      {spec.feature}
                    </h4>
                    <p className="font-display text-xl text-white">
                      {spec.description}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <button className="bg-white text-black px-8 py-4 font-bold font-tech uppercase tracking-widest hover:bg-primary transition-colors clip-tech-corner">
                  Download Full Portfolio
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
