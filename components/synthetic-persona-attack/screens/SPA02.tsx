"use client";

import { useRouter } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion } from "framer-motion";

export default function Screen02Insight({ courseId }: { courseId: string }) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ScreenProgress current={2} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-14 pb-24 flex flex-col gap-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-1">
            Phase B: The Logic
          </p>
          <h1 className="text-3xl font-bold text-[#1c2434]">The "Ghost" in the Machine</h1>
          <p className="text-[#64748b] mt-3 text-lg leading-relaxed">
            "Sarah" is a **Synthetic Persona**. She was built using a blend of stolen data and Generative AI to bypass the standard "Stranger Danger" instincts of HR managers.
          </p>
        </motion.div>

        {/* The Core Insight Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-[#1c2434] mb-4 flex items-center gap-2">
              <span className="text-2xl">🧠</span> Why it Works
            </h3>
            <div className="space-y-4">
              <p className="text-slate-600 leading-relaxed">
                Humans are biologically hardwired to trust **symmetry** and **eye contact**. Deepfake models are specifically trained to replicate these "trust triggers," making us ignore technical red flags.
              </p>
              <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                <p className="text-sm text-blue-800 font-medium">
                  The Goal: To get "hired," gain VPN access, and move laterally through the company network as an authorized employee.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Fact Grid */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1c2434] p-6 rounded-3xl text-white"
          >
            <p className="text-blue-400 font-bold text-3xl mb-1">90%</p>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Detection Gap</p>
            <p className="text-[10px] text-slate-500 mt-2 leading-tight">Traditional background checks often miss AI-generated IDs.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm"
          >
            <p className="text-red-500 font-bold text-3xl mb-1">$$$</p>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Potential Loss</p>
            <p className="text-[10px] text-slate-500 mt-2 leading-tight">One "insider" can export terabytes of proprietary data.</p>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="pt-4"
        >
          <button
            onClick={() => router.push(`/course/${courseId}/3`)}
            className="w-full bg-[#145bb3] hover:bg-[#1c78e9] text-white font-bold py-5 rounded-2xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3"
          >
            Spot the Red Flags
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </motion.div>

      </div>
    </div>
  );
}