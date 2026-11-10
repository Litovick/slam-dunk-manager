import { createFileRoute } from "@tanstack/react-router";
import { Game } from "@/components/game/Game";
import { slamdunk } from "@/game/themes/slamdunk";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "슬램덩크 — 당신은 북산고의 매니저가 될 수 있나?" },
      { name: "description", content: "북산고 농구부 신입 매니저가 되어 10가지 상황에서 팀 신뢰도와 판단력을 키우는 선택형 게임." },
      { property: "og:title", content: "슬램덩크 — 당신은 북산고의 매니저가 될 수 있나?" },
      { property: "og:description", content: "팀 신뢰도와 판단력으로 정식 매니저에 도전하세요." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <Game theme={slamdunk} />,
});
