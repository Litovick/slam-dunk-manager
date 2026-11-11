import type { Character, Theme } from "@/game/types";
import { cn } from "@/lib/utils";

const toneClass: Record<Character["tone"], string> = {
  primary: "bg-primary text-primary-foreground",
  ink: "bg-ink text-foreground",
  orange: "bg-ball text-ink",
  court: "bg-court-dark text-foreground",
  muted: "bg-muted-foreground text-foreground",
};

export function Portrait({ c, mood, active }: { c: Character; mood: "neutral" | "good" | "bad"; active: boolean }) {
  const face = mood === "good" ? "^ ▽ ^" : mood === "bad" ? "︶ ︿ ︶" : "• _ •";
  if (c.image)
    return (
      <div className={cn("relative transition-all duration-300", active ? "z-10 scale-105 opacity-100" : "scale-95 opacity-70 brightness-75", mood === "bad" && active && "grayscale-[40%]")}>
        <img src={c.image} alt={c.name} width={768} height={1024} className="h-[38vh] max-h-[420px] min-h-[200px] w-auto object-contain drop-shadow-[0_8px_0_var(--ink)]" />
        {active && mood !== "neutral" && <span className="absolute right-0 top-2 text-4xl">{mood === "good" ? "✨" : "💢"}</span>}
      </div>
    );
  return (
    <div className={cn("flex flex-col items-center transition-all duration-300", active ? "scale-105 opacity-100" : "scale-95 opacity-60")}>
      <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-4 border-ink bg-card text-lg font-bold text-card-foreground shadow-lg md:h-28 md:w-28">
        <span>{face}</span>
      </div>
      <div className={cn("-mt-2 flex h-24 w-32 flex-col items-center justify-center rounded-t-3xl border-4 border-ink md:h-28 md:w-36", toneClass[c.tone])}>
        <span className="font-display text-xs tracking-widest opacity-80">SHOHOKU</span>
        <span className="font-display text-4xl leading-none">{c.number ?? "M"}</span>
      </div>
    </div>
  );
}

export function Backdrop({ theme, bg, children }: { theme: Theme; bg: string; children?: React.ReactNode }) {
  const b = theme.backgrounds[bg];
  const evening = bg === "evening";
  return (
    <div key={bg} className="animate-scene absolute inset-0 overflow-hidden">
      {b?.image ? (
        <img src={b.image} alt={b.label} className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <>
          <div className={cn("absolute inset-x-0 top-0 h-[58%]", evening ? "bg-court-dark" : "bg-ink")}>
            <div className="absolute inset-x-0 top-6 flex justify-center">
              <div className="rounded border-4 border-foreground/70 bg-ink px-6 py-2 font-display text-2xl text-ball shadow-xl md:text-3xl">
                SHOHOKU <span className="text-foreground">00 : 00</span> GUEST
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 h-24 w-40 -translate-x-1/2 rounded-sm border-4 border-foreground/70 border-b-0">
              <div className="absolute -bottom-1 left-1/2 h-4 w-14 -translate-x-1/2 rounded-b-full border-4 border-primary" />
            </div>
            {evening && <div className="absolute inset-0 bg-ink/50" />}
          </div>
          <div className="absolute inset-x-0 bottom-0 h-[42%] bg-court">
            <div className="absolute inset-0 opacity-30 [background:repeating-linear-gradient(90deg,transparent_0_60px,var(--court-dark)_60px_62px)]" />
            <div className="absolute left-1/2 top-6 h-40 w-[60%] -translate-x-1/2 rounded-[50%] border-4 border-foreground/50" />
            {evening && <div className="absolute inset-0 bg-ink/50" />}
          </div>
          <div className="absolute left-4 top-4 rounded bg-primary px-3 py-1 font-display text-sm text-primary-foreground">{b?.label}</div>
        </>
      )}
      {children}
    </div>
  );
}
