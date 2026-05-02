"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion, AnimatePresence } from "framer-motion";

export default function Screen06LabTechnical({ courseId }: { courseId: string }) {
  const router = useRouter();
  const [isInspected, setIsInspected] = useState(false);
  const [decision, setDecision] = useState<"none" | "trust" | "report">("none");

  const handleInspect = () => setIsInspected(true);

  const handleFinalDecision = (type: "trust" | "report") => {
    setDecision(type);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ScreenProgress current={6} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-14 pb-24 flex flex-col gap-8">
        <div>
          <p className="text-sm font-bold text-[#475569] uppercase tracking-widest">
            Phase C: Technical Lab
          </p>
          <h1 className="text-3xl font-bold text-[#1c2434]">The Inspector</h1>
          <p className="text-base text-[#334155] mt-2">
            Attackers hide behind &ldquo;Display Names.&rdquo; Use the inspector tool to reveal the true sender before you take action.
          </p>
        </div>

        {/* Email Client Simulation */}
        <div className="bg-white border border-[#e2e8f0] rounded-3xl shadow-xl overflow-hidden">
          {/* Email Header */}
          <div className="p-6 border-b border-[#f1f5f9] bg-[#fcfdfe]">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  JD
                </div>
                <div>
                  <h3 className="font-bold text-[#1c2434] text-base">Jane Doe (HR Director)</h3>
                  <p className="text-xs text-[#475569]">To: You • 2 mins ago</p>
                </div>
              </div>
              
              {!isInspected && (
                <button 
                  onClick={handleInspect}
                  className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1.5 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors uppercase tracking-tight"
                >
                  🔍 Inspect Sender
                </button>
              )}
            </div>

            {/* Hidden Technical Data Reveal */}
            <AnimatePresence>
              {isInspected && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="bg-slate-900 rounded-xl p-4 mb-2 overflow-hidden"
                >
                  <div className="flex flex-col gap-2 font-mono text-[11px]">
                    <div className="flex justify-between border-b border-slate-800 pb-1">
                      <span className="text-slate-500 uppercase">Return-Path:</span>
                      <span className="text-red-400">jane.doe@hr-portal-secure.net</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-1">
                      <span className="text-slate-500 uppercase">Reply-To:</span>
                      <span className="text-red-400">admin@urgent-hr-request.com</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 uppercase">Security:</span>
                      <span className="text-amber-500">Unverified (No SPF/DKIM)</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Email Body */}
          <div className="p-8 space-y-4">
            <h2 className="text-lg font-bold text-[#1c2434]">Urgent: Payroll Adjustment</h2>
            <p className="text-base text-[#334155] leading-relaxed">
              Hello, <br /><br />
              We noticed a discrepancy in your bank details for this month&apos;s payroll. To ensure your salary is processed correctly, please verify your account info via the attached PDF.
            </p>
            <div className="flex items-center gap-3 p-3 border border-slate-100 rounded-xl bg-slate-50 w-fit">
              <div className="bg-red-100 text-red-600 p-2 rounded-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" /></svg>
              </div>
              <span className="text-xs font-medium text-slate-600">Payroll_Update.pdf.exe</span>
            </div>
          </div>
        </div>

        {/* Action Center */}
        <div className="space-y-4">
          <p className="text-center text-sm font-bold text-[#475569] uppercase tracking-widest">Your Final Decision:</p>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleFinalDecision("trust")}
              className={`py-4 rounded-2xl font-bold border-2 transition-all ${decision === 'trust' ? 'bg-red-50 border-red-500 text-red-600' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'}`}
            >
              Trust & Open
            </button>
            <button
              onClick={() => handleFinalDecision("report")}
              className={`py-4 rounded-2xl font-bold border-2 transition-all ${decision === 'report' ? 'bg-green-50 border-green-500 text-green-600' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'}`}
            >
              Report Phishing
            </button>
          </div>
        </div>

        {/* Feedback Logic */}
        <AnimatePresence>
          {decision !== "none" && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`p-6 rounded-3xl border-2 ${decision === 'report' ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}
            >
              <div className="flex gap-4">
                <span className="text-2xl">{decision === 'report' ? '🎖️' : '⚠️'}</span>
                <div>
                  <h4 className={`font-bold ${decision === 'report' ? 'text-green-800' : 'text-red-800'}`}>
                    {decision === 'report' ? "Perfect Execution!" : "You fell for the Pretext."}
                  </h4>
                  <p className={`text-base mt-1 leading-relaxed ${decision === 'report' ? 'text-green-700' : 'text-red-700'}`}>
                    {decision === 'report' 
                      ? "You spotted the double extension (.pdf.exe) and the fake domain. Jane Doe would never use a @hr-portal-secure.net address." 
                      : "The .exe at the end of the filename means this is a program, not a document. Clicking this would have compromised your machine."}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Continue Button */}
        <button
          disabled={decision === "none"}
          onClick={() => router.push(`/course/${courseId}/7`)}
          className={`w-full py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 ${decision !== 'none' ? 'bg-[#145bb3] text-white shadow-xl' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
        >
          Proceed to Branching Chat
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </button>
      </div>
    </div>
  );
}