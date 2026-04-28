"use client";

import { useRouter } from "next/navigation";
import ScreenProgress from "@/components/ScreenProgress";

export default function Screen04({ courseId }: { courseId: string }) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ScreenProgress current={4} />
      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-14 pb-24 flex flex-col gap-6">
        <div>
          <p className="text-xs font-semibold text-[#8a99af] uppercase tracking-widest mb-1">Screen 4</p>
          <h1 className="text-3xl font-bold text-[#1c2434]">Placeholder</h1>
          <p className="text-[#64748b] mt-2">Content coming soon.</p>
        </div>
        <button
          onClick={() => router.push(`/course/${courseId}/5`)}
          className="self-start bg-[#145bb3] hover:bg-[#1c78e9] text-white font-bold px-8 py-4 rounded-2xl transition-all"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
