import { useEffect, useState } from "react";

export function useTypewriter(text: string, speed = 28) {
  const [n, setN] = useState(0);
  useEffect(() => {
    setN(0);
    const id = setInterval(() => setN((v) => (v >= text.length ? (clearInterval(id), v) : v + 1)), speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return { shown: text.slice(0, n), done: n >= text.length, finish: () => setN(text.length) };
}

let ctx: AudioContext | null = null;
export function beep(kind: "click" | "good" | "bad", muted: boolean) {
  if (muted || typeof window === "undefined") return;
  try {
    ctx ??= new AudioContext();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    const f: [number, number] = kind === "good" ? [660, 990] : kind === "bad" ? [220, 140] : [520, 520];
    o.type = kind === "bad" ? "sawtooth" : "square";
    o.frequency.setValueAtTime(f[0], ctx.currentTime);
    o.frequency.linearRampToValueAtTime(f[1], ctx.currentTime + 0.15);
    g.gain.setValueAtTime(0.05, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.2);
    o.connect(g).connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime + 0.2);
  } catch {
    /* audio unavailable */
  }
}
