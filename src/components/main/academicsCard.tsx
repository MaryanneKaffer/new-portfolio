import { HiAcademicCap } from "react-icons/hi"
import { useLanguage } from "../../context/languageContext"
import GlassCard from "../common/glassCard"

export default function AcademicsCard() {
    const { language } = useLanguage()

    return (
        <GlassCard classname="lg:w-[100%] flex lg:flex-row flex-col">
            <div className="leading-tight ">
                <p className="-mb-1">{language === "pt" ? "Engenharia de Software" : "Software Engineering"}</p>
                <span className="text-gray-300 lg:text-base text-[10px]">
                    <p className="-mb-1">Uninter</p>
                    <p>2025 - 2029</p>
                </span>
            </div>
            <span className="flex gap-2 items-center ml-auto mt-auto ">
                <HiAcademicCap />
                <p className="italic">{language === "pt" ? "Formação" : "Academics"}</p>
            </span>
        </GlassCard>
    )
}