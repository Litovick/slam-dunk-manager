import {createFileRoute} from "@tanstack/react-router";
import {AttackGame} from "@/components/game/AttackGame";
export const Route=createFileRoute("/attack-on-titan")({
 head:()=>({meta:[{title:"진격의 거인 — 당신의 조사병단 생존 확률은?"},{name:"description",content:"조사병단 신입 병사의 열 가지 선택형 IF 생존 게임"}]}),
 component:AttackGame,
});