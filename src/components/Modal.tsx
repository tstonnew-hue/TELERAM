import { motion, AnimatePresence } from "motion/react";
import { X, Bell, MessageSquare } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ isOpen, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden"
            >
              <button
                id="close-modal"
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X id="x-icon" size={20} className="text-white/60" />
              </button>

              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-16 h-16 bg-neon-purple/10 rounded-full flex items-center justify-center border border-neon-purple/20">
                  <Bell id="bell-icon" className="text-neon-purple animate-bounce" size={32} />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-display font-bold text-white">Subscribe to unlock more content!</h3>
                  <div className="relative group overflow-hidden p-6 bg-glass rounded-2xl border-neon-blue/30 shadow-[0_0_20px_rgba(0,242,255,0.1)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/10 opacity-50" />
                    <div className="relative z-10">
                      <p className="text-xl font-bold text-neon-blue leading-relaxed drop-shadow-sm">
                        লিংক ইউটিউব ভিডিও কমেন্টে লিংক দেওয়া আছে।
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full p-4 bg-white/5 rounded-xl border border-white/5 flex items-start space-x-3 text-left">
                  <MessageSquare id="comment-icon" className="text-neon-purple shrink-0 mt-0.5" size={20} />
                  <p className="text-sm text-white/60">
                    Join our community to access exclusive premium content instantly. Check the comments for the link!
                  </p>
                </div>

                <button
                  id="modal-cta"
                  onClick={onClose}
                  className="w-full py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-black font-bold rounded-xl hover:opacity-90 transition-opacity"
                >
                  Got it!
                </button>
              </div>

              {/* Decorative glows */}
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-neon-blue/20 blur-[60px] rounded-full" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-purple/20 blur-[60px] rounded-full" />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
