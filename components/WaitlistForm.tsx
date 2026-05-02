"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("https://forteye-api-d99c30a1d9b8.herokuapp.com/api/utils/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="mt-10 bg-white border-2 border-[#e2e8f0] rounded-2xl p-8">
      {status === "success" ? (
        <div className="text-center py-4">
          <p className="text-2xl font-bold text-[#1c2434] mb-2">You&apos;re on the list.</p>
          <p className="text-base text-[#334155]">We&apos;ll let you know when new courses drop.</p>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-bold text-[#1c2434] mb-1">More courses coming soon</h2>
          <p className="text-base text-[#334155] mb-6">Sign up to get notified when new modules are available.</p>
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="email"
              required
              placeholder="Your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl border-2 border-[#e2e8f0] text-base text-[#1c2434] placeholder:text-[#8a99af] focus:outline-none focus:border-[#145bb3] transition-colors"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 bg-[#145bb3] hover:bg-[#1c78e9] text-white font-bold text-base rounded-xl transition-colors disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Notify me"}
            </button>
          </form>
          {status === "error" && (
            <p className="mt-3 text-sm text-red-600 font-medium">Something went wrong. Please try again.</p>
          )}
        </>
      )}
    </div>
  );
}
