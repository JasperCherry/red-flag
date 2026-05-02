import Link from "next/link";
import LinkedInShareButton from "@/components/LinkedInShareButton";

export default function SelectionPage() {
  return (
    <div className="min-h-screen bg-[#f1f5f9] flex flex-col">
      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-black text-[#1c2434]">Courses</h1>
          <LinkedInShareButton />
        </div>

        <div className="flex flex-col gap-5">
          <Link href="/course/anatomy-of-a-scam/1" className="group block">
            <div className="bg-white border-2 border-[#e2e8f0] rounded-2xl p-8 shadow-[0px_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_20px_-4px_rgb(0_0_0_/_0.12)] hover:border-[#145bb3] transition-all duration-300">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="w-14 h-14 bg-[#145bb3] rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#1c2434] mb-3 group-hover:text-[#145bb3] transition-colors">
                The Anatomy of a Scam
              </h3>
              <p className="text-base text-[#334155] leading-relaxed mb-4">
                Break down the theatrical script every attacker uses — the Pretext, the Hook, and the Trap. Learn to see every suspicious interaction as a performance to evaluate, not a task to complete.
              </p>

              <p className="flex items-center gap-1.5 text-sm font-semibold text-[#145bb3] mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                </svg>
                Social Engineering
              </p>

              <div className="flex items-center gap-2 text-[#145bb3] font-bold text-base group-hover:text-[#1c78e9] transition-colors">
                Start Course
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </Link>

          <Link href="/course/synthetic-persona-attack/1" className="group block">
            <div className="bg-white border-2 border-[#e2e8f0] rounded-2xl p-8 shadow-[0px_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_20px_-4px_rgb(0_0_0_/_0.12)] hover:border-[#145bb3] transition-all duration-300">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="w-14 h-14 bg-[#145bb3] rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#1c2434] mb-3 group-hover:text-[#145bb3] transition-colors">
                The &ldquo;Synthetic Persona&rdquo; Attack
              </h3>
              <p className="text-base text-[#334155] leading-relaxed mb-4">
                Hackers now use AI to create entirely fake identities — complete with faces, social media histories, and professional portfolios. Learn how to spot deepfake candidates during remote interviews and identify fake LinkedIn recruiters before they become insider threats.
              </p>

              <p className="flex items-center gap-1.5 text-sm font-semibold text-[#145bb3] mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                </svg>
                AI &amp; Insider Threats
              </p>

              <div className="flex items-center gap-2 text-[#145bb3] font-bold text-base group-hover:text-[#1c78e9] transition-colors">
                Start Course
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </Link>

          <Link href="/course/social-media-ooo-recon/1" className="group block">
            <div className="bg-white border-2 border-[#e2e8f0] rounded-2xl p-8 shadow-[0px_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_20px_-4px_rgb(0_0_0_/_0.12)] hover:border-[#145bb3] transition-all duration-300">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="w-14 h-14 bg-[#145bb3] rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0016.803 15.803zM13.5 10.5h-6" />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#1c2434] mb-3 group-hover:text-[#145bb3] transition-colors">
                Social Media &amp; OOO Recon
              </h3>
              <p className="text-base text-[#334155] leading-relaxed mb-4">
                Your &ldquo;Out of Office&rdquo; auto-reply is a gift to a hacker. Learn how attackers harvest social media and absence signals to time impersonation scams — and how to share information without handing them a roadmap.
              </p>

              <p className="flex items-center gap-1.5 text-sm font-semibold text-[#145bb3] mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                </svg>
                OSINT &amp; Social Engineering
              </p>

              <div className="flex items-center gap-2 text-[#145bb3] font-bold text-base group-hover:text-[#1c78e9] transition-colors">
                Start Course
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
