import { Activity, Bone, HeartHandshake, Scissors, Sparkles, Syringe } from 'lucide-react';

export const centers = [
  {
    slug: 'surgery',
    title: '수술센터',
    eyebrow: 'Surgery Center',
    description:
      '수술 전 평가부터 수술 중 모니터링, 통증 관리와 입원 회복까지 이어지는 과정을 차분하게 확인합니다.',
    worry:
      '보호자는 수술 자체보다 아이가 마취를 잘 견딜 수 있는지, 수술 후 통증과 회복은 어떻게 관리되는지를 가장 걱정합니다.',
    checks: ['수술 필요성과 대안 설명', '마취 전 혈액·영상검사 확인', '수술 중 호흡·혈압·산소포화도 모니터링', '회복기 통증·식욕·활력 변화 관찰'],
    keywords: ['외과수술', '입원관리', '회복평가'],
    relatedCategories: ['수술', '정형외과', '종양'],
    heroImage: '/images/hospital-surgery.png',
    icon: Scissors,
    seoTitle: '도곡치유 동물병원 수술센터 | 수술·마취·회복 관리',
    seoDescription:
      '도곡치유 동물병원 수술센터는 수술 전 평가, 세보플루란 마취, 수술 중 모니터링, 회복 관리를 함께 확인합니다.',
  },
  {
    slug: 'geriatric-anesthesia',
    title: '노령마취센터',
    eyebrow: 'Geriatric Anesthesia',
    description:
      '노령 환자의 마취는 나이만으로 판단하지 않고 심장, 혈액검사, 장기 기능, 현재 복용 약물을 함께 확인합니다.',
    worry:
      '나이가 많아 마취가 위험하다는 말을 들었거나, 심장병과 기저질환이 있어 스케일링과 수술을 미뤄온 보호자에게 중요한 영역입니다.',
    checks: ['심장 상태와 심장초음파 필요성 평가', '혈액검사와 장기 기능 확인', '세보플루란 기반 흡입마취 계획', '마취 중 호흡·혈압·산소포화도 변화 확인'],
    keywords: ['노령마취', '세보플루란', '심장 협진'],
    relatedCategories: ['치과', '심장', '수술'],
    heroImage: '/images/surgery-center.png',
    icon: Syringe,
    seoTitle: '도곡치유 동물병원 노령마취센터 | 세보플루란·심장 협진',
    seoDescription:
      '도곡치유 동물병원 노령마취센터는 노령견·노령묘의 심장 상태, 장기 기능, 마취 위험도를 세밀하게 평가합니다.',
  },
  {
    slug: 'cardiac-collaboration',
    title: '심장협진센터',
    eyebrow: 'Cardiac Collaboration',
    description:
      '마취와 수술 전 심장 상태를 확인하고, 환자별 위험도를 바탕으로 필요한 검사와 협진 방향을 정리합니다.',
    worry:
      '심잡음, 심장병 진단, 노령 환자의 마취를 앞둔 경우에는 수술 여부보다 먼저 심장 상태를 확인하는 과정이 필요합니다.',
    checks: ['심잡음과 기존 심장병 이력 확인', '심장초음파·혈압·혈액검사 검토', '마취 전 위험도 설명', '수술 후 호흡·활력 변화 관찰'],
    keywords: ['심장초음파', '협진', '마취평가'],
    relatedCategories: ['심장', '치과', '내과'],
    heroImage: '/images/surgery-center.png',
    icon: HeartHandshake,
    seoTitle: '도곡치유 동물병원 심장협진센터 | 마취 전 심장 평가',
    seoDescription:
      '도곡치유 동물병원 심장협진센터는 노령 환자와 심장질환 환자의 마취 전 위험도를 함께 평가합니다.',
  },
  {
    slug: 'tumor-surgery',
    title: '종양수술센터',
    eyebrow: 'Tumor Surgery',
    description:
      '종괴 제거, 병리검사, 추적 관리까지 연결해 단순 제거가 아닌 진단 이후의 방향을 함께 고민합니다.',
    worry:
      '피부에 만져지는 혹이 단순 지방종인지, 악성 가능성이 있는지, 제거 후 어떤 검사가 필요한지 보호자가 가장 많이 묻습니다.',
    checks: ['종괴 위치와 크기 변화 확인', '수술 범위와 마취 계획 설명', '병리검사 필요성 안내', '재발·추적 관리 일정 정리'],
    keywords: ['종괴', '병리검사', '종양수술'],
    relatedCategories: ['종양', '수술'],
    heroImage: '/images/hospital-surgery.png',
    icon: Activity,
    seoTitle: '도곡치유 동물병원 종양수술센터 | 종괴 제거·병리검사',
    seoDescription:
      '도곡치유 동물병원 종양수술센터는 피부 종괴와 종양 수술 후 병리검사와 추적 관리를 중요하게 확인합니다.',
  },
  {
    slug: 'dental-scaling',
    title: '치과·스케일링센터',
    eyebrow: 'Dental & Scaling',
    description:
      '구강 통증과 마취 위험도를 함께 고려하며, 노령 환자는 심장 상태까지 확인한 뒤 치과 치료를 계획합니다.',
    worry:
      '스케일링을 해야 하는데 마취가 걱정되거나, 치석보다 잇몸 통증과 치주질환이 더 문제인지 궁금한 보호자에게 필요합니다.',
    checks: ['구강 상태와 통증 부위 확인', '노령 환자 마취 전 평가', '심장·장기 상태 검토', '치료 후 식욕·통증 변화 관찰'],
    keywords: ['스케일링', '발치', '구강통증'],
    relatedCategories: ['치과', '심장'],
    heroImage: '/images/surgery-center.png',
    icon: Sparkles,
    seoTitle: '도곡치유 동물병원 치과·스케일링센터 | 노령마취·구강검진',
    seoDescription:
      '도곡치유 동물병원 치과·스케일링센터는 구강 통증, 치주질환, 노령마취 전 평가를 함께 확인합니다.',
  },
  {
    slug: 'dermatology-allergy',
    title: '피부·알러지센터',
    eyebrow: 'Dermatology & Allergy',
    description:
      '반복되는 피부 문제를 사진 기록, 피부 지표, 검사 결과로 추적하며 보호자가 변화를 이해할 수 있게 정리합니다.',
    worry:
      '가려움, 외이염, 발 핥기, 피부 붉어짐이 반복될 때 단기 처치보다 원인과 변화 추적이 중요합니다.',
    checks: ['피부 사진 기록과 변화 비교', '외이염·알러지 가능성 확인', '필요 시 PCR·배양검사 검토', '재발 시 관리 기준 정리'],
    keywords: ['아토피', '외이염', '피부검사'],
    relatedCategories: ['피부'],
    heroImage: '/images/hospital-lobby.jpg',
    icon: Bone,
    seoTitle: '도곡치유 동물병원 피부·알러지센터 | 아토피·외이염 관리',
    seoDescription:
      '도곡치유 동물병원 피부·알러지센터는 반복되는 피부질환과 외이염을 사진 기록과 검사로 추적 관리합니다.',
  },
];
