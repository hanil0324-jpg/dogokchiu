import CaseArchive from './components/CaseArchive';
import CenterPage from './components/CenterPage';
import EquipmentSection from './components/EquipmentSection';
import FeatureTreatmentSection from './components/FeatureTreatmentSection';
import Header from './components/Header';
import Hero from './components/Hero';
import InquirySection from './components/InquirySection';
import PhilosophySection from './components/PhilosophySection';
import StaffPage from './components/StaffPage';
import SpecialtySection from './components/SpecialtySection';
import SurgeryGallerySection from './components/SurgeryGallerySection';
import SurgeryTimelineSection from './components/SurgeryTimelineSection';
import TrustSection from './components/TrustSection';
import ValueSection from './components/ValueSection';
import VisualProofSection from './components/VisualProofSection';

function Footer() {
  return (
    <footer className="border-t border-oat bg-[linear-gradient(135deg,#ffffff,#eef7ff)] px-5 py-8">
      <div className="mx-auto max-w-6xl">
        <img
          src="/images/logo-wide.png"
          alt="도곡치유 동물병원"
          className="h-11 w-auto object-contain"
        />
        <p className="mt-3 max-w-3xl break-keep text-xs leading-6 text-ink/58">
          본 페이지의 케이스 내용은 환자별 상태에 따라 결과가 달라질 수 있으며, 정확한 진단과
          치료 계획은 내원 후 결정됩니다.
        </p>
        <p className="mt-5 text-xs text-ink/45">
          Copyright 2026 Dogok Healing Veterinary Clinic. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function getCenterSlug() {
  if (typeof window === 'undefined') {
    return null;
  }

  const match = window.location.pathname.match(/^\/centers\/([^/]+)/);
  return match?.[1] || null;
}

function getStaffSlug() {
  if (typeof window === 'undefined') {
    return null;
  }

  const match = window.location.pathname.match(/^\/staff\/([^/]+)/);
  return match?.[1] || null;
}

export default function App() {
  const centerSlug = getCenterSlug();
  const staffSlug = getStaffSlug();

  if (centerSlug) {
    return (
      <div className="min-h-screen text-ink">
        <Header />
        <main>
          <CenterPage slug={centerSlug} />
          <InquirySection />
        </main>
        <Footer />
      </div>
    );
  }

  if (staffSlug) {
    return (
      <div className="min-h-screen text-ink">
        <Header />
        <main>
          <StaffPage slug={staffSlug} />
          <InquirySection />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen text-ink">
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <EquipmentSection />
        <VisualProofSection />
        <ValueSection />
        <SurgeryTimelineSection />
        <SurgeryGallerySection />
        <FeatureTreatmentSection />
        <SpecialtySection />
        <CaseArchive />
        <PhilosophySection />
        <InquirySection />
      </main>
      <Footer />
    </div>
  );
}
