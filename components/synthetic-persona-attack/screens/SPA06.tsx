"use client";

import { useRouter } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Screen06LabTechnical({ courseId }: { courseId: string }) {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [dynamicDate, setDynamicDate] = useState("");

  // Set the "Joined" date to 2 months ago relative to the current user's date
  useEffect(() => {
    const d = new Date();
    d.setMonth(d.getMonth() - 2);
    setDynamicDate(d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }));
  }, []);

  const options = [
    { 
      id: 'url', 
      label: "linkedin.com/in/sarah-j-99a21-882", 
      isFake: false,
      feedback: "Messy URLs are actually common. Check the profile age instead."
    },
    { 
      id: 'email', 
      label: "s.jenkins@outlook.com", 
      isFake: false, 
      feedback: "Standard personal email. Not a definitive red flag."
    },
    { 
      id: 'date', 
      label: `Joined LinkedIn: ${dynamicDate}`, 
      isFake: true,
      feedback: "Correct! A 'Senior' candidate with a profile created 8 weeks ago is a classic synthetic sign."
    },
  ];

  const handleVerify = (id: string, isFake: boolean) => {
    setSelected(id);
    if (isFake) {
      setIsCorrect(true);
      setTimeout(() => {
        router.push(`/course/${courseId}/7`);
      }, 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ScreenProgress current={6} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-10 pb-20 flex flex-col">
        
        <div className="mb-8">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Phase C: Verification</p>
          <h2 className="text-2xl font-bold text-[#1c2434]">The Digital Paperwork</h2>
          <p className="text-slate-600 text-sm mt-2">
            Synthetic personas have "shallow" digital histories. Inspect Sarah's profile details. Which one is the **dead giveaway?**
          </p>
        </div>

        {/* Profile Dossier Card */}
        <div className="bg-white border border-slate-200 rounded-[2.5rem] shadow-xl overflow-hidden mb-6">
          <div className="bg-slate-50 p-6 border-b border-slate-100 flex items-center gap-4">
             <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <img 
                  src="/images/fake-person-1.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
             </div>
             <div>
                <h3 className="font-bold text-[#1c2434]">Sarah Jenkins</h3>
                <p className="text-[10px] text-slate-500 font-mono uppercase tracking-tight">Verified Candidate ID: 4492-X</p>
             </div>
          </div>

          <div className="p-6 space-y-3">
            {options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleVerify(opt.id, opt.isFake)}
                disabled={isCorrect}
                className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex justify-between items-center ${
                  selected === opt.id 
                    ? (opt.isFake ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') 
                    : 'border-slate-100 bg-slate-50 hover:border-blue-200'
                }`}
              >
                <span className={`text-sm font-medium ${selected === opt.id && !opt.isFake ? 'text-red-700' : 'text-slate-700'}`}>
                  {opt.label}
                </span>
                {selected === opt.id && (
                  <span className="text-lg">{opt.isFake ? '✅' : '❌'}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="h-20"> {/* Fixed height to prevent layout shift */}
          <AnimatePresence mode="wait">
            {selected && (
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`p-4 rounded-2xl text-center text-sm font-medium ${
                  isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
              >
                {options.find(o => o.id === selected)?.feedback}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}