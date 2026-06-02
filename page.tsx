import ThemeCard from '@/app/components/ThemeCard';
import ProfileCard from '@/app/components/ProfileCard';
import InfoCard from '@/app/components/InfoCard';
import TechStackCard from '@/app/components/TechStackCard';
import EducationCard from '@/app/components/EducationCard';
import ObjectivesCard from '@/app/components/ObjectivesCard';
import AboutSection from '@/app/components/AboutSection';
import PortfolioGoalsSection from '@/app/components/PortfolioGoalsSection';
import ExercisesSection from '@/app/components/ExercisesSection';
import Footer from '@/app/components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 py-8 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6">
            <aside className="w-full lg:w-[380px] flex-shrink-0 space-y-6">
              <ThemeCard />
              <ProfileCard />
              <InfoCard />
              <TechStackCard />
              <ObjectivesCard />
              <EducationCard />
            </aside>
            <section className="flex-1 min-w-0 space-y-6">
              <AboutSection />
              <PortfolioGoalsSection />
              <ExercisesSection />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
