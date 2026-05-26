export type CaseItem = {
  id: string;
  title: string;
  hook: string;
  center: string;
  category: string;
  summary: string;
  tags: string[];
  image: string;
  blogUrl: string;
  featured?: boolean;
  date?: string;
};

export const casePlaceholders: Record<string, string> = {
  수술: '/images/cases/surgery-anesthesia-monitoring.png',
  치과: '/images/cases/dog-dental-scaling-heart-check.png',
  심장: '/images/cases/advanced-surgery-center.png',
  피부: '/images/cases/atopy-cadesi-dog-skin.jpg',
  종양: '/images/cases/mast-cell-tumor-surgery-dog.png',
  정형외과: '/images/cases/puppy-tibial-tuberosity-fracture.png',
  내시경: '/images/cases/endoscopy-foreign-body-dog.png',
  내과: '/images/cases/veterinary-hospital-lobby.jpg',
  응급: '/images/cases/surgery-anesthesia-monitoring.png',
  default: '/images/cases/veterinary-hospital-lobby.jpg',
};

export const cases: CaseItem[] = [
  {
    id: 'dog-dental-scaling-heart-check',
    title: '건강검진과 스케일링, 심장초음파까지 함께 본 케이스',
    hook: '노령 환자의 마취 전 심장 평가가 중요했던 케이스',
    center: '노령마취센터',
    category: '치과',
    summary:
      '구강 상태와 심장, 복부 장기 상태를 함께 확인하며 마취 전 평가 기준을 세운 케이스입니다.',
    tags: ['스케일링', '심장초음파', '노령마취'],
    image: '/images/cases/dog-dental-scaling-heart-check.png',
    blogUrl: 'https://blog.naver.com/chiu_amc/224295025082',
    featured: true,
    date: '2026-05-24',
  },
  {
    id: 'dog-mast-cell-tumor-surgery',
    title: '강아지 피부 종괴, 비만세포종 수술 케이스',
    hook: '피부 종괴를 제거하고 병리검사로 추적한 종양 케이스',
    center: '종양수술센터',
    category: '종양',
    summary:
      '피부 종괴를 단순 지방종으로만 보지 않고 제거 후 병리검사를 통해 진단과 추적 방향을 정리한 케이스입니다.',
    tags: ['종양수술', '세보플루란', '병리검사'],
    image: '/images/cases/mast-cell-tumor-surgery-dog.png',
    blogUrl: 'https://blog.naver.com/chiu_amc/224292374452',
    featured: true,
    date: '2026-05-21',
  },
  {
    id: 'puppy-tibial-tuberosity-fracture',
    title: '어린 강아지 뒷다리 파행, 경골 조면 견열골절',
    hook: '어린 강아지 파행에서 성장판 손상을 확인한 케이스',
    center: '수술센터',
    category: '정형외과',
    summary:
      '성장기 강아지에서 발생할 수 있는 정형외과 질환을 조기에 확인하고 치료 방향을 잡은 케이스입니다.',
    tags: ['성장판', '정형외과', '수술'],
    image: '/images/cases/puppy-tibial-tuberosity-fracture.png',
    blogUrl: 'https://blog.naver.com/chiu_amc/224294510285',
    featured: true,
    date: '2026-05-23',
  },
  {
    id: 'atopy-cadesi-index-skin',
    title: 'CADESI index로 관리한 아토피·알러지성 피부염 케이스',
    hook: '피부 상태를 사진과 수치로 함께 추적한 케이스',
    center: '피부·알러지센터',
    category: '피부',
    summary:
      '오래 반복된 피부 소양감과 외이염을 사진 기록과 피부 지표로 추적하며 관리한 케이스입니다.',
    tags: ['아토피', '알러지', 'CADESI'],
    image: '/images/cases/atopy-cadesi-dog-skin.jpg',
    blogUrl: 'https://blog.naver.com/chiu_amc/224296033864',
    date: '2026-05-25',
  },
  {
    id: 'endoscopy-foreign-body',
    title: '강아지 이물 섭취, 개복수술 전 내시경으로 제거한 케이스',
    hook: '개복 전 내시경 제거 가능성을 먼저 평가한 케이스',
    center: '내시경센터',
    category: '내시경',
    summary:
      '개복 수술 전 내시경 제거 가능성을 먼저 평가하고 비절개 접근을 고려한 케이스입니다.',
    tags: ['내시경', '비절개', '이물'],
    image: '/images/cases/endoscopy-foreign-body-dog.png',
    blogUrl: 'https://blog.naver.com/chiu_amc/224294504325',
    date: '2026-05-23',
  },
  {
    id: 'dog-cardiac-valve-stage-two',
    title: '강아지 심장사상충 2기, 심장초음파로 치료 방향을 잡은 케이스',
    hook: '심장 상태를 먼저 확인하고 치료 계획을 세운 케이스',
    center: '심장협진센터',
    category: '심장',
    summary:
      '단순 투약에서 멈추지 않고 영상검사와 혈액검사를 함께 확인해 심장 상태를 평가한 케이스입니다.',
    tags: ['심장초음파', '혈액검사', '심장사상충'],
    image: '',
    blogUrl: 'https://blog.naver.com/chiu_amc/224291519849',
    date: '2026-05-20',
  },
  {
    id: 'multiple-mass-one-anesthesia',
    title: '입술·발가락·귓바퀴 종괴, 한 번의 마취로 함께 제거한 케이스',
    hook: '여러 부위 종괴를 수술 전 계획 안에서 정리한 케이스',
    center: '수술센터',
    category: '수술',
    summary:
      '여러 부위의 종괴를 수술 전 평가 후 한 번의 마취 계획 안에서 정리한 케이스입니다.',
    tags: ['종괴제거', '세보플루란', '마취계획'],
    image: '',
    blogUrl: 'https://blog.naver.com/chiu_amc/224291483708',
    date: '2026-05-20',
  },
  {
    id: 'dental-gum-check',
    title: '치석만 보이는 문제가 아닐 때, 잇몸 속 문제까지 확인한 케이스',
    hook: '스케일링 전 구강 상태를 세밀하게 확인한 케이스',
    center: '치과·스케일링센터',
    category: '치과',
    summary:
      '치석뿐 아니라 잇몸 안쪽 문제와 통증 가능성까지 함께 확인한 치과 케이스입니다.',
    tags: ['스케일링', '치주염', '구강검사'],
    image: '',
    blogUrl: 'https://blog.naver.com/chiu_amc/224292328104',
    date: '2026-05-21',
  },
  {
    id: 'senior-dog-heart-pancreas',
    title: '노령견 설사, 장염만이 아니라 췌장과 심장질환까지 본 케이스',
    hook: '노령 환자의 전신 상태를 함께 확인한 내과 케이스',
    center: '심장협진센터',
    category: '심장',
    summary:
      '반복되는 구토와 혈액 변화에서 소화기 질환과 기존 심장 상태를 함께 고려한 케이스입니다.',
    tags: ['노령견', '췌장염', '심장병'],
    image: '',
    blogUrl: 'https://blog.naver.com/chiu_amc/224294517138',
    date: '2026-05-23',
  },
  {
    id: 'post-surgery-rehab',
    title: '수술 후 통증·부종·관절 회복을 돕는 재활치료 케이스',
    hook: '수술 뒤 회복 과정을 이어서 관리한 케이스',
    center: '수술센터',
    category: '정형외과',
    summary:
      '수술 이후 보행과 통증, 부종 변화를 확인하며 회복 단계에 맞춰 관리한 케이스입니다.',
    tags: ['재활치료', '레이저', '초음파'],
    image: '',
    blogUrl: 'https://blog.naver.com/chiu_amc/224292587348',
    date: '2026-05-21',
  },
  {
    id: 'polydipsia-polyuria-check',
    title: '강아지가 물을 많이 마실 때, 다음다뇨 원인을 확인한 케이스',
    hook: '보호자가 놓치기 쉬운 생활 변화에서 시작한 내과 케이스',
    center: '내과센터',
    category: '내과',
    summary:
      '물을 많이 마시고 소변량이 늘어난 증상에서 신장, 당뇨, 쿠싱 등 원인을 확인한 케이스입니다.',
    tags: ['다음다뇨', '혈액검사', '노령견검진'],
    image: '',
    blogUrl: 'https://blog.naver.com/chiu_amc/224293569916',
    date: '2026-05-22',
  },
  {
    id: 'senior-dog-screening',
    title: '11살 닥스훈트 건강검진, 노령견은 수치로 확인해야 합니다',
    hook: '겉으로 건강해 보여도 내부 수치를 확인한 검진 케이스',
    center: '노령마취센터',
    category: '심장',
    summary:
      '겉으로 건강해 보여도 심장, 신장, 췌장 관련 수치를 함께 확인한 노령견 검진 케이스입니다.',
    tags: ['노령견건강검진', 'NT-proBNP', 'SDMA'],
    image: '',
    blogUrl: 'https://blog.naver.com/chiu_amc/224292367150',
    date: '2026-05-21',
  },
  {
    id: 'vomiting-crp-hospital-care',
    title: '강아지가 갑자기 토했어요, CRP 상승과 췌장·장염 가능성',
    hook: '급성 구토에서 입원 치료 방향을 정리한 케이스',
    center: '응급·입원센터',
    category: '응급',
    summary:
      '구토 이후 염증 수치와 소화기 상태를 확인하고 입원 치료 방향을 정리한 케이스입니다.',
    tags: ['구토', 'CRP', '입원치료'],
    image: '',
    blogUrl: 'https://blog.naver.com/chiu_amc/224291609025',
    date: '2026-05-20',
  },
  {
    id: 'spleen-mass-ultrasound',
    title: '이전 혈액검사 수치가 정상이어도 초음파에서 발견된 비장 종괴',
    hook: '건강검진 중 영상검사로 변화를 확인한 케이스',
    center: '내과센터',
    category: '내과',
    summary:
      '건강검진 중 복부초음파로 비장 변화를 확인하고 추적 관리 방향을 세운 케이스입니다.',
    tags: ['비장종괴', '복부초음파', '건강검진'],
    image: '',
    blogUrl: 'https://blog.naver.com/chiu_amc/224291597505',
    date: '2026-05-20',
  },
  {
    id: 'chocolate-ingestion-emergency',
    title: '강아지가 초콜릿을 먹었을 때, 바로 병원에 와야 하는 이유',
    hook: '중독 가능성이 있는 섭취 사고에서 초기 처치한 케이스',
    center: '응급·입원센터',
    category: '응급',
    summary:
      '초콜릿 섭취 후 구토 처치, 입원 수액, 간수치 확인까지 진행한 응급 케이스입니다.',
    tags: ['초콜릿섭취', '구토처치', '수액치료'],
    image: '',
    blogUrl: 'https://blog.naver.com/chiu_amc/224291583541',
    date: '2026-05-20',
  },
  {
    id: 'liver-cushing-bladder-stone',
    title: '간수치 상승, 쿠싱 의심과 방광결석까지 함께 확인한 노령견 케이스',
    hook: '한 가지 수치만 보지 않고 전신 상태를 함께 본 케이스',
    center: '내과센터',
    category: '내과',
    summary:
      '간수치 변화뿐 아니라 호르몬 질환, 방광 상태, 통증 가능성을 함께 평가한 케이스입니다.',
    tags: ['간수치', '쿠싱', '방광결석'],
    image: '',
    blogUrl: 'https://blog.naver.com/chiu_amc/224291572544',
    date: '2026-05-20',
  },
  {
    id: 'cat-oral-tumor-dtm',
    title: '구강 내 종양과 곰팡이 이력, DTM 검사 후 중성화까지 진행한 케이스',
    hook: '피부와 기본 검진을 확인한 뒤 수술 계획을 세운 케이스',
    center: '수술센터',
    category: '수술',
    summary:
      '피부 상태와 기본 검진을 확인한 뒤 고양이 중성화 수술까지 계획한 케이스입니다.',
    tags: ['고양이중성화', 'DTM검사', '마취'],
    image: '',
    blogUrl: 'https://blog.naver.com/chiu_amc/224291539911',
    date: '2026-05-20',
  },
  {
    id: 'cat-urinary-obstruction',
    title: '고양이가 소변을 못 보면 왜 응급일까요?',
    hook: '배뇨 이상에서 요도폐색 가능성을 확인한 응급 케이스',
    center: '응급·입원센터',
    category: '응급',
    summary:
      '고양이 배뇨곤란에서 요도폐색, 신장 기능, 폐수 가능성까지 확인한 비뇨기 응급 케이스입니다.',
    tags: ['요도폐색', '신장기능', '비뇨기'],
    image: '',
    blogUrl: 'https://blog.naver.com/chiu_amc/224281726340',
    date: '2026-05-11',
  },
];
