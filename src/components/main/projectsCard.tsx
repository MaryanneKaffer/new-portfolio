import { useState } from "react";
import { useLanguage } from "../../context/languageContext";
import GlassCard from "../common/glassCard";
import { FaPaperclip } from "react-icons/fa6";
import { Projects } from "../../assets/projects";
import ProjectPreview from "../common/projectPreview";

type Project = {
    name: string
    link: string
    image: string
}

export default function ProjectsCard() {
    const { language } = useLanguage()
    const [projectView, setProjectView] = useState<Project | null>(null)

    return (
        <GlassCard classname="w-[200px]">
            <div className="flex flex-col gap-1">
                <span className="flex gap-2 items-center ">
                    <FaPaperclip />
                    <p className="italic">{language === "pt" ? "Top Projetos" : "Star Projects"}</p>
                </span>
                <div className="flex flex-col ml-3 !leading-normal lg:text-base text-[13px]">
                    {Projects.map((p: any) => (
                        <div key={p.name} className="relative w-fit" onMouseEnter={() => setProjectView(p)} onMouseLeave={() => setProjectView(null)}>
                            <a target="_blank" href={p.link} className="underline hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:brightness-125 transition-all"
                                onMouseEnter={() => setProjectView(p)} onMouseLeave={() => setProjectView(null)}>
                                {p.name}
                            </a>
                            {projectView?.name === p.name && <ProjectPreview data={p} lang={language} />}
                        </div>
                    ))}
                </div>
            </div>
        </GlassCard>
    )
}