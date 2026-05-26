import CaseArchive from './components/CaseArchive';
import Header from './components/Header';
import Hero from './components/Hero';
import InquirySection from './components/InquirySection';
import FeatureTreatmentSection from './components/FeatureTreatmentSection';
import PhilosophySection from './components/PhilosophySection';
import SpecialtySection from './components/SpecialtySection';
import SurgeryGallerySection from './components/SurgeryGallerySection';
import TrustSection from './components/TrustSection';
import ValueSection from './components/ValueSection';
import VisualProofSection from './components/VisualProofSection';

export default function App() {
  return (
    <div className="min-h-screen text-ink">
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <VisualProofSection />
        <ValueSection />
        <SurgeryGallerySection />
        <FeatureTreatmentSection />
        <SpecialtySection />
        <CaseArchive />
        <PhilosophySection />
        <InquirySection />
      </main>
      <footer className="border-t border-oat bg-[linear-gradient(135deg,#ffffff,#eef7ff)] px-5 py-8">
        <div className="mx-auto max-w-6xl">
          <img
            src="/images/logo-wide.png"
            alt="동물병원 치유"
            className="h-11 w-auto object-contain"
          />
          <p className="mt-3 max-w-3xl text-xs leading-6 text-ink/58">
            본 페이지의 케이스 내용은 환자별 상태에 따라 결과가 달라질 수 있으며, 정확한
            진단과 치료 계획은 내원 후 결정됩니다.
          </p>
          <p className="mt-5 text-xs text-ink/45">
            Copyright 2026 Dogok Healing Veterinary Clinic. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
