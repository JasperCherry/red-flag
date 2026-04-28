import Link from "next/link";

export default function SelectionPage() {
  return (
    <div className="min-h-screen bg-[#f1f5f9] flex flex-col">
      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#64748b] mb-4">Your Courses</p>

        <Link href="/course/anatomy-of-a-scam/1" className="group block max-w-2xl">
          <div className="bg-white border border-[#e2e8f0] rounded-2xl p-8 shadow-[0px_1px_3px_rgba(0,0,0,0.12)] hover:shadow-[0px_8px_13px_-3px_rgb(0_0_0_/_0.07)] hover:border-[#145bb3]/30 transition-all duration-300">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="w-12 h-12 bg-[#145bb3]/10 rounded-xl flex items-center justify-center border border-[#145bb3]/20 shrink-0">
                <svg className="w-6 h-6 text-[#145bb3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#1c2434] mb-2 group-hover:text-[#145bb3] transition-colors">
              The Anatomy of a Scam
            </h3>
            <p className="text-sm text-[#64748b] leading-relaxed mb-6">
              Break down the theatrical script every attacker uses — the Pretext, the Hook, and the Trap. Learn to see every suspicious interaction as a performance to evaluate, not a task to complete.
            </p>

            <div className="flex items-center gap-4 text-xs text-[#8a99af] mb-6">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                10 screens
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                </svg>
                Social Engineering
              </span>
            </div>

            <div className="flex items-center gap-2 text-[#145bb3] font-semibold text-sm group-hover:text-[#1c78e9] transition-colors">
              Start Course
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </Link>
      </main>
    </div>
  );
}
