# 도곡치유 동물병원 전문센터 아카이브

네이버 블로그에 쌓인 진료 및 수술 케이스를 병원 홈페이지 안에서 전문센터 아카이브처럼 보여주는 React + Vite 랜딩페이지입니다.

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 안내되는 로컬 주소로 접속하면 페이지를 확인할 수 있습니다.

## 구성

- `src/components/Header.jsx`: 상단 로고, 메뉴, 모바일 햄버거 메뉴
- `src/components/Hero.jsx`: 메인 문구와 CTA 영역
- `src/components/TrustSection.jsx`: 병원 신뢰 요소 카드
- `src/components/SpecialtySection.jsx`: 전문센터 카드
- `src/components/CaseArchive.jsx`: 필터가 있는 케이스 아카이브
- `src/components/PhilosophySection.jsx`: 수술과 마취 철학 소개
- `src/components/InquirySection.jsx`: 전화, 위치, 예약 CTA
- `src/data/cases.js`: 임시 케이스 데이터

## 케이스 링크 연결

각 케이스 데이터에는 추후 네이버 블로그 URL을 넣을 수 있도록 `link` 필드가 포함되어 있습니다.

```js
{
  title: '노령견 스케일링, 마취 전 심장 평가가 중요한 이유',
  category: '치과',
  tags: ['노령마취', '세보플루란', '심장 협진'],
  description: '...',
  link: 'https://blog.naver.com/...'
}
```

## 검색 등록 준비

검색 노출을 위해 아래 파일을 포함했습니다.

- `index.html`: SEO 메타태그, Open Graph, 구조화 데이터
- `public/robots.txt`: 검색엔진 크롤링 허용
- `public/sitemap.xml`: 사이트맵
- `public/site.webmanifest`: 웹앱/브라우저 기본 정보

현재 SEO 주소는 Vercel 배포 주소인 `https://dogokchiu.vercel.app/`를 사용합니다.
나중에 실제 병원 도메인이 정해지면 아래 항목의 도메인을 실제 주소로 바꿔주세요.

- `index.html`의 `canonical`, `og:url`, `og:image`, JSON-LD `url`, `image`
- `public/robots.txt`의 `Sitemap`
- `public/sitemap.xml`의 모든 `loc`

배포 후에는 네이버 서치어드바이저와 구글 서치 콘솔에 사이트를 등록하고 `sitemap.xml`을 제출하면 됩니다.
