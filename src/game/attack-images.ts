/** Actual anime episode stills listed by the Attack on Titan Wiki.
 * Special:Redirect/file resolves a wiki file to its image URL.
 * These are copyrighted anime frames, not generated images or fan art.
 * External hosting can restrict hotlinking; the component offers source-page fallback.
 */
const wiki="https://attackontitan.fandom.com/wiki/";
const frame=(filename:string,alt:string)=>({
 url:`https://attackontitan.fandom.com/wiki/Special:Redirect/file/${encodeURIComponent(filename)}`,
 source:wiki+"File:"+encodeURIComponent(filename),
 alt
});
export const animeFrames=[
 frame("Erwin leads the soldiers to the Wall.png","엘빈과 조사병단의 출정 장면"),
 frame("Armin reports to Erwin.png","아르민이 엘빈에게 보고하는 장면"),
 frame("The Scouts reach Shiganshina.png","조사병단이 성벽 밖으로 이동하는 장면"),
 frame("The Scouts are ambushed.png","조사병단이 습격받는 장면"),
 frame("The soldiers split into two groups.png","조사병단이 두 갈래로 나뉘는 장면"),
 frame("Hange shows off the Thunder Spear.png","한지가 무기를 설명하는 장면"),
 frame("Levi attacks Reiner.png","리바이가 전투하는 장면"),
 frame("Jean saves Hange.png","동료를 구하는 장면"),
 frame("The Scouts are ambushed.png","거인의 습격을 받는 조사병단"),
 frame("Erwin rallies his soldiers.png","엘빈이 병사들을 독려하는 장면"),
 frame("Erwin leads the suicide charge.png","엘빈이 돌격을 이끄는 장면"),
 frame("The Scouts reach Shiganshina.png","작전을 마치고 성벽에 도달한 조사병단")
];