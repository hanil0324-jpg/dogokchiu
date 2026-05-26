export const caseCategories = [
  '전체',
  '수술',
  '치과',
  '심장',
  '피부',
  '종양',
  '정형외과',
  '내시경',
  '내과',
  '응급',
];

export const cases = [
  {
    id: 1,
    title: 'CADESI index로 관리한 아토피·알러지성 피부염 케이스',
    category: '피부',
    tags: ['아토피', '알러지', 'CADESI'],
    description:
      '오래 반복된 피부 소양감과 외이염을 사진 기록과 피부 지표로 추적하며 관리한 케이스입니다.',
    image:
      'https://blogthumb.pstatic.net/MjAyNjA1MjVfMjY0/MDAxNzc5NzAxMzg5ODY3.WByk5xIEsXMZpLBAoSge99r_ajD6h86tpXCBO0tWsAwg.ONHlb9WkI10ZgnI6Gnrkej7q9nfK9VlrIt_hLrW3dK8g.PNG/image.png?type=s3',
    link: 'https://blog.naver.com/chiu_amc/224296033864',
  },
  {
    id: 2,
    title: '건강검진과 스케일링, 심장초음파까지 함께 본 케이스',
    category: '치과',
    tags: ['스케일링', '심장초음파', '노령마취'],
    description:
      '구강 상태와 심장, 복부 장기 상태를 함께 확인하며 마취 전 평가의 기준을 세운 케이스입니다.',
    image:
      'https://blogthumb.pstatic.net/MjAyNjA1MjRfODUg/MDAxNzc5NTg3MTg3ODU2.fGX5aFJ2D6rG4pLh9wJ1mtVYmGTARif1uIaNf-_wCA8g.yjoAcWa00rV39MzSESLw8tECGN0_JB3j7ua7_xG-KU8g.PNG/ChatGPT_Image_2026%B3%E2_5%BF%F9_24%C0%CF_%BF%C0%C0%FC_10_39_21_%281%29.png?type=s3',
    link: 'https://blog.naver.com/chiu_amc/224295025082',
  },
  {
    id: 3,
    title: '어린 강아지 뒷다리 파행, 성장판 손상과 경골 조면 견열골절',
    category: '정형외과',
    tags: ['성장판', '정형외과', '후지파행'],
    description:
      '성장기 강아지에서 발생할 수 있는 정형외과 질환을 조기에 확인한 케이스입니다.',
    image:
      'https://blogthumb.pstatic.net/MjAyNjA1MjNfMjg0/MDAxNzc5NTMwNTkxODMx.VmjCXPsq6EmnkemU3XXR1G7E3SJFWYmhFrcmNDjpvH8g.Z56QgbPe9g3PBw56bATB9U5ed6pvv4rQ3U70R_6Qq4Ug.PNG/image.png?type=s3',
    link: 'https://blog.naver.com/chiu_amc/224294510285',
  },
  {
    id: 4,
    title: '강아지 이물 섭취, 개복수술 전 내시경으로 제거한 케이스',
    category: '내시경',
    tags: ['내시경', '비절개', '이물'],
    description:
      '개복 수술 전 내시경 제거 가능성을 먼저 평가한 케이스입니다.',
    image:
      'https://blogthumb.pstatic.net/MjAyNjA1MjNfMjcg/MDAxNzc5NTI5NjY3ODIx.M7rpw1duQYddw1YnsgV8xBnxur8hKVUmSyOwomWPkyMg.GvsQ5mk9bAzvc7iiT3IPx1hSG7CE6bKJaFoNEkmSOGcg.PNG/image.png?type=s3',
    link: 'https://blog.naver.com/chiu_amc/224294504325',
  },
  {
    id: 5,
    title: '강아지 피부에 갑자기 생긴 혹, 비만세포종 진단이 중요한 이유',
    category: '종양',
    tags: ['비만세포종', '세침검사', '종양수술'],
    description:
      '피부 종괴를 단순 지방종으로만 보지 않고 검사와 치료 방향을 함께 정리한 케이스입니다.',
    image:
      'https://blogthumb.pstatic.net/MjAyNjA1MjFfMTMw/MDAxNzc5MzQyNDQ1NDM4.sBiyhBJrUe5PyKnr1OUvKnCYaCAKQjsQBl8FinnLTDMg.5b85lUpySBkip9K0p6XqVvwFCp6J6OEsT7Kx2ulnt14g.PNG/image.png?type=s3',
    link: 'https://blog.naver.com/chiu_amc/224292374452',
  },
  {
    id: 6,
    title: '강아지 심장사상충 2기, 심장초음파 후 치료한 케이스',
    category: '심장',
    tags: ['심장초음파', '흉부방사선', '심장사상충'],
    description:
      '단순 키트 양성에서 멈추지 않고 영상검사와 혈액검사를 함께 확인한 심장 케이스입니다.',
    image:
      'https://blogthumb.pstatic.net/MjAyNjA1MjBfMjYw/MDAxNzc5MjY1NzQ4NTE5.TgzGtLy4hOHL1iyWNow4n2kA1j2RP9HXSIXRKbqFcnYg.lSpZGHgG985g4xjc9oj1ACYb5mKSqlaIv5mdF7IZRqog.PNG/image.png?type=s3',
    link: 'https://blog.naver.com/chiu_amc/224291519849',
  },
  {
    id: 7,
    title: '입술·발가락·귓바퀴 종괴, 한 번의 마취로 함께 제거한 케이스',
    category: '수술',
    tags: ['종괴제거', '세보플루란', '노령견수술'],
    description:
      '여러 부위의 종괴를 수술 전 평가 후 한 번의 마취 계획 안에서 정리한 케이스입니다.',
    image:
      'https://blogthumb.pstatic.net/MjAyNjA1MjBfMTE4/MDAxNzc5MjYzODk2MDIw.FzH6gvHUQq7FMcwbnR89H6Z1COOC8q-oYsOMSe2ly2Ig.9wchorYlb8CRUux3xlMvu6JnJGJjPIH1emagydgl_aQg.PNG/image.png?type=s3',
    link: 'https://blog.naver.com/chiu_amc/224291483708',
  },
  {
    id: 8,
    title: '치석은 보이는 문제, 잇몸 속 문제는 검사해야 보입니다',
    category: '치과',
    tags: ['스케일링', '치주염', '구강검사'],
    description:
      '치석뿐 아니라 잇몸 속 문제와 통증 가능성까지 함께 확인한 치과 케이스 모음입니다.',
    image:
      'https://blogthumb.pstatic.net/MjAyNjA1MjFfMTAx/MDAxNzc5MzM4MzUzNTI5.XQX3l2yMHiJ-UoNlV2_-L5eUgh2UaXAL7cHObyVU854g.O4yghrI9S86p_bItmT3xHnJYmTvWRrEoGVgPTC1HiZcg.PNG/image.png?type=s3',
    link: 'https://blog.naver.com/chiu_amc/224292328104',
  },
  {
    id: 9,
    title: '노령견 혈변, 장염만이 아니라 췌장염과 심장질환까지 본 케이스',
    category: '심장',
    tags: ['노령견', '췌장염', '심장병'],
    description:
      '반복되는 검붉은 점액변에서 소화기 질환과 기존 심장 상태를 함께 고려한 케이스입니다.',
    image:
      'https://blogthumb.pstatic.net/MjAyNjA1MjNfMTE5/MDAxNzc5NTMxMDY5ODk3.nA3hIB2pAPnAB5oZ4_q739UC9wsIdpEVOjeYto1Vjr8g.q2Z5FcK6GfMEaaiQ0KuVeNhYOmtZwzi5qvOzFx8alMsg.PNG/image.png?type=s3',
    link: 'https://blog.naver.com/chiu_amc/224294517138',
  },
  {
    id: 10,
    title: '수술 후 통증·부종·근육 회복을 돕는 재활치료 케이스',
    category: '정형외과',
    tags: ['재활치료', '크라이오', '저주파'],
    description:
      '수술 이후 보행과 통증, 부종 변화를 확인하며 회복 단계에 맞춰 관리한 케이스입니다.',
    image:
      'https://phinf.pstatic.net/image.nmv/blog_2026_05_21_3924/0YvEVQMnEr_07.jpg?type=f480x480',
    link: 'https://blog.naver.com/chiu_amc/224292587348',
  },
  {
    id: 11,
    title: '강아지가 물을 많이 마셔요, 다음다뇨 원인과 검사',
    category: '내과',
    tags: ['다음다뇨', '혈액검사', '노령견검진'],
    description:
      '물을 많이 마시고 소변이 늘어난 증상에서 신장, 당뇨, 쿠싱 등 원인을 확인한 케이스입니다.',
    image:
      'https://blogthumb.pstatic.net/MjAyNjA1MjJfMzYg/MDAxNzc5NDMzODY4OTY2.aaQavmWMD0IZXldT4mmnG9enN2Rvdi_J4avz9qPRqKQg.BmxYsM3xxpST6QDje-VYE8P9-Oh91h-olqBLHNSJoT4g.PNG/image.png?type=s3',
    link: 'https://blog.naver.com/chiu_amc/224293569916',
  },
  {
    id: 12,
    title: '11살 셔틀랜드 쉽독 건강검진, 노령견은 수치로 확인해야 합니다',
    category: '심장',
    tags: ['노령견건강검진', 'NT-proBNP', 'SDMA'],
    description:
      '겉으로 건강해 보여도 심장, 신장, 췌장 관련 수치를 함께 확인한 노령견 검진 케이스입니다.',
    image:
      'https://blogthumb.pstatic.net/MjAyNjA1MjFfMTI5/MDAxNzc5MzQwNTE2Mzg1.kUz9f43VjT6biAcomZkU-HGIcER8II2U1qX76_It9m4g.LhUcsSoRx_PDe1Q4GcrGsiDLHiikqJYIdB9eIjEQtWMg.PNG/image.png?type=s3',
    link: 'https://blog.naver.com/chiu_amc/224292367150',
  },
  {
    id: 13,
    title: '강아지가 피를 토했어요, CRP 상승과 위염·십이지장염 가능성',
    category: '응급',
    tags: ['혈토', 'CRP', '입원치료'],
    description:
      '혈토 이후 염증 수치와 소화기 상태를 확인하고 입원 치료 방향을 정리한 케이스입니다.',
    image:
      'https://blogthumb.pstatic.net/MjAyNjA1MjBfMjUz/MDAxNzc5MjcxNDA4NzEz.jVHedsW3rnAL1-R9tDMdE5x3maY18XtZQ2dCt7ZRfdYg.09hP6YYFdFBzdbEmwVTTzD-GecrXbGbBF6oHZV2ZNuMg.PNG/image.png?type=s3',
    link: 'https://blog.naver.com/chiu_amc/224291609025',
  },
  {
    id: 14,
    title: '담낭 점액종, 간수치가 정상이어도 초음파에서 발견될 수 있습니다',
    category: '내과',
    tags: ['담낭점액종', '복부초음파', '건강검진'],
    description:
      '건강검진 중 복부초음파로 담낭 변화를 확인하고 추적 관리 방향을 세운 케이스입니다.',
    image:
      'https://blogthumb.pstatic.net/MjAyNjA1MjBfMjEz/MDAxNzc5MjcwNTI4OTc1.aI0F_oY_ugxnzrwkUOGCNp4oZwEKKk6U9Q5Z5B-sXZgg.7UjYA_Cg5p5pVPr5lqQAMnCStd-bvQiDua0Qcn9RmF0g.PNG/image.png?type=s3',
    link: 'https://blog.naver.com/chiu_amc/224291597505',
  },
  {
    id: 15,
    title: '강아지가 초콜릿을 먹었을 때, 바로 병원에 와야 하는 이유',
    category: '응급',
    tags: ['초콜릿섭취', '구토처치', '수액치료'],
    description:
      '초콜릿 섭취 후 구토 처치, 입원 수액, 간수치 확인까지 진행한 응급 케이스입니다.',
    image:
      'https://blogthumb.pstatic.net/MjAyNjA1MjBfMjcx/MDAxNzc5MjY5MjUwMDI4.V5_8rjtbjgxDIbwRour_LB1IWBGrIhTLEtySRMfZ0WYg.ApcLOrxWQRQIz2ba5HtbumlHdLHV1qGZQmZ2HMVUCVUg.PNG/image.png?type=s3',
    link: 'https://blog.naver.com/chiu_amc/224291583541',
  },
  {
    id: 16,
    title: '간수치 상승, 쿠싱 의심과 방광결석까지 함께 확인한 노령견 케이스',
    category: '내과',
    tags: ['간수치', '쿠싱', '방광결석'],
    description:
      '간수치 변화만 보지 않고 호르몬 질환, 방광 상태, 통증 가능성을 함께 평가한 케이스입니다.',
    image:
      'https://blogthumb.pstatic.net/MjAyNjA1MjBfMjcg/MDAxNzc5MjY4MDE2NDk5.KlXtaCXJ0I-Pr4it5wUypQawbNZdGUaaPaZC3GI1a9Ig.nq1gHcnF7gyrNPXIyVMlZBz-AFMi3QVVt7YekpG-dOcg.PNG/image.png?type=s3',
    link: 'https://blog.naver.com/chiu_amc/224291572544',
  },
  {
    id: 17,
    title: '구조묘 입양 후 링웜 이력, DTM 검사 확인 후 중성화까지 진행한 케이스',
    category: '수술',
    tags: ['고양이중성화', 'DTM검사', '마취'],
    description:
      '피부 상태와 기본 검진을 확인한 뒤 고양이 중성화 수술까지 계획한 케이스입니다.',
    image:
      'https://blogthumb.pstatic.net/MjAyNjA1MjBfMTQ2/MDAxNzc5MjY2NDEwMzMx.DHLcg9HHNBeImc5UyJuZANGcMEBNhO1la8zYUnrNKykg.fGLuk4YJhPA_BsT_gIs7km82TrUezpQDSDJFknqC3Ycg.PNG/image.png?type=s3',
    link: 'https://blog.naver.com/chiu_amc/224291539911',
  },
  {
    id: 18,
    title: '고양이가 소변을 못 보면 왜 응급일까요?',
    category: '응급',
    tags: ['요도폐색', '신부전', '비뇨기'],
    description:
      '고양이 배뇨곤란에서 요도폐색, 신장 기능, 흉수 가능성까지 확인한 비뇨기 응급 케이스입니다.',
    image:
      'https://blogthumb.pstatic.net/MjAyNjA1MTFfMjQ4/MDAxNzc4NDc1NzI0NzA2.YBQlvQCRx6v9YAjDsG5cfh7rwkVhnQfM4pPZXC_o2b0g.pdBAnd8d2aeNnol3LOG_8uI-kki9stOdDwnd1N9PUWog.PNG/image.png?type=s3',
    link: 'https://blog.naver.com/chiu_amc/224281726340',
  },
];
