/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { Play, Lock, Music2, Share2, Info, Send } from "lucide-react";
import { Background } from "./components/Background";
import { Modal } from "./components/Modal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleWatchNow = () => {
    setIsLoading(true);
    // Add a slight delay for better UX as requested
    setTimeout(() => {
      window.open("https://youtu.be/tf9RgEqdKaQ?si=gVSydQOD1sG6rk6f", "_blank");
      setIsLoading(false);
    }, 800);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between px-6 py-12">
      <Background />

      {/* Top Navigation / Music Icon */}
      <nav className="w-full max-w-7xl flex justify-between items-center mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2 text-white/40 text-xs tracking-widest uppercase font-semibold"
        >
          <Info size={14} />
          <span>Exclusive Preview</span>
        </motion.div>
        
        <motion.button
          id="music-toggle"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1 }}
          className="p-3 bg-white/5 border border-white/10 rounded-full text-white/60 hover:text-white transition-colors"
        >
          <Music2 size={20} />
        </motion.button>
      </nav>

      {/* Main Content */}
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 flex flex-col items-center justify-center text-center max-w-2xl w-full"
      >
        <motion.div variants={itemVariants} className="space-y-8">
          {/* Logo Area */}
          <div className="flex flex-col items-center space-y-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-20 h-20 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-neon-blue/20 blur-xl rounded-full animate-pulse" />
              <div className="relative w-16 h-16 bg-glass border border-neon-blue/30 rounded-2xl flex items-center justify-center transform rotate-12">
                <Send id="logo-icon" className="text-neon-blue -translate-x-0.5 -translate-y-0.5" size={32} />
              </div>
            </motion.div>

            <div className="space-y-3">
              <motion.h1
                id="main-logo"
                className="text-7xl md:text-8xl font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/20 filter drop-shadow-[0_0_30px_rgba(0,242,255,0.4)]"
              >
                TELERAM
              </motion.h1>
              <motion.p
                id="tagline"
                className="text-lg md:text-xl text-neon-blue font-semibold tracking-[0.2em] uppercase"
              >
                Watch Exclusive Videos Instantly
              </motion.p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col items-center gap-6 pt-8 w-full max-w-sm mx-auto">
            {/* Primary Watch Button with Rotating Border */}
            <div className="relative w-full p-[2px] rounded-2xl border-glow-blue">
              <motion.button
                id="watch-now-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWatchNow}
                disabled={isLoading}
                className="relative w-full py-5 bg-[#0a0a0a] text-white font-extrabold text-xl rounded-[14px] flex items-center justify-center space-x-3 group transition-all"
              >
                <div className="absolute inset-0 bg-neon-blue/5 group-hover:bg-neon-blue/10 transition-colors rounded-[14px]" />
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-neon-blue/20 border-t-neon-blue rounded-full"
                  />
                ) : (
                  <>
                    <div className="bg-neon-blue p-1.5 rounded-full text-black">
                      <Play id="play-icon" size={18} fill="currentColor" />
                    </div>
                    <span className="glow-blue">Watch Video Now</span>
                  </>
                )}
              </motion.button>
            </div>

            {/* Secondary Lock Button with Rotating Border */}
            <div className="relative w-full p-[2px] rounded-2xl border-glow-purple">
              <motion.button
                id="unlock-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsModalOpen(true)}
                className="relative w-full py-4 bg-[#0a0a0a] text-white/90 font-bold rounded-[14px] flex items-center justify-center space-x-2 transition-all"
              >
                <div className="absolute inset-0 bg-neon-purple/5 hover:bg-neon-purple/10 transition-colors rounded-[14px]" />
                <Lock id="lock-icon" className="text-neon-purple" size={18} />
                <span className="glow-purple">Unlock / Subscribe</span>
              </motion.button>
            </div>
          </div>

          {/* Social Stats / Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-4 pt-12"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-white/10 border-2 border-[#030303] flex items-center justify-center text-[10px] font-bold">
                  {i === 1 ? "U1" : i === 2 ? "U2" : "U3"}
                </div>
              ))}
            </div>
            <p className="text-white/40 text-sm font-medium">
              Join <span className="text-white">12.4k+</span> active viewers
            </p>
          </motion.div>
        </motion.div>
      </motion.main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5"
      >
        <p className="text-white/20 text-xs font-medium tracking-wider">
          © 2026 TELERAM. ALL RIGHTS RESERVED.
        </p>
        
        <div className="flex items-center space-x-6 text-white/40 hover:text-white transition-colors">
          <button id="share-btn" className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest">
            <Share2 size={14} />
            <span>Share Page</span>
          </button>
        </div>
      </motion.footer>

      {/* Unlock Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Global CSS for the loading pulse or other small bits if needed */}
      <style>{`
        #watch-now-btn {
          animation: pulse-glow 3s infinite;
        }
        @keyframes pulse-glow {
          0% { box-shadow: 0 0 10px rgba(0, 242, 255, 0.2); }
          50% { box-shadow: 0 0 30px rgba(0, 242, 255, 0.4); }
          100% { box-shadow: 0 0 10px rgba(0, 242, 255, 0.2); }
        }
      `}</style>
    </div>
  );
}
