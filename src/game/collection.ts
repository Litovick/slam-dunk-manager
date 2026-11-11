import type { GameState } from "./engine";
import type { Theme } from "./types";

export type EndingRecord = { endingId: string; unlockedAt: string };
export type EndingCollection = Record<string, EndingRecord>;

export const collectionKey = (themeId: string) => `game:collection:${themeId}`;

export function readCollection(themeId: string): EndingCollection {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(collectionKey(themeId));
    if (!raw) return {};
    const value: unknown = JSON.parse(raw);
    if (!value || typeof value !== "object" || Array.isArray(value)) return {};
    return Object.fromEntries(
      Object.entries(value).filter((entry): entry is [string, EndingRecord] => {
        const record = entry[1] as Partial<EndingRecord> | null;
        return !!record && typeof record.endingId === "string" && typeof record.unlockedAt === "string";
      }),
    );
  } catch {
    return {};
  }
}

export function unlockEnding(themeId: string, endingId: string): EndingCollection {
  const current = readCollection(themeId);
  if (current[endingId]) return current;
  const next = { ...current, [endingId]: { endingId, unlockedAt: new Date().toISOString() } };
  try { localStorage.setItem(collectionKey(themeId), JSON.stringify(next)); } catch { /* storage unavailable */ }
  return next;
}

export type CharacterReview = { id: string; title: string; comment: string };

export function characterReviews(state: Pick<GameState, "stats" | "answers">): CharacterReview[] {
  const trust = state.stats.trust ?? 50;
  const judgment = state.stats.judgment ?? 50;
  const answer = (question: string, index: number) => state.answers[question] === index;
  return [
    {
      id: "baekho", title: "강백호의 평가",
      comment: answer("q3", 2)
        ? "흥! 쉴 때도 있어야 진짜 천재지! 너, 제법인데?"
        : answer("q3", 0) ? "크하하! 역시 이 천재를 알아보는군! 그런데 다음엔 좀 말려 줘."
        : "나한테 그렇게 말하다니! 다음엔 이 천재의 마음도 좀 이해해 달라고!",
    },
    {
      id: "taewoong", title: "서태웅의 평가",
      comment: trust >= 80 ? "…팀을 잘 보고 있네. 수고했어." : "…나쁘진 않았어. 다음엔 경기 흐름을 더 봐.",
    },
    {
      id: "chisu", title: "채치수의 평가",
      comment: judgment >= 80 ? "냉정한 판단이 좋았다. 팀을 맡길 만하군."
        : "열정은 인정한다. 하지만 중요한 순간엔 더 신중해야 한다.",
    },
    {
      id: "hanna", title: "이한나의 평가",
      comment: answer("q8", 1) ? "선수의 안전부터 챙긴 점이 정말 좋았어. 든든한 동료야!"
        : "열심히 해 줘서 고마워! 다음에는 선수들의 몸 상태도 더 꼼꼼히 살펴보자.",
    },
  ];
}
