import { describe, expect, it } from "vitest";
import { advance, choose, newGame, resolveEnding, type GameState } from "./engine";
import { slamdunk as t } from "./themes/slamdunk";

function play(pick: (qi: number) => number): GameState {
  let s: GameState = { ...newGame(t), phase: "question" };
  for (let i = 0; i < t.questions.length; i++) {
    expect(s.phase).toBe("question");
    s = advance(t, choose(t, s, pick(i)));
  }
  return s;
}
const best = t.questions.map((q) => q.choices.findIndex((c) => c.effects.trust === 10 && c.effects.judgment === 10));
const worst = t.questions.map((q) => q.choices.findIndex((c) => c.effects.trust === -10 && c.effects.judgment === -10));

describe("slamdunk rules", () => {
  it("starts both stats at 50", () => {
    expect(newGame(t).stats).toEqual({ trust: 50, judgment: 50 });
  });
  it("all best choices -> 100/100 happy", () => {
    const s = play((i) => best[i]);
    expect(s.phase).toBe("ending");
    expect(s.stats).toEqual({ trust: 100, judgment: 100 });
    expect(resolveEnding(t, s.stats).id).toBe("happy");
  });
  it("all worst choices -> sad, clamped at 0", () => {
    const s = play((i) => worst[i]);
    expect(s.stats).toEqual({ trust: 0, judgment: 0 });
    expect(resolveEnding(t, s.stats).id).toBe("sad");
  });
  it("exactly 80/80 is happy; one stat below 80 is sad", () => {
    expect(resolveEnding(t, { trust: 80, judgment: 80 }).id).toBe("happy");
    expect(resolveEnding(t, { trust: 100, judgment: 79 }).id).toBe("sad");
    expect(resolveEnding(t, { trust: 79, judgment: 100 }).id).toBe("sad");
  });
  it("no ending before question 10 and no double application", () => {
    let s: GameState = { ...newGame(t), phase: "question" };
    s = choose(t, s, best[0]);
    const again = choose(t, s, best[0]);
    expect(again).toBe(s);
    expect(s.stats.trust).toBe(60);
    for (let i = 0; i < 8; i++) s = choose(t, advance(t, s), 0);
    expect(s.phase).toBe("result");
    expect(s.qIndex).toBe(8);
  });
});
