"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion } from "framer-motion";
import { Suspense } from "react";

function ResolutionContent({ courseId }: { courseId: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const choice = searchParams.get("choice");

  const isSecure = choice === "secure";

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ScreenProgress current={8} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-10 pb-20 flex flex-col justify-center">
        
        {isSecure ? (
          /* SUCCESS PATH */
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Threat Neutralized</h2>
            <div className="bg-white border border-slate-200 p-6 rounded-[2rem] shadow-sm text-left mb-8">
              <p className="text-base text-[#334155] leading-relaxed">
                By directing &ldquo;Sarah&rdquo; to official channels, you broke the attacker&apos;s plan. Never give data to someone you can&apos;t verify in person or through official systems.
                <br /><br />
                Security logs later revealed &ldquo;Sarah Jenkins&rdquo; never actually joined the company&mdash;it was a synthetic persona designed to harvest bank details from helpful employees.
              </p>
            </div>
          </motion.div>
        ) : (
          /* FAILURE PATH */
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm animate-pulse">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Security Breach</h2>
            <div className="bg-red-50 border border-red-100 p-6 rounded-[2rem] text-left mb-8">
              <p className="text-red-800 text-base leading-relaxed font-medium">
                You just sent sensitive data over an unencrypted chat to an unverified identity.
              </p>
              <p className="text-red-700 text-sm mt-3 leading-relaxed">
                &ldquo;Sarah&rdquo; used your &ldquo;helpful&rdquo; manual update to divert direct deposits to an offshore account. This is how 70% of synthetic identity theft succeeds—through kindness, not code.
              </p>
            </div>
            <button 
              onClick={() => router.push(`/course/${courseId}/7`)}
              className="text-red-600 font-bold text-base hover:underline mb-4 block"
            >
              ← Try the interaction again
            </button>
          </motion.div>
        )}

        <button
          onClick={() => router.push(`/course/${courseId}/9`)}
          className="w-full bg-[#1c2434] hover:bg-[#2d3a4f] text-white font-bold py-5 rounded-2xl transition-all shadow-lg active:scale-95"
        >
          {isSecure ? "See the Analysis" : "Learn from this"}
        </button>
      </div>
    </div>
  );
}

// Wrap in Suspense because useSearchParams is used
export default function Screen08Resolution({ courseId }: { courseId: string }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8fafc]" />}>
      <ResolutionContent courseId={courseId} />
    </Suspense>
  );
}