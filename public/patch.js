(function () {

  /* ===== FIX 1: 케이스 아카이브 폴백 표시 ===== */
  var CASES = [
    { title: '건강검진과 스케일링, 심장초음파까지 함께 본 케이스', cat: '치과', tags: ['스케일링', '심장초음파', '노령마취'], url: 'https://blog.naver.com/chiu_amc/224295025082', img: '/images/dog-dental-scaling-heart-check.png' },
    { title: '강아지 피부 종괴, 비만세포종 수술 케이스', cat: '종양', tags: ['종양수술', '세보플루란', '병리검사'], url: 'https://blog.naver.com/chiu_amc/224292374452', img: '/images/mast-cell-tumor-surgery-dog.png' },
    { title: '어린 강아지 뒷다리 파행, 경골 조면 견열골절', cat: '정형외과', tags: ['성장판', '정형외과', '수술'], url: 'https://blog.naver.com/chiu_amc/224294510285', img: '/images/puppy-tibial-tuberosity-fracture.png' },
    { title: 'CADESI index로 관리한 아토피·알러지성 피부염 케이스', cat: '피부', tags: ['아토피', '알러지', 'CADESI'], url: 'https://blog.naver.com/chiu_amc/224296033864', img: '/images/atopy-cadesi-dog-skin.jpg' },
    { title: '강아지 이물 섭취, 개복수술 전 내시경으로 제거한 케이스', cat: '내시경', tags: ['내시경', '비절개', '이물'], url: 'https://blog.naver.com/chiu_amc/224294504325', img: '/images/endoscopy-foreign-body-dog.png' },
    { title: '강아지 심장사상충 2기, 심장초음파로 치료 방향을 잡은 케이스', cat: '심장', tags: ['심장초음파', '혈액검사', '심장사상충'], url: 'https://blog.naver.com/chiu_amc/224291519849', img: '/images/surgery-anesthesia-monitoring.png' },
    { title: '입술·발가락·귓바퀴 종괴, 한 번의 마취로 함께 제거한 케이스', cat: '수술', tags: ['종괴제거', '세보플루란', '마취계획'], url: 'https://blog.naver.com/chiu_amc/224291483708', img: '/images/hospital-surgery.png' },
    { title: '치석만 보이는 문제가 아닐 때, 잇몸 속 문제까지 확인한 케이스', cat: '치과', tags: ['스케일링', '치주염', '구강검사'], url: 'https://blog.naver.com/chiu_amc/224292328104', img: '/images/dog-dental-scaling-heart-check.png' },
    { title: '노령견 설사, 장염만이 아니라 췌장과 심장질환까지 본 케이스', cat: '심장', tags: ['노령견', '췌장염', '심장병'], url: 'https://blog.naver.com/chiu_amc/224294517138', img: '/images/advanced-surgery-center.png' },
    { title: '강아지가 물을 많이 마실 때, 다음다뇨 원인을 확인한 케이스', cat: '내과', tags: ['다음다뇨', '혈액검사', '노령견검진'], url: 'https://blog.naver.com/chiu_amc/224293569916', img: '/images/veterinary-hospital-lobby.jpg' },
    { title: '11살 닥스훈트 건강검진, 노령견은 수치로 확인해야 합니다', cat: '심장', tags: ['노령견건강검진', 'NT-proBNP', 'SDMA'], url: 'https://blog.naver.com/chiu_amc/224292367150', img: '/images/surgery-center.png' },
    { title: '강아지가 갑자기 토했어요, CRP 상승과 췌장·장염 가능성', cat: '응급', tags: ['구토', 'CRP', '입원치료'], url: 'https://blog.naver.com/chiu_amc/224291609025', img: '/images/hospital-lobby.jpg' },
  ];

  function buildCaseCard(c) {
    return '<a href="' + c.url + '" target="_blank" rel="noopener" style="display:block;border-radius:1.25rem;overflow:hidden;background:var(--surface,#2a2f3a);border:1px solid rgba(255,255,255,0.08);text-decoration:none;color:inherit;transition:transform 0.2s;" onmouseover="this.style.transform=\'translateY(-4px)\'" onmouseout="this.style.transform=\'\'">' +
      '<img src="' + c.img + '" alt="' + c.title + '" style="width:100%;aspect-ratio:16/9;object-fit:cover;display:block;opacity:0.85;" onerror="this.style.display=\'none\'">' +
      '<div style="padding:1.25rem;">' +
        '<span style="display:inline-block;background:rgba(201,168,76,0.15);color:rgba(201,168,76,0.9);font-size:0.7rem;font-weight:700;border-radius:999px;padding:0.2rem 0.75rem;margin-bottom:0.5rem;">' + c.cat + '</span>' +
        '<h3 style="font-size:0.95rem;font-weight:600;line-height:1.5;margin:0 0 0.75rem;color:rgba(255,255,255,0.88);">' + c.title + '</h3>' +
        '<div style="display:flex;flex-wrap:wrap;gap:0.3rem;">' + c.tags.map(function(t) { return '<span style="font-size:0.68rem;background:rgba(255,255,255,0.07);color:rgba(201,168,76,0.7);border-radius:999px;padding:0.15rem 0.6rem;">#' + t + '</span>'; }).join('') + '</div>' +
        '<p style="margin:0.75rem 0 0;font-size:0.78rem;color:rgba(201,168,76,0.8);font-weight:600;">블로그 원문 보기 →</p>' +
      '</div>' +
    '</a>';
  }

  function fixArchive() {
    var loading = document.getElementById('rss-loading');
    var errBlock = document.getElementById('rss-error');
    var fallback = document.getElementById('archive-fallback');
    var rssGrid = document.getElementById('rss-grid');
    if (!fallback) return;

    // RSS 로딩이 3초 이상 걸리면 폴백 표시
    setTimeout(function () {
      var gridVisible = rssGrid && rssGrid.style.display !== 'none' && rssGrid.children.length > 0;
      if (gridVisible) return; // 실제 RSS 로드 성공 시 건드리지 않음

      if (loading) loading.style.display = 'none';
      if (rssGrid) rssGrid.style.display = 'none';
      if (errBlock) errBlock.style.display = 'block';   // 부모 div 표시
      fallback.style.display = 'grid';
      fallback.style.gridTemplateColumns = 'repeat(auto-fill,minmax(280px,1fr))';
      fallback.style.gap = '1.25rem';
      if (!fallback.children.length) {
        fallback.innerHTML = CASES.map(buildCaseCard).join('');
      }
    }, 3000);
  }

  /* ===== FIX 2: 전문센터 카드에 링크 추가 ===== */
  var CENTER_BLOG_LINKS = [
    'https://blog.naver.com/chiu_amc?categoryNo=44',
    'https://blog.naver.com/chiu_amc?categoryNo=43',
    'https://blog.naver.com/chiu_amc?categoryNo=42',
    'https://blog.naver.com/chiu_amc?categoryNo=41',
    'https://blog.naver.com/chiu_amc?categoryNo=40',
    'https://blog.naver.com/chiu_amc?categoryNo=39',
  ];

  function fixCenters() {
    var cards = document.querySelectorAll('.center-item');
    if (!cards.length) return;
    cards.forEach(function (card, i) {
      if (card.tagName === 'A') return; // 이미 링크인 경우 건드리지 않음
      var link = CENTER_BLOG_LINKS[i] || 'https://blog.naver.com/chiu_amc';
      card.style.cursor = 'pointer';
      card.addEventListener('click', function () {
        window.open(link, '_blank', 'noopener');
      });
    });
  }

  function init() {
    fixArchive();
    fixCenters();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
