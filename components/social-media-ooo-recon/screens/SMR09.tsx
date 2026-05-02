"use client";

import { useRouter } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";
import { motion } from "framer-motion";

export default function SMR09Analysis({ courseId }: { courseId: string }) {
  const router = useRouter();

  const takeaways = [
    {
      title: "Context is Currency",
      desc: "Attackers don't need your password to start. They just need your location, your schedule, and one colleague's name.",
      icon: "💎"
    },
    {
      title: "The Vague-Reply Rule",
      desc: "Set your 'Out of Office' to be specific for internal staff and vague for everyone else. Never name your hotel or your coverage.",
      icon: "🛡️"
    },
    {
      title: "Verify Out-of-Band",
      desc: "If a request feels urgent or unusual, switch to a trusted channel. Call their office extension. Never trust a personal device claim.",
      icon: "📞"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ScreenProgress current={9} />

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-12 pb-24 flex flex-col">
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Phase D: Recap</p>
          <h1 className="text-3xl font-bold text-[#1c2434]">Course Summary</h1>
          <p className="text-[#64748b] mt-4">
            Alex Morgan&apos;s &ldquo;Austin Trip&rdquo; could have been a disaster. Here is how we prevent the roadmap from being built:
          </p>
        </motion.div>

        {/* Takeaways: What we learned */}
        <div className="space-y-4 mb-10">
          {takeaways.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-slate-200 p-6 rounded-[2rem] flex items-center gap-6 shadow-sm"
            >
              <div className="text-3xl">{item.icon}</div>
              <div>
                <h4 className="font-bold text-[#1c2434] text-sm">{item.title}</h4>
                <p className="text-xs text-[#64748b] leading-relaxed mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before / After */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-10 space-y-3"
        >
          <p className="text-xs font-bold text-[#8a99af] uppercase tracking-widest mb-4">OOO Reply: Before &amp; After</p>

          <div className="bg-red-50 border border-red-100 rounded-[1.5rem] p-5">
            <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-2">Dangerous</p>
            <p className="text-xs text-red-900 leading-relaxed italic">
              &ldquo;I&apos;m out of office attending the Global Innovation Summit at the Waterford Hotel in Austin, TX until Friday. My colleague Sarah Jenkins is covering — reach her at s.jenkins@company.com.&rdquo;
            </p>
          </div>

          <div className="bg-green-50 border border-green-100 rounded-[1.5rem] p-5">
            <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest mb-2">Safe</p>
            <p className="text-xs text-green-900 leading-relaxed italic">
              &ldquo;I&apos;m currently out of office and will respond when I return. For urgent matters, please contact your usual internal team channel.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Final Navigation */}
        <motion.div className="mt-auto">
          <button
            onClick={() => router.push(`/course/${courseId}/10`)}
            className="w-full bg-[#1c2434] hover:bg-black text-white font-bold py-5 rounded-2xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3"
          >
            Finish Course
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>

      </div>
    </div>
  );
}