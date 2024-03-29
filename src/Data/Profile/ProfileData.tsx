export interface IntroduceType {
  id: number;
  title: string;
  contents: string;
}
export interface workExperienceType {
  id: number;
  title: string;
  intro: string;
  period: string;
  task: string[];
}

export const introduce: IntroduceType[] = [
  {
    id: 0,
    title: `🔶 끊임없이 문제와 직면하고, 지속적인 고민과 탐구를 중요시하는 개발자입니다.`,
    contents: `저는 단순한 웹서핑을 통한 일시적인 문제 해결보다는 절대적인 시간 투자와 집요한 끈기가 결국 저에게 가장 만족스러운 결과를 가져온다는 것을 경험 하였습니다. 이를 통하여 자기주도적으로 문제에 대해 고민하고 집중하는 능력을 키웠으며 이에 대한 가치를 깨닫게 되었습니다.`,
  },
  {
    id: 1,
    title: `🔶 팀베이스 업무를 즐기는 개발자입니다.`,
    contents: `개발자는 컴퓨터와 언어를 통한 소통 뿐만이 아닌 사람과의 소통도 중요한 직업이라고 생각합니다. 협업 tool 활용 그리고 무엇보다 매일 standup-meeting 하는 등 이러한 팀베이스 업무의 효율을 증대시키는 능력에도 많은 투자를 하고 있습니다.`,
  },
  {
    id: 2,
    title: `🔶 직관적인 '성취감'을 느낄수 있는 직업이 개발자임을 확신했습니다.`,
    contents: `기여도가 객관적이라는 부분에서 매료가 되었습니다. 할당된 업무가 얼마나 진행되었는지, 어떻게 기여하고 있는지 바로 알 수 있어 스스로의 평가와 동반된 책임감을 느꼈습니다. 이러한 책임감을 수행하기 위해 저는 스스로 목표를 세워 점진적으로 이루어 나갔고 목표 달성을 통한 만족감을 얻을 수 있었습니다.`,
  },
  {
    id: 3,
    title: ``,
    contents: `🙆🏻‍♂️ 개발자로서 공부는 본질에 다가서려는 노력이고 실력은 고통의 총합이라고 생각합니다. 사용자 인터페이스의 개선을 위해 항상 고민하며, 아름답고 효율적인 UI를 구현하기 위해 탐구하고 분석하는 일에 재미를 느낍니다. 향후 본질에 가까운 지식을 지향하고 중요한 것과 우선순위를 구별하는 혜안을 갖기를 원합니다.`,
  },
];

export const workExperience: workExperienceType[] = [
  {
    id: 0,
    title: `UITI`,
    intro: `위티는 GIS 분야 국내 최고의 데이터 가공/분석 기술을 기반으로 혁신적인 부동산 서비스를 제공합니다.`,
    period: `2021.02 ~ 2021.03`,
    task: [
      `자체 서비스 페이지 UI를 타입스크립트 + 리액트 적용하여 리뉴얼 작업`,
      `TypeScript, Next.js 개발환경 경험`,
      `TypeScript, React, Styled-Components, Story-book 적용`,
      `TypeScript, React, Sass, Next.js, Redux Toolkit, Figma`,
      `Asana, Gitlab, Notion, Slack, XD 툴을 이용한 팀원간 협업`,
    ],
  },
  {
    id: 1,
    title: `Break & Company`,
    intro: `브레이크앤컴퍼니는 스포츠 카드 Grading 및 Trading 플랫폼 서비스를 제공합니다.`,
    period: `2021.05 ~ 2021.09`,
    task: [
      `Break Market 신규 서비스 개발 참여`,
      `Admin Page 기획`,
      `TypeScript, Next.js UI 마크업 및 기능구현`,
      `TypeScript, React, Sass, Next.js, Redux Toolkit, Figma`,
      `Github, Notion, Slack 툴을 이용한 팀원간 협업`,
      `Story Point 제도를 적용하여 팀원간 효율적인 분업 및 개발환경 경험`,
    ],
  },
];
