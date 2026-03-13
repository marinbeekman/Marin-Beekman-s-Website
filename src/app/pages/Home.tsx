import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { FloatingCircle, RetroGrid, RetroBlob, RetroStar, RetroCircles, WavyLine } from "../components/RetroShapes";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";

export function Home() {
  return (
    <div className="min-h-screen pb-20 font-['Space_Grotesk'] relative overflow-hidden">
      <RetroGrid />
      
      {/* Floating background elements */}
      <FloatingCircle color="#EC7A5E" size="400px" top="10%" left="5%" delay={0} />
      <FloatingCircle color="#6BB1AD" size="350px" top="60%" left="70%" delay={1} />
      <FloatingCircle color="#F3A6A6" size="300px" top="40%" left="80%" delay={2} />
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        <RetroBlob color="#E8ECB9" className="top-0 right-0 opacity-20" />
        <RetroStar color="#EC7A5E" size={80} className="absolute top-20 right-20 opacity-30" />
        <RetroCircles className="top-40 left-10 opacity-20" />
        
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="bg-[#6BB1AD] text-white px-6 py-2 font-['DM_Mono'] uppercase tracking-widest inline-block border-2 border-[#1a1a1a] shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
                ✦ Welcome
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-7xl lg:text-8xl font-['Unbounded'] mb-6 leading-[0.9]"
              style={{ fontWeight: 900 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="block text-[#1a1a1a]">HEY, I'M</span>
              <span className="block bg-gradient-to-r from-[#EC7A5E] via-[#F3A6A6] to-[#6BB1AD] bg-clip-text text-transparent">
                YOUR NAME
              </span>
            </motion.h1>
            
            <WavyLine color="#EC7A5E" className="w-48 mb-6" />
            
            <motion.p 
              className="text-xl text-[#1a1a1a]/70 mb-10 leading-relaxed max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Creating cool stuff, vibing with design, and making the internet a prettier place—one pixel at a time ✨
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link to="/portfolio">
                <motion.button 
                  className="bg-[#EC7A5E] text-white px-8 py-4 font-['Space_Grotesk'] uppercase tracking-wider border-2 border-[#1a1a1a] shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] flex items-center gap-3 group"
                  style={{ fontWeight: 700 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "8px 8px 0px 0px rgba(26,26,26,1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Work
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button 
                  className="bg-white text-[#1a1a1a] px-8 py-4 font-['Space_Grotesk'] uppercase tracking-wider border-2 border-[#1a1a1a] shadow-[6px_6px_0px_0px_rgba(26,26,26,1)]"
                  style={{ fontWeight: 700 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "8px 8px 0px 0px rgba(26,26,26,1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Say Hi!
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <div className="relative border-4 border-[#1a1a1a] shadow-[12px_12px_0px_0px_rgba(26,26,26,1)] overflow-hidden bg-gradient-to-br from-[#F3A6A6] to-[#EC7A5E] p-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1599217441098-dbf50591f21a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcG9ydHJhaXQlMjBwaW5rJTIwYWVzdGhldGljfGVufDF8fHx8MTc3MzI1MDY5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Portrait"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-[#E8ECB9] p-6 border-3 border-[#1a1a1a] shadow-[6px_6px_0px_0px_rgba(26,26,26,1)]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="font-['Unbounded'] text-4xl" style={{ fontWeight: 800 }}>✦</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Featured Grid */}
        <motion.div 
          className="mt-32 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {[
            {
              img: "https://images.unsplash.com/photo-1588710768013-a36d48bce237?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1pbmluZSUyMHdvcmtzcGFjZSUyMGRlc2slMjBwYXN0ZWx8ZW58MXx8fHwxNzczMjUwNjk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              title: "WORKSPACE",
              color: "#EC7A5E",
            },
            {
              img: "https://images.unsplash.com/photo-1626161290912-d415a83683fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXJzJTIwYm91cXVldCUyMHBpbmslMjByb3Nlc3xlbnwxfHx8fDE3NzMyNTA2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              title: "VIBES",
              color: "#6BB1AD",
            },
            {
              img: "https://images.unsplash.com/photo-1677406908796-17d372b18aec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGFydCUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NzMyNTA2OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              title: "ENERGY",
              color: "#F3A6A6",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
            >
              <div className="relative border-3 border-[#1a1a1a] shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] overflow-hidden group-hover:shadow-[12px_12px_0px_0px_rgba(26,26,26,1)] transition-all">
                <ImageWithFallback
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div 
                  className="absolute inset-0 flex items-end p-6"
                  style={{ 
                    background: `linear-gradient(to top, ${item.color}ee, transparent)` 
                  }}
                >
                  <h3 className="font-['Unbounded'] text-white text-2xl" style={{ fontWeight: 800 }}>
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote Section */}
        <motion.div 
          className="mt-32 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <RetroStar color="#6BB1AD" size={100} className="absolute -top-12 left-1/4 opacity-20" />
          <RetroStar color="#F3A6A6" size={80} className="absolute -bottom-12 right-1/4 opacity-20" />
          
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#EC7A5E] to-[#F3A6A6] p-12 border-4 border-[#1a1a1a] shadow-[16px_16px_0px_0px_rgba(26,26,26,1)] relative overflow-hidden">
            <motion.div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)",
              }}
              animate={{ backgroundPosition: ["0px 0px", "28px 28px"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative z-10 text-center">
              <motion.div
                className="text-6xl mb-6"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                ✦
              </motion.div>
              <p className="text-4xl font-['Unbounded'] text-white mb-6 leading-tight" style={{ fontWeight: 800 }}>
                "MAKE IT WORK, MAKE IT RIGHT, MAKE IT FAST"
              </p>
              <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
              <p className="text-white/80 font-['DM_Mono'] uppercase tracking-widest">
                Design Philosophy
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
