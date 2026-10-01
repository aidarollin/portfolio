import type { Attachment, Role, StreamEvent } from "./types";

/**
 * Portfolio demo transport.
 *
 * The real AskPBot POSTs to /api/chat and reads NDJSON `StreamEvent`s back from
 * a Claude call. This yields the same event union from scripted replies, so
 * `usePBot`'s event switch — and every component below it — runs unchanged.
 * Nothing leaves the browser.
 */

type Outbound = { role: Role; content: string; image?: Attachment };

const STARTERS: Record<string, string> = {
  "explain photosynthesis simply": `Think of a leaf as a tiny **solar-powered kitchen** 🌿

1. **Ingredients in** — carbon dioxide from the air, water from the roots.
2. **Power on** — chlorophyll (the green stuff) soaks up sunlight.
3. **Food out** — the plant makes **glucose** to grow, and lets out **oxygen** as a bonus.

In one line: \`6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂\`

Want me to quiz you on it?`,

  "give me 5 ideas for a science project": `Here are five that look great on a display board 🐼

1. **Which drink rots teeth fastest?** Soak eggshells in cola, juice and water for a week.
2. **DIY water filter** — sand, gravel and charcoal in a bottle. Test how clear it gets.
3. **Do plants grow toward music?** Two pots, one playing music, measure daily.
4. **Best paper-plane design** — fold three styles and record flight distance.
5. **Lemon battery** — how many lemons does it take to light an LED?

Tell me your grade and I'll suggest which one fits best.`,

  "what is the pythagorean theorem?": `In any **right-angled triangle**, the square of the longest side equals the sum of the squares of the other two:

\`a² + b² = c²\`

where **c** is the hypotenuse (the side opposite the right angle).

Some whole-number examples to check:
- **3, 4, 5** → 9 + 16 = 25 ✓
- **5, 12, 13** → 25 + 144 = 169 ✓
- **8, 15, 17** → 64 + 225 = 289 ✓

Try one: if a = 6 and b = 8, what's c?`,

  "help me plan a study timetable": `Let's build one you'll actually stick to 📅

- **Mon** · Maths, practice questions · 45 min
- **Tue** · Science, notes + diagrams · 45 min
- **Wed** · Languages, vocab review · 30 min
- **Thu** · Maths, a past-year paper · 60 min
- **Fri** · Light review, then rest · 20 min

**Tips that make it work**
- Study in **25-minute blocks** with 5-minute breaks.
- Put your hardest subject when you're most awake.
- End each session by writing *one thing you learned*.

Which subjects should I swap in for yours?`,
};

function pickReply(outbound: Outbound[]): { text: string; usesTool: boolean } {
  const last = outbound[outbound.length - 1];
  const q = last.content.trim().toLowerCase().replace(/\s+/g, " ");

  if (last.image) {
    return {
      usesTool: false,
      text: `Thanks for the picture${last.image.name ? ` (*${last.image.name}*)` : ""}! 🐼

This is the **portfolio demo**, so I can't actually look at it. In the real AskPBot the image goes to Claude's vision model and I'd answer about what's in it.`,
    };
  }

  const starter = STARTERS[q];
  if (starter) return { text: starter, usesTool: false };

  if (/\b(time|date|day is it|today)\b/.test(q)) {
    const now = new Date().toLocaleString("en-GB", { weekday: "long", day: "numeric", month: "long", hour: "numeric", minute: "2-digit" });
    return { usesTool: true, text: `It's **${now}** where you are. ⏰\n\n(I used my \`get_current_time\` tool for that.)` };
  }
  if (/^(hi|hello|hey|hai|assalamualaikum)\b/.test(q)) {
    return { usesTool: false, text: "Hello! 👋 What would you like to learn today? Pick a suggestion or ask me anything." };
  }
  if (/who (made|built|created) you|about you|who are you/.test(q)) {
    return {
      usesTool: false,
      text: "I'm **PBot**, Pandai's panda study buddy 🐼. This demo lives in **Aida's portfolio**: the same UI as the real AskPBot, with scripted replies instead of a live model.",
    };
  }
  if (/\b6\b.*\b8\b|\bc ?= ?10\b|^10$/.test(q)) {
    return { usesTool: false, text: "**Correct!** 6² + 8² = 36 + 64 = 100, and √100 = **10**. 🎉" };
  }
  if (/quiz/.test(q)) {
    return {
      usesTool: false,
      text: "Quick one: which gas do plants **release** during photosynthesis?\n\n- A) Carbon dioxide\n- B) Oxygen\n- C) Nitrogen\n\nType your answer!",
    };
  }
  if (/^(b|oxygen|b\)? ?oxygen)$/.test(q)) {
    return { usesTool: false, text: "**Yes!** Oxygen is the by-product. Carbon dioxide is what the plant takes in. 🌱" };
  }

  return {
    usesTool: false,
    text: `Good question! This is the **portfolio demo** of AskPBot, so my replies are scripted rather than generated.

In the real app your message streams to **Claude** and comes back word by word, just like this one did. Try one of the suggestions, or ask me *what time it is* to see the tool-use phase. 🐼`,
  };
}

function wait(ms: number, signal: AbortSignal) {
  return new Promise<void>((resolve, reject) => {
    if (signal.aborted) return reject(new DOMException("Aborted", "AbortError"));
    const t = window.setTimeout(resolve, ms);
    signal.addEventListener("abort", () => {
      window.clearTimeout(t);
      reject(new DOMException("Aborted", "AbortError"));
    }, { once: true });
  });
}

const reduceMotion = () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

export async function* demoStream(outbound: Outbound[], signal: AbortSignal): AsyncGenerator<StreamEvent> {
  const started = performance.now();
  const { text, usesTool } = pickReply(outbound);
  const fast = reduceMotion();

  yield { type: "status", value: "thinking" };
  await wait(fast ? 150 : 650 + Math.random() * 400, signal);

  if (usesTool) {
    yield { type: "status", value: "tool" };
    yield { type: "tool_use", name: "get_current_time" };
    await wait(fast ? 100 : 700, signal);
  }

  yield { type: "status", value: "generating" };
  const ttftMs = Math.round(performance.now() - started);

  // Token-ish chunks: a word plus its trailing whitespace, sometimes two.
  const pieces = text.match(/\S+\s*/g) ?? [text];
  for (let i = 0; i < pieces.length; ) {
    const take = fast ? pieces.length : 1 + (Math.random() < 0.35 ? 1 : 0);
    yield { type: "text", value: pieces.slice(i, i + take).join("") };
    i += take;
    if (!fast) await wait(18 + Math.random() * 32, signal);
  }

  yield {
    type: "done",
    usage: { inputTokens: 0, outputTokens: 0, cacheReadTokens: 0, cacheCreationTokens: 0 },
    latencyMs: Math.round(performance.now() - started),
    ttftMs,
    stopReason: "end_turn",
    truncated: false,
  };
}
