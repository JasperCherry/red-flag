"use client";

import { useRouter } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion } from "framer-motion";

export default function Screen04ProTip({ courseId }: { courseId: string }) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ScreenProgress current={4} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-14 pb-24 flex flex-col justify-between">
        
        <div className="flex flex-col gap-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-1">
              Phase B: The Shield
            </p>
            <h1 className="text-3xl font-bold text-[#1c2434]">The &ldquo;Profile&rdquo; Test</h1>
          </motion.div>

          {/* Scrolly-telling Content */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border-l-4 border-blue-600 p-6 rounded-r-[2rem] shadow-sm"
            >
              <h3 className="font-bold text-[#1c2434] mb-2">Force a 90° Turn</h3>
              <p className="text-sm text-[#64748b] leading-relaxed">
                Most consumer-grade AI models are trained on frontal photos. When a person turns their head completely to the side, the AI struggles to map the nose and ears, causing the &ldquo;mask&rdquo; to flicker or disappear.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900 text-white p-8 rounded-[2.5rem] relative overflow-hidden"
            >
              <div className="relative z-10">
                <p className="text-blue-400 font-mono text-[10px] uppercase tracking-widest mb-4">Tactical Command</p>
                <p className="text-xl font-medium leading-snug">
                  &ldquo;Hey, Sarah—could you just tilt your head to the left for a second? I want to check the lighting on your side.&rdquo;
                </p>
              </div>
              {/* Decorative Pulse */}
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center text-xs text-slate-400 font-medium px-4"
            >
              If they refuse or the video &ldquo;glitches&rdquo; out, terminate the call immediately.
            </motion.p>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="pt-10"
        >
          <button
            onClick={() => router.push(`/course/${courseId}/5`)}
            className="w-full bg-[#145bb3] hover:bg-[#1c78e9] text-white font-bold py-6 rounded-[2rem] transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3"
          >
            Enter the Simulation
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </button>
        </motion.div>

      </div>
    </div>
  );
}