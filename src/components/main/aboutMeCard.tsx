import { useLanguage } from "../../context/languageContext"
import GlassCard from "../common/glassCard"
import { FaHeart } from "react-icons/fa6"

export default function AboutMeCard() {
    const { language } = useLanguage()

    return (
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
    )
}