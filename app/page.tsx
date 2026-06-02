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
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-8 md:py-12 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            
            <aside className="w-full lg:w-[380px] flex-shrink-0 space-y-6">
              <div className="animate-fade-in-up"><ThemeCard /></div>
              <div className="animate-fade-in-up animation-delay-100"><ProfileCard /></div>
              <div className="animate-fade-in-up animation-delay-200"><InfoCard /></div>
              <div className="animate-fade-in-up animation-delay-300"><TechStackCard /></div>
              <div className="animate-fade-in-up animation-delay-400"><ObjectivesCard /></div>
              <div className="animate-fade-in-up animation-delay-500"><EducationCard /></div>
            </aside>

            {/* Main Content (Cột nội dung chính bên phải) */}
            <section className="flex-1 min-w-0 space-y-8 lg:space-y-10 pt-2 lg:pt-0">
              <div className="animate-fade-in-up animation-delay-200"><AboutSection /></div>
              <div className="animate-fade-in-up animation-delay-300"><PortfolioGoalsSection /></div>
              <div className="animate-fade-in-up animation-delay-400"><ExercisesSection /></div>
            </section>
            
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}