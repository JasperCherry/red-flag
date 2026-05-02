"use client";

import { useRouter } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion } from "framer-motion";

export default function SMR03RedFlags({ courseId }: { courseId: string }) {
  const router = useRouter();

  const redFlags = [
    {
      label: "The False Urgency",
      text: "Hackers use the 'Quick-Send' pressure to stop you from checking the sender's actual address or calling Sarah directly.",
      icon: "⏱️"
    },
    {
      label: "Public Information",
      text: "The message only uses details you made public (Tokyo, Friday, Sarah). It lacks 'Internal' context a real colleague would know.",
      icon: "🌍"
    },
    {
      label: "The Channel Shift",
      text: "Moving from an official email to a 'quick Slack' or personal text is a classic tactic to bypass company security filters.",
      icon: "📲"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ScreenProgress current={3} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-12 pb-24 flex flex-col">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="mb-12"
        >
          <p className="text-sm font-bold text-red-600 uppercase tracking-widest mb-1">Visual Cues</p>
          <h1 className="text-3xl font-bold text-[#1c2434]">Spotting the Echo</h1>
          <p className="text-base text-[#334155] mt-4">
            A social engineering attack often feels like an &ldquo;echo&rdquo; of your own information. If it sounds familiar, be suspicious.
          </p>
        </motion.div>

        {/* Scrolly-style Flag Cards */}
        <div className="space-y-4">
          {redFlags.map((flag, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-slate-200 p-6 rounded-[2rem] shadow-sm flex items-start gap-5 hover:border-red-100 transition-colors"
            >
              <div className="text-2xl w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-100">
                {flag.icon}
              </div>
              <div>
                <h3 className="font-bold text-[#1c2434] mb-1">{flag.label}</h3>
                <p className="text-base text-[#334155] leading-relaxed">
                  {flag.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pro-Tip Teaser */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 p-6 bg-slate-900 rounded-[2rem] text-center"
        >
          <p className="text-blue-400 font-mono text-xs uppercase tracking-widest mb-2">Coming Up Next</p>
          <p className="text-white font-medium">How to fix your OOO reply so this never happens again.</p>
        </motion.div>

        {/* CTA */}
        <motion.div className="mt-auto pt-10">
          <button
            onClick={() => router.push(`/course/${courseId}/4`)}
            className="w-full bg-[#1c2434] hover:bg-black text-white font-bold py-5 rounded-2xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3"
          >
            Go to Pro-Tip
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>

      </div>
    </div>
  );
}