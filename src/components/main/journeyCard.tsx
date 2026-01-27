import { useLanguage } from "../../context/languageContext";
import GlassCard from "../common/glassCard";
import { GiSpellBook } from "react-icons/gi";

export default function JourneyCard() {
    const { language } = useLanguage()

    return (
        <GlassCard>
            <div className="justify-items-center flex flex-col gap-1">
                <span className="flex gap-2 items-center ">
                    <GiSpellBook />
                    <p className="italic">{language === "pt" ? "Minha Jornada" : "My Journey"}</p>
                </span>
                <p className="">{language === "pt" ?
                    "Desde o início de 2025, venho estudando desenvolvimento front-end de forma independente, com foco em React e TypeScript para criar aplicações web modernas e de alto desempenho. Nos últimos meses, tenho aprofundado minhas habilidades e colocado isso em prática por meio de diferentes projetos, toda minha trajetória registrada no meu GitHub."
                    : "Since the beginning of 2025, I have been independently studying front-end development, focusing on React and TypeScript to build modern, high-performance web applications. Over the past months, I’ve been deepening my skills and applying them in practice through different projects, with my entire journey documented on my GitHub."
                }</p>
            </div>
        </GlassCard>
    )
}