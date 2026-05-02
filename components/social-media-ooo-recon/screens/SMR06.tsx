"use client";

import { useRouter } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function SMR06LabTechnical({ courseId }: { courseId: string }) {
  const router = useRouter();
  const [inspected, setInspected] = useState({ sender: false, link: false });
  
  const allInspected = inspected.sender && inspected.link;

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ScreenProgress current={6} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-10 pb-24 flex flex-col">
        
        <div className="mb-8">
          <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">The Lab: Technical Check</p>
          <h1 className="text-2xl font-bold text-[#1c2434]">The &ldquo;Waterford&rdquo; Trap</h1>
          <p className="text-base text-[#334155] mt-2 leading-relaxed">
            Moments after Alex&apos;s post, this &ldquo;automated&rdquo; email arrives. Click the <span className="text-blue-600 font-bold">Sender</span> and the <span className="text-blue-600 font-bold">Button</span> to inspect the technical metadata.
          </p>
        </div>

        {/* Email Client Simulation */}
        <div className="bg-white border border-slate-200 rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col">
          {/* Email Header */}
          <div className="p-6 border-b border-slate-100 bg-slate-50/40">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-[#475569] uppercase tracking-widest">Priority Message</span>
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-[#475569] w-12">From:</span>
                <button 
                  onClick={() => setInspected(prev => ({ ...prev, sender: true }))}
                  className={`text-sm font-bold px-2 py-1 rounded-lg transition-all text-left ${inspected.sender ? 'bg-red-100 text-red-700 ring-2 ring-red-200' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}`}
                >
                  Waterford Guest Services <span className="font-normal opacity-60">{"<concierge@waterford-austin-stay.net>"}</span>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-[#475569] w-12">To:</span>
                <span className="text-sm text-[#334155]">Alex Morgan</span>
              </div>
            </div>
          </div>

          {/* Email Body */}
          <div className="p-8">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Action Required: Summit Wi-Fi Login</h2>
            <p className="text-base text-[#334155] leading-relaxed mb-6">
              Welcome to Austin and the <span className="font-bold">Waterford Hotel</span>. Our records show you are attending the <span className="font-bold">Global Innovation Summit</span>. 
              <br /><br />
              To access the high-speed Summit Network, please re-verify your corporate account:
            </p>

            <button 
              onClick={() => setInspected(prev => ({ ...prev, link: true }))}
              className={`w-full py-5 rounded-2xl font-bold text-sm transition-all mb-4 ${inspected.link ? 'bg-red-600 text-white' : 'bg-blue-600 text-white shadow-lg'}`}
            >
              Verify & Connect Now
            </button>
            
            <AnimatePresence>
              {inspected.link && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-red-50 p-4 rounded-xl border border-red-100"
                >
                  <p className="text-xs font-mono text-red-600 break-all text-center font-bold">
                    DESTINATION: https://summit-verify-login.xyz/auth/oauth
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Actionable Feedback */}
        <div className="mt-8 min-h-32">
          {allInspected ? (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#1c2434] p-6 rounded-[2rem] text-white flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">🔍</span>
                <h4 className="font-bold text-sm uppercase tracking-wider text-red-400">Threat Identified</h4>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                The sender uses <span className="text-white font-mono">.net</span> (fake) instead of the hotel&apos;s <span className="text-white font-mono">.com</span>. The login link points to a <span className="text-white font-mono">.xyz</span> domain designed to steal your corporate credentials.
              </p>
              <button 
                onClick={() => router.push(`/course/${courseId}/7`)}
                className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-900/20"
              >
                Continue to Branching Chat
              </button>
            </motion.div>
          ) : (
            <div className="text-center py-10 border-2 border-dashed border-slate-200 rounded-[2rem]">
              <p className="text-sm text-[#475569] font-medium italic">
                Inspect the Sender address and the Button link to find the fraud.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}