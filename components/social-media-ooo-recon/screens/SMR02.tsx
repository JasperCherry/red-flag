"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion } from "framer-motion";
import { Suspense } from "react";

function InsightContent({ courseId }: { courseId: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const decision = searchParams.get("initialDecision");

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ScreenProgress current={2} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-12 pb-24 flex flex-col">
        
        {/* Feedback Header */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="mb-10 text-center"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold uppercase tracking-widest mb-4">
            Analysis
          </div>
          <h1 className="text-3xl font-bold text-[#1c2434]">
            {decision === 'unsafe' ? "You walked into the trap." : "You paused. Good."}
          </h1>
          <p className="text-[#64748b] mt-4 text-lg">
            That wasn&apos;t Sarah. It was a hacker using an <span className="text-slate-900 font-semibold">Information Roadmap</span> you provided.
          </p>
        </motion.div>

        {/* The Breakdown */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm"
          >
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-tight mb-6">How they built the attack:</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 font-bold text-xs border border-blue-100">1</div>
                <div>
                  <p className="text-sm font-bold text-slate-800">The &ldquo;Tokyo&rdquo; Leak</p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">By naming your location, you told the attacker you are in a different time zone, likely distracted, and potentially on insecure Wi-Fi.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 font-bold text-xs border border-blue-100">2</div>
                <div>
                  <p className="text-sm font-bold text-slate-800">The &ldquo;Friday&rdquo; Timeline</p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">You gave them a deadline. They know exactly how long they have to impersonate you before you return to the office.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 font-bold text-xs border border-blue-100">3</div>
                <div>
                  <p className="text-sm font-bold text-slate-800">The &ldquo;Sarah&rdquo; Target</p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">Providing a colleague&apos;s name gives the attacker a &ldquo;trusted&rdquo; identity to impersonate or target next.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5 }}
          className="mt-auto pt-10"
        >
          <button
            onClick={() => router.push(`/course/${courseId}/3`)}
            className="w-full bg-[#1c2434] hover:bg-black text-white font-bold py-5 rounded-2xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3"
          >
            Identify the Red Flags
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>

      </div>
    </div>
  );
}

export default function SMR02Insight({ courseId }: { courseId: string }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8fafc]" />}>
      <InsightContent courseId={courseId} />
    </Suspense>
  );
}