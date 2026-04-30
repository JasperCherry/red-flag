# Red Flag — Agent & Developer Reference

## What this project is

**Red Flag** is a security awareness training web app for non-technical corporate employees. It teaches modern digital threats through interactive, scenario-based courses — not slides. Each course puts the user inside a realistic scenario and forces a decision under pressure, then debriefs them on what just happened and why.

Target audience: regular employees with no security background. Every screen must be legible without jargon.

---

## Tech Stack

| Concern | Library / Version |
|---|---|
| Framework | Next.js **16.2.4** (App Router) |
| React | 19.2.4 |
| Styling | Tailwind CSS **v4** (`@import "tailwindcss"` — no config file) |
| Animation | Framer Motion 12 |
| Linter | ESLint 9 + `eslint-config-next` + `eslint-plugin-react-hooks` v7 |
| Font | Satoshi (variable, loaded via `@font-face` in `globals.css`) |
| TypeScript | 5 |

### Critical version notes

**Next.js 16 / React 19 are not what your training data knows.** Before writing any Next.js-specific code, read the relevant guide in `node_modules/next/dist/docs/`. APIs, conventions, and file structure differ from prior major versions. Heed deprecation notices.

**Tailwind v4** uses a continuous spacing scale — `h-50`, `w-72`, `gap-7` etc. are all valid. There is no `tailwind.config.js`. All theme tokens are defined inside `globals.css` under `@theme inline { ... }`.

**`eslint-plugin-react-hooks` v7** (React Compiler era) includes rules beyond the traditional two. Key ones to know:
- `react-hooks/exhaustive-deps` — all effect dependencies must be listed
- `react-hooks/rules-of-hooks` — hooks must be at the top level
- `set-state-in-effect` — synchronous `setState` calls directly in effect bodies are blocked. Fix: wrap in `setTimeout(() => fn(), 0)` with proper cleanup

---

## Project Structure

```
app/
  layout.tsx                          Root layout (metadata, font, globals)
  page.tsx                            Dashboard — lists all courses
  globals.css                         Tailwind v4 entry + brand tokens + Satoshi font
  course/[courseId]/[screen]/
    page.tsx                          Single route for all screens — resolves component from COURSES map

components/
  ScreenProgress.tsx                  Fixed top progress bar (filled segments = current screen)
  anatomy-of-a-scam/screens/          AOS01–AOS10
  synthetic-persona-attack/screens/   SPA01–SPA11
  social-media-ooo-recon/screens/     SMR01–SMR10

public/
  images/                             fake-person-1.png, hotel-badge.png
  fonts/                              Satoshi WOFF2/WOFF files
```

---

## Routing Architecture

Every screen in every course is served by one route: `/course/[courseId]/[screen]`.

`app/course/[courseId]/[screen]/page.tsx` holds a `COURSES` object — a map of `courseId → { screenNumber → Component }`. To add a screen or course, **register it in this map**. The page resolves the component and renders it, passing `courseId` as the only prop.

```ts
// Shape of COURSES
const COURSES: Record<string, Record<string, React.ComponentType<{ courseId: string }>>> = {
  "anatomy-of-a-scam": { "1": AOS01, "2": AOS02, ... },
  "synthetic-persona-attack": { "1": SPA01, ..., "11": SPA11 },
  "social-media-ooo-recon": { "1": SMR01, ..., "10": SMR10 },
};
```

Navigation between screens is always `router.push(`/course/${courseId}/${nextScreenNumber}`)`.

To pass state between screens (e.g. which choice the user made), use a query param: `router.push(`/course/${courseId}/2?choice=accept`)`. The receiving screen reads it with `useSearchParams()` — **always wrap in `<Suspense>`** when using `useSearchParams`.

---

## The 10-Screen Course Framework

Every course follows this structure. Screen count can vary (SPA has 11), but the beat order stays the same.

| # | Beat | Purpose | Mechanic |
|---|---|---|---|
| 1 | **Ambush / Hook** | Drop user into a live scenario with no preamble. Create pressure. | Timer countdown + binary choice (accept/deny) |
| 2 | **Core Insight / Debrief** | React to what just happened. Name the attack. Explain why it worked. | Branch heading based on `?choice=` param from Screen 1 |
| 3 | **Red Flags / Detection** | Give 3 concrete visual or behavioural signals to watch for. | Animated card list |
| 4 | **Pro-Tip / Final Lesson** | One actionable technique the user can use immediately. | Hero card + supporting callout |
| 5 | **Visual Lab** | Interactive tap-to-find on an image. Find the artifact/leak. | Image with hidden tap zone; reveals on correct tap |
| 6 | **Technical Lab** | Inspect metadata, sender details, or digital footprint. | Tap-to-inspect items; all must be inspected to unlock continue |
| 7 | **Branching Chat** | Simulate a real conversation. User picks a response. | Chat UI with 3 options; redirects to Screen 8 with `?choice=` |
| 8 | **Resolution** | Outcome of their Screen 7 choice. Right/wrong, explained. | Reads `?choice=` param; shows success or failure path |
| 9 | **Recap / Lessons** | Structured summary of 3–4 key lessons with icons. | Static scrollable cards |
| 10 | **Final Quiz OR Completion** | Assess retention (quiz) or award a badge (completion screen). | Per-question feedback quiz or shield/badge reward screen |

Courses with a quiz add a screen 11 for the completion badge.

---

## Existing Courses

### Course 1 — Anatomy of a Scam (`anatomy-of-a-scam`, AOS01–AOS10)
The theatrical model of a scam: Pretext → Hook → Trap. Scenario: a fake "IT urgent login" alert with a countdown. AOS07 introduces a secondary attack from a VP impersonator two hours later, reinforcing the Circuit Breaker technique from AOS04.

### Course 2 — Synthetic Persona Attack (`synthetic-persona-attack`, SPA01–SPA11)
AI-generated fake identities used in hiring. Scenario: a deepfake video call candidate "Sarah" requests an interview. Course covers visual detection cues, digital footprint checks, and social engineering inside a company. Has 11 screens (quiz on SPA10, badge on SPA11).

### Course 3 — Social Media & OOO Recon (`social-media-ooo-recon`, SMR01–SMR10)
Attackers harvest OOO auto-replies and social posts to time impersonation scams. Scenario: Alex Morgan posts from a conference; attackers use the data to send a spoofed hotel phishing email and impersonate a colleague. Ends with "Recon Defender" badge on SMR10.

---

## Component Patterns

### All screen components
```tsx
"use client";
export default function ScreenXX({ courseId }: { courseId: string }) { ... }
```
Every screen is a client component. The only prop is `courseId`.

### Reading query params (useSearchParams)
Always wrap in `<Suspense>`:
```tsx
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function Content({ courseId }: { courseId: string }) {
  const searchParams = useSearchParams();
  const choice = searchParams.get("choice");
  // ...
}

export default function ScreenXX({ courseId }: { courseId: string }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8fafc]" />}>
      <Content courseId={courseId} />
    </Suspense>
  );
}
```

### Timer + auto-redirect pattern
```tsx
const handleChoice = useCallback((type: 'accept' | 'deny') => {
  setChoice(type);
  setTimeout(() => router.push(`/course/${courseId}/2?choice=${type}`), 1200);
}, [router, courseId]);

useEffect(() => {
  if (choice !== null) return;
  if (timeLeft <= 0) {
    const t = setTimeout(() => handleChoice('deny'), 0); // async to satisfy set-state-in-effect rule
    return () => clearTimeout(t);
  }
  const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
  return () => clearTimeout(timer);
}, [timeLeft, choice, handleChoice]);
```

### Per-question quiz with feedback
Screen 10 in SPA is the reference implementation. Key structure:
- `selectedAnswer: number | null` state
- `handleAnswer` sets state and scores (does not advance)
- Explanation + coloured feedback card shown after answer
- `handleNext` button advances to next question or triggers results screen

### Inspect-to-unlock pattern (Labs)
Track which items have been inspected in a `useState` object, e.g. `{ sender: false, link: false }`. Derive `allInspected` as a boolean. Continue button only appears when `allInspected === true`. See SMR06 for reference.

### Branching chat pattern
Screen 7 offers 3 options, each navigates to Screen 8 with `?choice=0/1/2`. Screen 8 reads the param and renders the matching outcome from an `outcomes` array indexed by id. See SMR07 + SMR08 for reference.

---

## Styling Rules

### Brand tokens (defined in `globals.css` `@theme inline`)
| Token | Value | Use |
|---|---|---|
| `--color-primary` | `#145bb3` | Buttons, links, active states |
| `--color-primary-lt` | `#1c78e9` | Hover states |
| `--color-text` | `#1c2434` | Headings, primary text |
| `--color-body` | `#64748b` | Body copy |
| `--color-muted` | `#8a99af` | Labels, captions |
| `--color-bg` | `#f1f5f9` | Page background (light courses) |
| `--color-stroke` | `#e2e8f0` | Borders |

Use these as Tailwind classes — e.g. `bg-[#145bb3]` or directly as `bg-primary` if Tailwind resolves the token. Prefer the hex literals already used in existing files for consistency.

### Dark vs light screens
- **Dark screens** (`bg-[#0f172a]` or `bg-[#1e293b]`): SPA01 Ambush, SPA05 Visual Lab. Used to signal danger/urgency.
- **Light screens** (`bg-[#f8fafc]` or `bg-[#f1f5f9]`): All other screens. Default.

### Rounding
Cards and panels use large rounding: `rounded-[2rem]`, `rounded-[2.5rem]`, `rounded-[3rem]`. Buttons use `rounded-2xl`. This is intentional — keep it consistent.

### Typography
- Use `font-black` for badge/completion headings
- Use `font-bold` for card titles and CTAs
- Use `font-mono` for technical labels, IDs, status readouts
- Use `text-xs font-bold uppercase tracking-widest` for section eyebrows (labels above headings)

### JSX text rules
All special characters in JSX text nodes must be HTML-encoded. The ESLint rule `react/no-unescaped-entities` is enforced:
- `"` → `&ldquo;` / `&rdquo;`
- `'` in contractions → `&apos;`
- `&` → `&amp;`
- Bold text in JSX → `<strong>text</strong>` (never `**text**`)

---

## ESLint

Run: `npm run lint`

Zero errors is the standard. Warnings (currently 4 `@next/next/no-img-element` on image containers with complex layouts) are pre-existing and acceptable for now.

Do not use `// eslint-disable` comments. Fix the root cause instead.

---

## How to add a new course

1. Create the folder: `components/[course-slug]/screens/`
2. Create screen files following the 10-screen framework: `[PREFIX]01.tsx` through `[PREFIX]10.tsx`
3. Name all export functions clearly: e.g. `Screen01Ambush`, `SMR05LabVisual`
4. Import all screens in `app/course/[courseId]/[screen]/page.tsx`
5. Add the course to the `COURSES` map with the slug as the key
6. Add a course card to `app/page.tsx` with a `<Link>` to `/course/[slug]/1`

---

## How to add a new screen to an existing course

1. Create the component file in the correct `screens/` folder
2. Follow the naming convention: `[PREFIX][NN].tsx` (e.g. `AOS11.tsx`)
3. Import it in `app/course/[courseId]/[screen]/page.tsx`
4. Add it to the correct course map entry: `"11": AOS11`
5. Update the previous screen's `router.push` to point to the new screen number
6. Update `<ScreenProgress current={N} total={N} />` — pass `total` prop if screen count changes from 10

---

## ScreenProgress component

```tsx
<ScreenProgress current={3} />          // 10 segments by default
<ScreenProgress current={3} total={11} /> // for 11-screen courses
```

Fixed to the top of the viewport. Filled blue segments = screens completed. Always include it as the first element inside the page wrapper.
