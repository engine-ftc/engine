
import { motion } from "framer-motion";
import { TEAM_INFO } from "@/lib/data";
import { Cpu, Target, Users } from "lucide-react";
import teamImg from "@assets/generated_images/sleek_ftc_competition_robot_in_studio_setting,_no_people.png";
import engineLogo from "@assets/engine_1764145931028.jpg";

export function About() {
  const features = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Innovation",
      desc: "Pushing the boundaries of mechanical design and software control systems."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      desc: "Spreading STEM education through local outreach and mentorship programs."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      desc: "Striving for precision and reliability in every competition match."
    }
  ];

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight">
                <span className="block text-white text-shadow-sm">WE ARE</span>
                <span className="bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text text-transparent">
                  TEAM E.N.G.I.N.E
                </span>
                <span className="text-2xl md:text-3xl text-blue-400 block mt-1 font-tech tracking-wider">
                  ({TEAM_INFO.number})
                </span>
              </h2>
              <img 
                src={engineLogo} 
                alt="Engine Logo" 
                className="w-32 h-32 object-contain rounded-full border-2 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]" 
              />
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-tech">
              We are a student led robotics team based in UAE. We are participating in the FIRST Tech Challenge (FTC 2025). 
              We are a team of passionate robotics students from Delhi Private School Sharjah. We love collaborating, 
              creating and discovering new things.
            </p>
            <p className="text-white text-lg leading-relaxed mb-12 font-tech">
              Our mission goes beyond just building robots. We aim to develop future leaders in 
              technology and engineering by fostering a culture of creativity, collaboration, 
              and gracious professionalism.
            </p>

            <div className="grid grid-cols-1 gap-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="p-4 bg-blue-950/20 border border-blue-900/30 group-hover:border-blue-500/50 transition-colors">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-display text-blue-100">{f.title}</h3>
                    <p className="text-muted-foreground font-tech">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-white/5 clip-tech-corner -z-10"></div>
            <img 
              src={teamImg} 
              alt="FTC Robot" 
              className="w-full h-auto clip-tech-corner border border-white/10"
            />
            <div className="absolute bottom-8 right-8 bg-black/80 backdrop-blur p-6 border border-white/10 max-w-xs">
              <p className="font-tech text-sm text-primary mb-2">/// EST. {TEAM_INFO.rookieYear}</p>
              <p className="font-display text-xl font-bold">BUILDING THE FUTURE</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
