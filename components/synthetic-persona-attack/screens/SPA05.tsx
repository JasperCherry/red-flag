"use client";

import { useRouter } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Screen05LabVisualFix({ courseId }: { courseId: string }) {
  const router = useRouter();
  const [found, setFound] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // Define the normalized "glitch" coordinate area (0-100 scale).
  // This area is placed specifically over the problematic hair/background
  // area seen in the supplied image_0.png portrait.
  const glitchTarget = {
    top: 0, // Percentage from top
    right: 32, // Percentage from right
    width: 30, // Width percentage
    height: 12, // Height percentage
  };

  const handleFindGlitch = () => {
    setFound(true);
    // Short reward delay
    setTimeout(() => {
      router.push(`/course/${courseId}/6`);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col text-white">
      <ScreenProgress current={5} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-10 pb-20 flex flex-col justify-between">
        
        {/* Step 1: Instruct */}
        <div className="mb-6">
          <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Phase C: Visual Lab</p>
          <h2 className="text-2xl font-bold">Uncanny Valley</h2>
          <p className="text-slate-400 text-sm mt-2 leading-relaxed">
            AI-generated faces often "fail" at the edges. One detail on this subject's right side (your left) is a major red flag. **Find and tap the generative artifact.**
          </p>
        </div>

        {/* Step 2: Normalized Image Container */}
        <div className="relative aspect-[4/5] w-full max-w-sm mx-auto bg-slate-800 rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl">
          <img 
            src="/images/fake-person-1.png" // Points to image_0.png
            alt="AI Subject" 
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out ${
              found ? 'scale-125' : ''
            }`}
          />

          {/* The Hidden Glitch Target Zone */}
          {!found && (
            <button
              onClick={handleFindGlitch}
              className="absolute cursor-crosshair z-20 hover:border-blue-500/20 hover:border-2"
              style={{
                top: `${glitchTarget.top}%`,
                right: `${glitchTarget.right}%`,
                width: `${glitchTarget.width}%`,
                height: `${glitchTarget.height}%`,
              }}
              aria-label="Clickable Artifact Area"
            />
          )}

          {/* Success Overlay & Explanation */}
          <AnimatePresence>
            {found && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center z-30 bg-blue-900/40 backdrop-blur-md px-10 text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <svg className="w-16 h-16 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </motion.div>
                <p className="font-bold text-lg text-white mt-4">Glitch Detected!</p>
                <p className="text-blue-100 text-xs mt-1 leading-relaxed">
                  Look closely: The texture of the textured background is bleeding directly through the hairline.
                </p>
                <motion.p className="text-white/50 text-[10px] font-mono mt-4">
                  PROCEEDING TO NEXT VERIFICATION
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Step 3: Optional Hint */}
        <div className="h-14 mt-6">
          {!found && (
            <div className="text-center">
              <button 
                onClick={() => setShowHint(true)}
                className="text-slate-500 text-xs hover:text-white transition-colors"
              >
                {showHint ? "Hint: Inspect the perimeter. AI struggles with messy details like fine hair against complex backgrounds." : "Need a hint?"}
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}