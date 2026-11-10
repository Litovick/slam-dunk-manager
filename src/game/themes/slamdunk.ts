import type { Line, Theme } from "../types";

const L = (speaker: string | undefined, text: string): Line => ({ speaker, text });
const fx = (trust: number, judgment: number) => ({ trust, judgment });

export const slamdunk: Theme = {
  id: "slamdunk",
  title: "슬램덩크",
  subtitle: "당신은 북산고의 매니저가 될 수 있나?",
  stats: [
    { id: "trust", label: "팀 신뢰도", initial: 50, min: 0, max: 100, tone: "trust" },
    { id: "judgment", label: "판단력", initial: 50, min: 0, max: 100, tone: "judgment" },
  ],
  characters: {
    me: { id: "me", name: "나", tone: "muted" },
    hanna: { id: "hanna", name: "이한나", tone: "orange" },
    baekho: { id: "baekho", name: "강백호", number: "10", tone: "primary" },
    taewoong: { id: "taewoong", name: "서태웅", number: "11", tone: "ink" },
    chisu: { id: "chisu", name: "채치수", number: "4", tone: "primary" },
    taeseop: { id: "taeseop", name: "송태섭", number: "7", tone: "ink" },
    daeman: { id: "daeman", name: "정대만", number: "14", tone: "primary" },
    coach: { id: "coach", name: "안 감독", tone: "court" },
    bench: { id: "bench", name: "벤치 선수", number: "12", tone: "muted" },
    player: { id: "player", name: "선수", number: "8", tone: "muted" },
  },
  backgrounds: {
    gym: { label: "북산고 체육관" },
    court: { label: "연습 경기 코트" },
    bench: { label: "벤치" },
    locker: { label: "라커룸" },
    evening: { label: "해 질 녘 체육관" },
  },
  opening: [
    L(undefined, "북산고등학교에 입학한 당신. 평범한 학교생활을 꿈꾸던 어느 날, 우연히 체육관에서 농구부의 연습 경기를 구경하게 된다."),
    L(undefined, "코트에서는 강백호와 서태웅이 서로 다투고 있었고, 주장 채치수는 두 사람을 말리느라 정신이 없었다."),
    L(undefined, "그때 농구부 매니저 이한나가 당신에게 다가온다."),
    L("hanna", "혹시 농구부 매니저에 관심 없어?"),
    L("me", "네? 저요? 농구에 대해서는 잘 모르는데요..."),
    L("hanna", "괜찮아! 선수들을 잘 챙기고 상황에 맞게 판단할 수 있다면 충분해."),
    L(undefined, "그때 강백호가 다가온다."),
    L("baekho", "뭐야?! 새로운 매니저라고?!"),
    L("baekho", "좋아! 이 천재 강백호님의 활약을 가장 가까이서 지켜볼 수 있겠군!"),
    L("taewoong", "시끄러워, 멍청이."),
    L("baekho", "뭐라고?! 이 여우 자식이!"),
    L("chisu", "그만 좀 싸워라!!"),
    L(undefined, "채치수가 두 사람을 말린 뒤 당신을 바라본다."),
    L("chisu", "우리 팀의 매니저가 되려면 선수들을 이해하고 냉정하게 판단할 줄 알아야 한다."),
    L("chisu", "우선 신입 매니저로 활동해 봐라. 네가 얼마나 잘할 수 있는지 지켜보겠다."),
    L("hanna", "좋아! 그럼 오늘부터 시작이야!"),
  ],
  openingBanner: "당신의 북산고 매니저 생활이 시작됩니다!",
  openingGuide: [
    "선수들의 고민과 경기 상황을 파악하고 가장 적절한 행동을 선택하세요. 선택에 따라 팀 신뢰도와 판단력이 변화합니다.",
    "10개의 상황을 모두 해결한 뒤 정식 매니저가 될 수 있을지 확인하세요!",
  ],
  howTo: [
    "팀 신뢰도: 선수들과 감독이 당신을 얼마나 믿고 의지하는지를 나타냅니다. (시작 50, 0~100)",
    "판단력: 훈련·경기·선수 관리에서 적절한 결정을 내리는 능력입니다. (시작 50, 0~100)",
    "두 수치는 서로 독립적으로 변합니다. 친절하지만 잘못된 판단이라면 신뢰도는 오르고 판단력은 내려갈 수 있어요.",
    "대화창을 클릭하면 다음 대사로 넘어갑니다. 타이핑 중에 클릭하면 문장이 바로 완성됩니다.",
    "10개의 상황마다 3개의 선택지 중 하나를 고르세요.",
    "엔딩: 팀 신뢰도 80 이상, 판단력 80 이상이면 HAPPY ENDING. 하나라도 부족하면 SAD ENDING.",
  ],
  questions: [
    {
      id: "q1", title: "강백호와 서태웅의 다툼", background: "gym", cast: ["baekho", "taewoong"],
      lines: [
        L(undefined, "농구부 연습 도중 강백호와 서태웅이 패스 문제로 말다툼을 벌인다."),
        L("baekho", "야! 서태웅! 왜 나한테 패스를 안 하는 거야?!"),
        L("taewoong", "네가 제대로 받을 수나 있냐?"),
        L("baekho", "뭐라고?!"),
      ],
      prompt: "신입 매니저인 당신은 어떻게 행동할 것인가?",
      choices: [
        { label: "\"둘 다 진정해! 지금은 서로 싸울 때가 아니라 팀 연습에 집중해야 할 때야!\"", effects: fx(10, 10), reactions: [L("chisu", "좋은 판단이다. 지금 우리에게 필요한 건 팀워크야.")] },
        { label: "\"강백호 말도 맞는 것 같은데? 서태웅이 패스를 좀 해 줘.\"", effects: fx(-5, -5), reactions: [L("taewoong", "흥. 상황도 모르면서.")] },
        { label: "\"둘이 알아서 해결하겠지. 난 관여하지 않을래.\"", effects: fx(-10, -10), reactions: [L("chisu", "매니저라면 팀 분위기도 살필 줄 알아야 한다!")] },
      ],
    },
    {
      id: "q2", title: "무리하는 정대만", background: "gym", cast: ["daeman", "hanna"],
      lines: [
        L(undefined, "격렬한 슈팅 연습을 이어가던 정대만이 지친 모습을 보인다."),
        L("hanna", "정대만 선배가 너무 무리하는 것 같은데..."),
        L("daeman", "괜찮아. 조금만 더 연습하면 돼."),
      ],
      prompt: "당신은 어떻게 행동할 것인가?",
      choices: [
        { label: "\"그럼 조금만 더 연습하세요! 노력은 배신하지 않으니까요!\"", effects: fx(5, -5), reactions: [L("daeman", "고맙긴 한데... 확실히 좀 지치긴 했네.")] },
        { label: "\"지금은 잠깐 쉬는 게 좋겠어요. 컨디션을 유지하는 것도 중요하니까요.\"", effects: fx(10, 10), reactions: [L("daeman", "하하, 맞는 말이네. 고맙다.")] },
        { label: "\"선배가 알아서 하시겠죠. 저는 신경 쓰지 않을게요.\"", effects: fx(-10, -10), reactions: [L("hanna", "선수들의 몸 상태도 매니저가 신경 써야 하는 부분이야.")] },
      ],
    },
    {
      id: "q3", title: "강백호의 무리한 훈련", background: "court", cast: ["baekho", "hanna"],
      lines: [
        L(undefined, "강백호가 자신의 실력을 증명하겠다며 쉬지 않고 슛 연습을 반복하고 있다."),
        L("baekho", "이 천재 강백호님은 연습 따위로 지치지 않는다고!"),
        L("hanna", "백호가 너무 무리하는 것 같은데..."),
      ],
      prompt: "당신의 선택은?",
      choices: [
        { label: "\"역시 천재야! 계속 연습해!\"", effects: fx(5, -10), reactions: [L("baekho", "역시 날 알아보는군!"), L("hanna", "그래도 저러다 다칠 수도 있는데...")] },
        { label: "\"그만해! 넌 실력이 부족하니까 더 해 봐야 소용없어.\"", effects: fx(-10, -5), reactions: [L("baekho", "뭐라고?! 이 천재를 무시하는 거냐?!")] },
        { label: "\"열심히 하는 건 좋은데, 잠깐 쉬고 자세부터 점검해 보자.\"", effects: fx(10, 10), reactions: [L("baekho", "흥! 천재에게도 휴식이 필요한 법이지!")] },
      ],
    },
    {
      id: "q4", title: "경기 중 작전 타임", background: "court", cast: ["taeseop", "coach"],
      lines: [
        L(undefined, "연습 경기에서 상대 팀의 빠른 공격에 북산고가 연속 실점하고 있다."),
        L("taeseop", "상대 가드가 너무 빨라! 수비가 계속 뚫리고 있어!"),
        L("coach", "흠..."),
      ],
      prompt: "매니저인 당신은 어떤 의견을 제시할 것인가?",
      choices: [
        { label: "\"공격을 더 빠르게 해서 점수를 많이 넣으면 되지 않을까요?\"", effects: fx(5, -5), reactions: [L("taeseop", "공격도 중요하지만 지금은 수비부터 해결해야 해.")] },
        { label: "\"상대 가드의 돌파 방향을 분석하고 수비 위치를 조정하면 어떨까요?\"", effects: fx(10, 10), reactions: [L("coach", "호호호. 좋은 관찰이군요.")] },
        { label: "\"상대가 너무 강한 것 같아요. 오늘은 포기하는 게...\"", effects: fx(-10, -10), reactions: [L("chisu", "경기가 끝나지도 않았는데 포기할 생각부터 하다니!")] },
      ],
    },
    {
      id: "q5", title: "벤치에 앉은 선수", background: "bench", cast: ["bench"],
      lines: [
        L(undefined, "경기에서 출전 기회를 얻지 못한 벤치 선수가 풀이 죽어 있다."),
        L("bench", "저는 아무래도 팀에 도움이 안 되는 것 같아요."),
      ],
      prompt: "당신은 어떤 말을 건넬 것인가?",
      choices: [
        { label: "\"경기에 나가지 못해도 팀을 위해 준비하는 건 중요한 일이야. 다음 기회를 함께 준비하자.\"", effects: fx(10, 10), reactions: [L("bench", "맞아요. 저도 팀의 일원이니까요!")] },
        { label: "\"열심히 하면 언젠가는 출전할 수 있을 거야.\"", effects: fx(5, 5), reactions: [L("bench", "고마워요. 더 노력해 볼게요.")] },
        { label: "\"실력이 부족하니까 어쩔 수 없지.\"", effects: fx(-10, -10), reactions: [L("bench", "그렇겠죠...")] },
      ],
    },
    {
      id: "q6", title: "서태웅의 개인 플레이", background: "court", cast: ["taewoong", "taeseop"],
      lines: [
        L(undefined, "연습 경기에서 서태웅이 혼자 공격을 시도하다 여러 번 상대 수비에 막힌다."),
        L("taeseop", "서태웅! 패스를 좀 하라고!"),
        L("taewoong", "..."),
      ],
      prompt: "당신은 어떻게 행동할 것인가?",
      choices: [
        { label: "\"서태웅은 잘하니까 계속 혼자 공격하게 두는 게 좋겠어.\"", effects: fx(-5, -10), reactions: [L("taeseop", "농구는 혼자 하는 게 아니잖아!")] },
        { label: "\"서태웅의 공격 능력을 살리면서 동료들이 패스받을 위치를 만들면 좋겠어.\"", effects: fx(10, 10), reactions: [L("chisu", "개인의 능력과 팀워크를 함께 살릴 수 있겠군.")] },
        { label: "\"서태웅을 당장 교체해야 해!\"", effects: fx(-10, -5), reactions: [L("taewoong", "흥.")] },
      ],
    },
    {
      id: "q7", title: "팀의 연패", background: "locker", cast: ["chisu", "baekho"],
      lines: [
        L(undefined, "연습 경기에서 연달아 패배한 북산고 선수들의 분위기가 가라앉아 있다."),
        L("chisu", "이대로는 전국대회에서 좋은 성적을 낼 수 없어."),
        L("baekho", "젠장! 다음에는 반드시 이길 거야!"),
      ],
      prompt: "당신은 어떤 행동을 할 것인가?",
      choices: [
        { label: "\"다들 기운 내! 다음에는 무조건 이길 거야!\"", effects: fx(5, 5), reactions: [L("baekho", "당연하지! 이 천재가 있으니까!")] },
        { label: "\"지금 실력으로는 전국대회는 무리인 것 같아.\"", effects: fx(-10, -10), reactions: [L("chisu", "그런 식으로 말해서는 아무것도 달라지지 않는다.")] },
        { label: "\"패배한 경기들을 분석해서 반복되는 실수를 찾아보자. 다음 경기에 대비할 수 있을 거야.\"", effects: fx(10, 10), reactions: [L("chisu", "좋아. 패배에서 배우는 것도 중요하지.")] },
      ],
    },
    {
      id: "q8", title: "경기 직전의 부상", background: "locker", cast: ["player", "hanna"],
      lines: [
        L(undefined, "중요한 경기를 앞두고 한 선수가 발목에 통증을 느낀다."),
        L("player", "조금 아프긴 한데... 경기에 나갈 수 있을 것 같아요."),
        L("hanna", "어떻게 해야 하지?"),
      ],
      prompt: "당신의 판단은?",
      choices: [
        { label: "\"중요한 경기니까 조금만 참고 뛰어 봐.\"", effects: fx(-10, -10), reactions: [L("hanna", "부상을 더 악화시키면 어떡해!")] },
        { label: "\"우선 감독님께 알리고 몸 상태를 확인받자. 출전 여부는 그다음에 결정해야 해.\"", effects: fx(10, 10), reactions: [L("coach", "호호호. 선수의 안전이 가장 중요하지요.")] },
        { label: "\"오늘은 무조건 쉬어. 감독님께는 내가 알아서 말씀드릴게.\"", effects: fx(5, 5), reactions: [L("player", "걱정해 줘서 고마워. 그래도 감독님과 상의해 보자.")] },
      ],
    },
    {
      id: "q9", title: "마지막 작전 회의", background: "court", cast: ["taeseop", "chisu"],
      lines: [
        L(undefined, "중요한 경기에서 북산고는 2점 차이로 뒤지고 있다. 경기 종료까지 남은 시간은 20초."),
        L("taeseop", "어떻게 공격해야 하지?"),
        L("chisu", "이번 공격이 중요하다."),
      ],
      prompt: "당신은 어떤 의견을 제시할 것인가?",
      choices: [
        { label: "\"일단 아무나 슛을 던져! 시간이 없어!\"", effects: fx(-10, -10), reactions: [L("chisu", "이럴 때일수록 침착해야 한다!")] },
        { label: "\"서태웅에게 무조건 공을 몰아주자.\"", effects: fx(5, -5), reactions: [L("taeseop", "서태웅도 좋지만 상대가 그걸 예상할 텐데?")] },
        { label: "\"상대 수비를 분산시키고 가장 좋은 위치에 있는 선수에게 기회를 만들자.\"", effects: fx(10, 10), reactions: [L("coach", "좋은 생각입니다. 마지막까지 팀 전체를 활용해야지요.")] },
      ],
    },
    {
      id: "q10", title: "진정한 매니저의 자격", background: "gym", cast: ["chisu", "coach", "hanna"],
      lines: [
        L(undefined, "모든 훈련과 경기가 끝난 뒤, 북산고 농구부가 체육관에 모인다."),
        L("chisu", "그동안 수고 많았다."),
        L("hanna", "이제 마지막 질문이야."),
        L("coach", "호호호. 자네는 좋은 매니저란 어떤 사람이라고 생각하나?"),
      ],
      prompt: "당신이 생각하는 진정한 매니저의 역할은?",
      choices: [
        { label: "\"선수들이 편하게 운동할 수 있도록 필요한 일을 대신해 주는 사람이라고 생각합니다.\"", effects: fx(5, 5), reactions: [L("hanna", "그것도 매니저의 중요한 역할이지.")] },
        { label: "\"선수들의 상황을 이해하고, 팀이 올바른 방향으로 나아갈 수 있도록 돕는 사람이라고 생각합니다.\"", effects: fx(10, 10), reactions: [L("coach", "호호호. 훌륭한 대답입니다.")] },
        { label: "\"경기에서 이기기만 하면 되는 거 아닌가요? 결과가 가장 중요하니까요.\"", effects: fx(-10, -10), reactions: [L("chisu", "승리도 중요하지만, 팀을 이해하는 마음도 필요하다.")] },
      ],
    },
  ],
  endings: [
    {
      id: "happy", title: "HAPPY ENDING", subtitle: "북산고 농구부 정식 매니저 임명!", background: "gym",
      condition: (s) => s.trust >= 80 && s.judgment >= 80,
      lines: [
        L(undefined, "밝은 햇살이 들어오는 북산고 체육관. 선수들이 당신을 둘러싸고 있다."),
        L("chisu", "그동안 네가 보여 준 모습은 충분히 훌륭했다."),
        L("taeseop", "덕분에 우리도 많은 도움을 받았어."),
        L("daeman", "생각보다 제법인데?"),
        L("baekho", "크하하하! 역시 이 천재 강백호님이 인정한 매니저답군!"),
        L("taewoong", "...수고했어."),
        L("hanna", "축하해! 이제 너도 정식으로 북산고 농구부의 매니저야!"),
        L("coach", "호호호. 앞으로도 잘 부탁합니다."),
        L(undefined, "선수들이 박수를 치고 강백호가 농구공을 높이 던진다."),
      ],
      quote: "농구는 혼자 하는 경기가 아니다. 선수들을 믿고 팀을 위해 판단하는 것, 그것이 진정한 매니저의 자격이다.",
      retryLabel: "다시 플레이하기",
    },
    {
      id: "sad", title: "SAD ENDING", subtitle: "정식 매니저 임명 실패! 신입 생활 연장 확정!", background: "evening",
      condition: () => true,
      lines: [
        L(undefined, "해가 저문 북산고 체육관. 선수들은 훈련을 마치고 정리하고 있다."),
        L("chisu", "아쉽지만 아직 정식 매니저로 인정하기에는 부족한 점이 있는 것 같다."),
        L("me", "네?! 저 나름대로 열심히 했는데요!"),
        L("taeseop", "열심히 하는 것도 중요하지만 상황을 잘 판단해야지."),
        L("daeman", "너무 실망하지 마. 처음부터 잘하는 사람은 없으니까."),
        L("baekho", "크하하하! 걱정하지 마! 이 천재 강백호님이 직접 가르쳐 주지!"),
        L("taewoong", "네가 누굴 가르친다는 거냐, 멍청이."),
        L("baekho", "뭐라고?!"),
        L("chisu", "둘 다 조용히 해!!"),
        L("hanna", "자, 그럼 내일부터 다시 시작하자!"),
        L("me", "네?! 내일부터 또요?!"),
        L(undefined, "— 다음 날 아침. 당신은 체육관에서 농구공을 정리하고 수건을 나르고 있다."),
        L("baekho", "어이! 신입 매니저! 내 천재적인 플레이를 보라고!"),
        L("me", "으아아! 대체 언제 정식 매니저가 되는 거야!!"),
      ],
      quote: "농구보다 어려운 건, 개성 넘치는 북산고 선수들을 하나의 팀으로 만드는 일이었다.",
      retryLabel: "다시 도전하기",
    },
  ],
  // 실제 작품 페이지 URL이 제공되면 여기에 연결
  originalWorkUrl: null,
};
