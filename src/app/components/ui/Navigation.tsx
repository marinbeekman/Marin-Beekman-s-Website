import { Link, useLocation } from "react-router";
import { motion } from "motion/react";

export function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "home" },
    { path: "/about", label: "about" },
    { path: "/portfolio", label: "work" },
    { path: "/contact", label: "contact" },
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-[#FFF9F5]/90 backdrop-blur-md border-b-2 border-[#1a1a1a]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-[#EC7A5E] to-[#F3A6A6] rounded-full"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute inset-0 w-12 h-12 border-3 border-[#1a1a1a] rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <span className="text-2xl font-['Unbounded'] tracking-tight" style={{ fontWeight: 700 }}>
                YOUR NAME
              </span>
            </motion.div>
          </Link>
          
          <div className="flex items-center gap-2">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              
              return (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    className="relative px-5 py-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-[#EC7A5E] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span 
                      className={`relative z-10 font-['Space_Grotesk'] uppercase tracking-wider transition-colors ${
                        isActive ? 'text-white' : 'text-[#1a1a1a] hover:text-[#EC7A5E]'
                      }`}
                      style={{ fontWeight: 600, fontSize: '14px' }}
                    >
                      {item.label}
                    </span>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
