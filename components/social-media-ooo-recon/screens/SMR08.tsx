"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion } from "framer-motion";
import { Suspense } from "react";

function ResolutionContent({ courseId }: { courseId: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const choice = searchParams.get("choice");

  const results = [
    {
      id: "0",
      status: "Compromised",
      title: "The Engagement Trap",
      feedback: "Even by asking 'which project,' you confirmed you are listening. Attackers use this to build more elaborate lies. You didn't give the passcode, but you stayed on their hook.",
      isSuccess: false,
      emoji: "⚠️"
    },
    {
      id: "1",
      status: "Risk Detected",
      title: "The 'Later' Loophole",
      feedback: "Postponing the request gives the attacker a window to try a different angle or impersonate someone else. You didn't leak data, but you didn't shut down the threat either.",
      isSuccess: false,
      emoji: "⏳"
    },
    {
      id: "2",
      status: "Threat Neutralized",
      title: "The 'Out-of-Band' Win",
      feedback: "Perfect. By moving the conversation to a known, official extension, you forced the attacker to abandon the play. Hackers hate direct, verified channels.",
      isSuccess: true,
      emoji: "🛡️"
    }
  ];

  const currentResult = results.find(r => r.id === choice) || results[0];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ScreenProgress current={8} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-12 pb-24 flex flex-col">
        
        {/* Result Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`p-8 rounded-[3rem] shadow-xl text-center mb-10 ${currentResult.isSuccess ? 'bg-white border-2 border-green-500' : 'bg-white border-2 border-red-100'}`}
        >
          <div className="text-6xl mb-6">{currentResult.emoji}</div>
          <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-2 ${currentResult.isSuccess ? 'text-green-600' : 'text-red-500'}`}>
            {currentResult.status}
          </p>
          <h2 className="text-3xl font-black text-[#1c2434] mb-4">{currentResult.title}</h2>
          <p className="text-slate-600 leading-relaxed max-w-sm mx-auto italic">
            &ldquo;{currentResult.feedback}&rdquo;
          </p>
        </motion.div>

        {/* The "Why it Matters" Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#1c2434] p-8 rounded-[2.5rem] text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h4 className="text-blue-400 font-bold uppercase text-[10px] tracking-widest mb-2">The Breakdown</h4>
            <p className="text-sm leading-relaxed text-slate-300">
              In Austin, you were overwhelmed. The attacker knew it because you told them you were at a summit. They used <span className="text-white font-bold">Sarah&apos;s name</span> to bypass your logic and used a <span className="text-white font-bold">Personal Device</span> excuse to avoid company security.
            </p>
          </div>
          <div className="absolute -right-4 -bottom-4 text-white/5 text-8xl font-black italic select-none">
            RECON
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-auto pt-10"
        >
          {!currentResult.isSuccess && (
            <button
              onClick={() => router.push(`/course/${courseId}/7`)}
              className="w-full mb-3 bg-white border-2 border-slate-200 text-slate-500 font-bold py-4 rounded-2xl transition-all hover:bg-slate-50 active:scale-95"
            >
              Try Again
            </button>
          )}
          <button
            onClick={() => router.push(`/course/${courseId}/9`)}
            className="w-full bg-[#1c2434] hover:bg-black text-white font-bold py-5 rounded-2xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3"
          >
            Review Lessons
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>

      </div>
    </div>
  );
}

export default function SMR08Resolution({ courseId }: { courseId: string }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8fafc]" />}>
      <ResolutionContent courseId={courseId} />
    </Suspense>
  );
}