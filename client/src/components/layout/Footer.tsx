
import { TEAM_INFO } from "@/lib/data";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">{TEAM_INFO.name}</h3>
            <p className="text-muted-foreground font-tech leading-relaxed max-w-xs">
              Inspiring the next generation of engineers and innovators through competitive robotics.
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-2 font-tech text-muted-foreground">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">The Crew</a></li>
              <li><a href="#sponsors" className="hover:text-white transition-colors">Sponsors</a></li>
              <li><a href="https://www.firstinspires.org/" target="_blank" className="hover:text-white transition-colors">FIRST Inspires</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6 text-primary">Connect</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/e.n.g.i.n.e.ers?igsh=N2o0eWdjYnN1am11" target="_blank" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://x.com/engineftc/with_replies" target="_blank" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Twitter size={18} />
              </a>
              <a href="https://youtube.com/@ftc-engine?si=7FBxLg8OqqkjPDcH" target="_blank" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Youtube size={18} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61583977306142" target="_blank" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-tech">
          <p>© {new Date().getFullYear()} {TEAM_INFO.name}. All rights reserved.</p>
          <p>Participating in FIRST Tech Challenge</p>
        </div>
      </div>
    </footer>
  );
}
