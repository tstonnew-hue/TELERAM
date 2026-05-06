import { motion } from "motion/react";

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-[#030303]" />
      
      {/* Animated glow blobs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-neon-blue/20 rounded-full blur-[120px]"
      />
      
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-neon-purple/20 rounded-full blur-[140px]"
      />

      {/* Digital particles (simulated with CSS circles) */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 2000 - 1000, 
            y: Math.random() * 2000 - 1000,
            opacity: Math.random() * 0.5
          }}
          animate={{
            y: ["-20px", "20px"],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
          }}
          className="absolute bg-white/20 rounded-full blur-[1px]"
        />
      ))}
      
      {/* Subtle Scanline effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-30" />
    </div>
  );
}
