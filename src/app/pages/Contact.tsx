import { FloatingCircle, RetroGrid, RetroBlob, RetroStar, WavyLine } from "../components/RetroShapes";
import { Send, Instagram, Twitter, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const socialLinks = [
    { icon: Instagram, label: "@yourusername", color: "#F3A6A6", href: "#" },
    { icon: Twitter, label: "@yourusername", color: "#6BB1AD", href: "#" },
    { icon: Linkedin, label: "Your Name", color: "#EC7A5E", href: "#" },
  ];

  return (
    <div className="min-h-screen pb-20 font-['Space_Grotesk'] relative overflow-hidden">
      <RetroGrid />
      <FloatingCircle color="#F3A6A6" size="400px" top="10%" left="5%" delay={0} />
      <FloatingCircle color="#6BB1AD" size="350px" top="50%" left="75%" delay={1.5} />
      
      <div className="max-w-7xl mx-auto px-6 py-12 relative">
        <RetroBlob color="#E8ECB9" className="top-20 right-20 opacity-20" />
        <RetroStar color="#EC7A5E" size={100} className="absolute top-10 left-20 opacity-20" />
        
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-7xl font-['Unbounded'] mb-6"
            style={{ fontWeight: 900 }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="bg-gradient-to-r from-[#EC7A5E] via-[#F3A6A6] to-[#6BB1AD] bg-clip-text text-transparent">
              LET'S TALK
            </span>
          </motion.h1>
          <WavyLine color="#EC7A5E" className="w-64 mx-auto mb-6" />
          <p className="text-xl text-[#1a1a1a]/70 font-['DM_Mono'] uppercase tracking-widest">
            ✦ Get in Touch ✦
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div 
            className="relative z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="bg-white p-10 border-4 border-[#1a1a1a] shadow-[12px_12px_0px_0px_rgba(26,26,26,1)]">
              <h2 className="text-3xl font-['Unbounded'] mb-8" style={{ fontWeight: 800 }}>
                SEND A MESSAGE 💌
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#1a1a1a] mb-2 font-['Space_Grotesk'] uppercase tracking-wide" style={{ fontWeight: 600, fontSize: '14px' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3 bg-[#FFF9F5] border-2 border-[#1a1a1a] focus:border-[#EC7A5E] outline-none transition-colors"
                    placeholder="Jane Doe"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-[#1a1a1a] mb-2 font-['Space_Grotesk'] uppercase tracking-wide" style={{ fontWeight: 600, fontSize: '14px' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3 bg-[#FFF9F5] border-2 border-[#1a1a1a] focus:border-[#EC7A5E] outline-none transition-colors"
                    placeholder="hello@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-[#1a1a1a] mb-2 font-['Space_Grotesk'] uppercase tracking-wide" style={{ fontWeight: 600, fontSize: '14px' }}>
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-5 py-3 bg-[#FFF9F5] border-2 border-[#1a1a1a] focus:border-[#EC7A5E] outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-[#EC7A5E] text-white px-8 py-4 font-['Space_Grotesk'] uppercase tracking-wider border-2 border-[#1a1a1a] shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] flex items-center justify-center gap-3"
                  style={{ fontWeight: 700 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "8px 8px 0px 0px rgba(26,26,26,1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Send className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Socials */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div 
              className="bg-gradient-to-br from-[#EC7A5E] to-[#F3A6A6] p-8 border-3 border-[#1a1a1a] shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.2) 10px, rgba(255,255,255,0.2) 20px)",
                }}
              />
              <Mail className="w-12 h-12 text-white mb-4 relative z-10" strokeWidth={2.5} />
              <h3 className="text-2xl font-['Unbounded'] text-white mb-2 relative z-10" style={{ fontWeight: 700 }}>
                EMAIL ME
              </h3>
              <p className="text-white/90 text-lg relative z-10">
                hello@yourname.com
              </p>
            </motion.div>

            <motion.div 
              className="bg-[#E8ECB9] p-8 border-3 border-[#1a1a1a] shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]"
              whileHover={{ scale: 1.02 }}
            >
              <MessageCircle className="w-12 h-12 text-[#1a1a1a] mb-4" strokeWidth={2.5} />
              <h3 className="text-2xl font-['Unbounded'] text-[#1a1a1a] mb-2" style={{ fontWeight: 700 }}>
                QUICK RESPONSE
              </h3>
              <p className="text-[#1a1a1a]/80 text-lg">
                I usually reply within 24 hours. Can't wait to hear from you!
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-[#6BB1AD] to-[#7F9F9F] p-8 border-3 border-[#1a1a1a] shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.2) 10px, rgba(255,255,255,0.2) 20px)",
                }}
              />
              
              <h3 className="text-2xl font-['Unbounded'] text-white mb-6 relative z-10" style={{ fontWeight: 700 }}>
                FOLLOW ME
              </h3>
              <div className="space-y-4 relative z-10">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="flex items-center gap-4 bg-white/20 hover:bg-white/30 p-4 border-2 border-white/50 transition-colors group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div 
                        className="w-12 h-12 flex items-center justify-center border-2 border-[#1a1a1a]"
                        style={{ backgroundColor: social.color }}
                      >
                        <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                      </div>
                      <span className="text-white font-['Space_Grotesk'] text-lg" style={{ fontWeight: 600 }}>
                        {social.label}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto bg-white p-12 border-4 border-[#1a1a1a] shadow-[16px_16px_0px_0px_rgba(26,26,26,1)] text-center relative">
            <motion.div
              className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#F3A6A6] px-6 py-2 border-3 border-[#1a1a1a]"
              animate={{ rotate: [0, -3, 3, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="font-['Unbounded'] text-white text-xl" style={{ fontWeight: 800 }}>
                ✦
              </span>
            </motion.div>
            
            <motion.div
              className="text-5xl mb-6"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💬
            </motion.div>
            
            <h3 className="text-4xl font-['Unbounded'] mb-6 leading-tight" style={{ fontWeight: 900 }}>
              <span className="bg-gradient-to-r from-[#EC7A5E] to-[#6BB1AD] bg-clip-text text-transparent">
                "GOOD VIBES & GREAT PROJECTS START WITH A CONVERSATION"
              </span>
            </h3>
            <WavyLine color="#F3A6A6" className="w-56 mx-auto mb-6" />
            <p className="text-[#1a1a1a]/70 text-lg font-['DM_Mono'] uppercase tracking-widest">
              Let's make something cool together
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
