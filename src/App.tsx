import { FaHeart, FaPaperclip, FaWrench } from "react-icons/fa6"
import GlassCard from "./components/glassCard"
import { Projects } from "./assets/projects"
import { Technologies } from "./assets/techStack"
import { HiAcademicCap } from "react-icons/hi"
import { useState } from "react"
import ProjectPreview from "./components/projectPreview"
import { GiSpellBook } from "react-icons/gi"
import { useLanguage } from "./context/languageContext";

type Project = {
  name: string
  link: string
  image: string
}

function App() {
  const { language } = useLanguage()
  const [projectView, setProjectView] = useState<Project | null>(null)

  return (
    <section className="flex flex-col w-full h-full gap-2 text-white text-sm lg:text-base">
      <div className="flex flex-col gap-2">
        <span className="flex gap-2">
          <GlassCard classname="w-[200px]">
            <div className="flex flex-col gap-1">
              <span className="flex gap-2 items-center">
                <FaPaperclip />
                <p className="italic">{language === "pt" ? "Top Projetos" : "Star Projects"}</p>
              </span>
              <div className="flex flex-col ml-3">
                {Projects.map((p: any) => (
                  <div key={p.name} className="relative w-fit" onMouseEnter={() => setProjectView(p)} onMouseLeave={() => setProjectView(null)}>
                    <a target="_blank" href={p.link} className="underline hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:brightness-125 transition-all"
                      onMouseEnter={() => setProjectView(p)} onMouseLeave={() => setProjectView(null)}>
                      {p.name}
                    </a>
                    {projectView?.name === p.name && <ProjectPreview data={p} />}
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
          <GlassCard>
            <div className="justify-items-center flex flex-col gap-1">
              <span className="flex gap-2 items-center">
                <GiSpellBook />
                <p className="italic">{language === "pt" ? "Minha Jornada" : "My Journey"}</p>
              </span>
              <p>{language === "pt" ?
                "Desde o início de 2025, venho estudando desenvolvimento front-end de forma independente, com foco em React e JavaScript para criar aplicações web modernas e de alto desempenho. Nos últimos meses, tenho aprofundado minhas habilidades e colocado isso em prática por meio de diferentes projetos, que você pode conferir no meu blog."
                : "Since the beginning of 2025, I have been independently studying front-end development, focusing on React and JavaScript to build modern, high-performance web applications. Over the past months, I’ve been deepening my skills and applying them in practice through different projects, which you can see on my blog."
              }</p>
            </div>
          </GlassCard>
        </span>
        <div className="flex gap-2">
          <span className="flex flex-col gap-2">
            <GlassCard classname="w-[400px]">
              <div className="justify-items-center flex flex-col gap-1 w-full">
                <div className="flex flex-wrap gap-2">
                  {Technologies.map((t: any, i) => (
                    <p key={i} className="hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:brightness-125 transition-all">{t}</p>
                  ))}
                </div>
                <span className="flex gap-2 items-center ml-auto">
                  <FaWrench />
                  <p className="italic">Tech stack</p>
                </span>
              </div>
            </GlassCard>
            <GlassCard classname="w-[400px]">
              <div className="leading-tight ">
                <p>{language === "pt" ? "Engenharia de Software" : "Software Engineering"}</p>
                <span className="text-gray-300">
                  <p>Uninter</p>
                  <p>2025 - 2029</p>
                </span>
              </div>
              <span className="flex gap-2 items-center ml-auto mt-auto">
                <HiAcademicCap />
                <p className="italic">{language === "pt" ? "Formação" : "Academics"}</p>
              </span>
            </GlassCard>
          </span>
          <GlassCard classname="w-full">
            <div className="justify-items-center flex flex-col gap-1">
              <span className="flex gap-2 items-center">
                <FaHeart />
                <p className="italic">{language === "pt" ? "Sobre mim" : "About me"}</p>
              </span>
              <p>{language === "pt" ?
                "Desde criança sempre tive muito contato com computadores e a tecnologia acabou virando parte do meu dia a dia. Cresci jogando videogame e foi daí que nasceu minha curiosidade e interesse por programação."
                : "Since childhood, I’ve always had a lot of contact with computers, and technology naturally became part of my daily life. I grew up playing video games, and that’s where my curiosity and interest in programming began."
              }</p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section >
  )
}

export default App