"use client";

import { useRouter } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Screen05LabVisualFix({ courseId }: { courseId: string }) {
  const router = useRouter();
  const [found, setFound] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // Artifact lives in the top-right area of the image
  const artifact = { top: 0, left: 38, width: 30, height: 12 };

  const handleFindGlitch = () => {
    setFound(true);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col text-white">
      <ScreenProgress current={5} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-10 pb-20 flex flex-col justify-between">

        <div className="mb-6">
          <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-1">Phase C: Visual Lab</p>
          <h2 className="text-2xl font-bold">Uncanny Valley</h2>
          <p className="text-slate-300 text-base mt-2 leading-relaxed">
            AI-generated faces often &ldquo;fail&rdquo; at the edges. One detail on this subject&apos;s right side (your left) is a major red flag. <strong>Find and tap the generative artifact.</strong>
          </p>
        </div>

        <div className="relative aspect-[4/5] w-full max-w-sm mx-auto bg-slate-800 rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl">
          <img
            src="/images/fake-person-1.png"
            alt="AI Subject"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transformOrigin: `${artifact.left + artifact.width / 2}% ${artifact.top + artifact.height / 2}%`,
              transform: found ? 'scale(2.2)' : 'scale(1)',
              transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />

          {/* Tap zone */}
          {!found && (
            <button
              onClick={handleFindGlitch}
              className="absolute z-20"
              style={{
                top: `${artifact.top}%`,
                left: `${artifact.left}%`,
                width: `${artifact.width}%`,
                height: `${artifact.height}%`,
              }}
              aria-label="Clickable Artifact Area"
            />
          )}

          {/* Annotation ring + label */}
          <AnimatePresence>
            {found && (
              <>
                {/* Highlight ring over the artifact */}
                <motion.div
                  initial={{ opacity: 0, scale: 1.3 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  className="absolute z-30 border-2 border-red-400 rounded-sm"
                  style={{
                    top: `${artifact.top}%`,
                    left: `${artifact.left}%`,
                    width: `${artifact.width}%`,
                    height: `${artifact.height}%`,
                    boxShadow: '0 0 10px rgba(248,113,113,0.6)',
                  }}
                />

                {/* Label tag */}
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="absolute z-30 bg-red-500 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                  style={{
                    top: `${artifact.top + artifact.height + 1}%`,
                    left: `${artifact.left}%`,
                  }}
                >
                  Edge rendering failure
                </motion.div>

                {/* Bottom explanation */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute bottom-0 left-0 right-0 z-30 bg-[#0f172a]/90 backdrop-blur-sm px-6 py-5 text-center"
                >
                  <p className="text-white font-bold text-sm mb-1">Background bleeding through hairline</p>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    The AI failed to separate fine hair from the background. Real cameras capture this cleanly.
                  </p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-blue-400 text-[10px] font-mono mt-3"
                  >
                    ARTIFACT CONFIRMED
                  </motion.p>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-6">
          {!found ? (
            <div className="text-center h-14 flex items-center justify-center">
              <button
                onClick={() => setShowHint(true)}
                className="text-slate-500 text-xs hover:text-white transition-colors"
              >
                {showHint ? "Hint: Inspect the perimeter. AI struggles with messy details like fine hair against complex backgrounds." : "Need a hint?"}
              </button>
            </div>
          ) : (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              onClick={() => router.push(`/course/${courseId}/6`)}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 rounded-2xl transition-all shadow-lg active:scale-95"
            >
              Next Verification
            </motion.button>
          )}
        </div>

      </div>
    </div>
  );
}
