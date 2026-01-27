import GlassCard from "./components/common/glassCard"
import ProjectsCard from "./components/main/projectsCard"
import JourneyCard from "./components/main/journeyCard"
import AboutMeCard from "./components/main/aboutMeCard";
import TechStackCard from "./components/main/techStackCard";
import AcademicsCard from "./components/main/academicsCard";

function App() {
  return (
    <section className="flex flex-col w-full h-full gap-2 text-white text-sm lg:text-base">
      <div className="flex flex-col gap-2">

        <span className="flex gap-2">
          <ProjectsCard />
          <JourneyCard />
        </span>

        <div className="flex gap-2">
          <AboutMeCard />
          <span className="flex flex-col gap-2 lg:w-[80%]">
            <TechStackCard />
            <AcademicsCard />
          </span>
        </div>

        <GlassCard classname="lg:h-[300px]">
          <video autoPlay muted loop playsInline src="/main/cat.mp4" aria-label="cats gif" className="object-cover object-bottom w-full h-full" />
        </GlassCard>
      </div>
    </section >
  )
}

export default App