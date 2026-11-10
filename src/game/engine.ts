import type { Stats, Theme } from "./types";

export type Phase = "title" | "howto" | "opening" | "question" | "result" | "ending";

export type GameState = {
  phase: Phase;
  qIndex: number;
  stats: Stats;
  /** questionId -> chosen index; prevents double application */
  answers: Record<string, number>;
  lastDelta: Stats | null;
};

export function initialStats(theme: Theme): Stats {
  return Object.fromEntries(theme.stats.map((s) => [s.id, s.initial]));
}

export function newGame(theme: Theme): GameState {
  return { phase: "title", qIndex: 0, stats: initialStats(theme), answers: {}, lastDelta: null };
}

export function applyEffects(theme: Theme, stats: Stats, effects: Stats): Stats {
  const next: Stats = { ...stats };
  for (const def of theme.stats) {
    const v = (stats[def.id] ?? def.initial) + (effects[def.id] ?? 0);
    next[def.id] = Math.min(def.max, Math.max(def.min, v));
  }
  return next;
}

export function choose(theme: Theme, state: GameState, choiceIndex: number): GameState {
  if (state.phase !== "question") return state;
  const q = theme.questions[state.qIndex];
  if (!q || q.id in state.answers) return state;
  const choice = q.choices[choiceIndex];
  if (!choice) return state;
  return {
    ...state,
    phase: "result",
    stats: applyEffects(theme, state.stats, choice.effects),
    answers: { ...state.answers, [q.id]: choiceIndex },
    lastDelta: choice.effects,
  };
}

export function advance(theme: Theme, state: GameState): GameState {
  if (state.phase !== "result") return state;
  const next = state.qIndex + 1;
  if (next >= theme.questions.length) return { ...state, phase: "ending", lastDelta: null };
  return { ...state, phase: "question", qIndex: next, lastDelta: null };
}

export function resolveEnding(theme: Theme, stats: Stats) {
  return theme.endings.find((e) => e.condition(stats)) ?? theme.endings[theme.endings.length - 1];
}
