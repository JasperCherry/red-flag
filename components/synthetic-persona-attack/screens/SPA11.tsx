"use client";

import { useRouter } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion } from "framer-motion";

export default function Screen11Final({}: { courseId: string }) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col overflow-hidden">
      <ScreenProgress current={11} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-20 pb-12 flex flex-col items-center text-center">
        
        {/* Course-Specific Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-[#1c2434]">Identity Defender</h1>
          <p className="text-[#334155] mt-4 text-lg leading-relaxed max-w-md mx-auto">
            You have completed the <span className="text-slate-900 font-semibold underline decoration-blue-500">Synthetic Persona Attack</span> module.
          </p>
        </motion.div>

        {/* Visual Focus: The Analysis Result */}
        <div className="relative w-full flex items-center justify-center mb-16">
          <div className="absolute w-72 h-72 bg-slate-200 rounded-full blur-[120px] opacity-30" />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="bg-[#1c2434] border-[1px] border-white/10 rounded-[2.5rem] p-10 shadow-2xl flex flex-col items-center gap-6">
              {/* Scan / Identification Icon */}
              <div className="relative">
                <div className="text-6xl grayscale">👤</div>
                <motion.div 
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-0.5 bg-red-500 shadow-[0_0_10px_red] z-20"
                />
              </div>
              
              <div className="space-y-2">
                <p className="text-white font-mono text-xs uppercase tracking-[0.3em]">Status</p>
                <p className="text-green-400 font-bold text-xl uppercase tracking-wider">Identity Defender</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Completion Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white border border-slate-200 p-6 rounded-3xl mb-10 shadow-sm"
        >
          <p className="text-base text-[#334155] leading-relaxed">
            From visual artifacts in remote interviews to social engineering in internal chats&mdash;you now know the signs of a <strong>Deepfake Candidate</strong>.
          </p>
        </motion.div>

        {/* Final Redirection */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="w-full max-w-sm mt-auto"
        >
          <button
            onClick={() => router.push("/")}
            className="w-full bg-[#1c2434] hover:bg-black text-white font-bold py-5 rounded-2xl transition-all shadow-lg active:scale-95 text-lg"
          >
            Return to Dashboard
          </button>
        </motion.div>

      </div>
    </div>
  );
}