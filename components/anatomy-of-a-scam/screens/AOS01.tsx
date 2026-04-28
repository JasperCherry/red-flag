"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import ScreenProgress from "@/components/ScreenProgress";

export default function Screen01Ambush({ courseId }: { courseId: string }) {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(10); // 10 second pressure

  const handleChoice = (choice: string) => {
    router.push(`/course/${courseId}/2?result=${choice}`);
  };

  useEffect(() => {
    if (timeLeft <= 0) router.push(`/course/${courseId}/2?result=timeout`);
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, router, courseId]);


  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col transition-colors duration-500">
      <div className="opacity-20">
        <ScreenProgress current={1} />
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-red-500">
          
          {/* Header Area */}
          <div className="bg-red-500 p-4 flex items-center gap-3">
            <div className="bg-white p-1 rounded-full">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-white font-bold text-lg">Security Alert</h2>
          </div>

          {/* Message Body */}
          <div className="p-8 space-y-6 text-center">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">Session Expired</h3>
              <p className="text-slate-600">
                Unauthorized access attempt detected from <span className="font-mono font-bold text-slate-800">IP: 192.168.1.104</span>. 
                Your account has been locked for safety.
              </p>
            </div>

            <div className="bg-slate-100 py-3 rounded-lg border border-slate-200">
              <p className="text-xs text-slate-500 uppercase tracking-tighter font-semibold">Automatic Logout in</p>
              <p className="text-3xl font-black text-red-600">{timeLeft}s</p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleChoice("click")}
                className="w-full bg-[#145bb3] hover:bg-[#11468a] text-white font-bold py-4 rounded-xl transition-all transform active:scale-95 shadow-lg"
              >
                Re-authenticate Now
              </button>
              <button
                onClick={() => handleChoice("ignore")}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-500 font-semibold py-3 rounded-xl transition-colors text-sm"
              >
                Ignore and Close
              </button>
            </div>
          </div>

          <div className="bg-slate-50 p-4 border-t border-slate-100 text-[10px] text-slate-400 text-center uppercase tracking-widest font-medium">
            Standard Identity Protocol 4.21.0
          </div>
        </div>
      </div>

      <div className="pb-10 text-center">
        <p className="text-slate-500 text-xs opacity-50">Notice something off? Decisions have consequences.</p>
      </div>
    </div>
  );
}