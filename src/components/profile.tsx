import { useLanguage } from "../context/languageContext";
import GlassCard from "./glassCard";

export default function Profile() {
    const { language } = useLanguage()

    return (
        <div className="flex gap-2">
            <GlassCard classname="w-full">
                <div className="flex gap-2">
                    <img src="/pfp.WebP" alt="Maryanne Käffer" className="border border-white/20 rounded-md sm:h-27 h-16 " />
                    <div className="flex flex-col ">
                        <h1 className="md:text-2xl text-sm">Maryanne Käffer de Faria</h1>
                        <p className="text-white/80 sm:text-base text-[9px] md:leading-normal leading-tight"> {language === "pt" ?
                            "Criativa ★ Tech Enthusiast ★ Front-end Lover ★ Determinada"
                            : "Creative ★ Tech Enthusiast ★ Front-end Lover ★ Determined"
                        }</p>
                        <p className="italic md:text-base text-[11px] md:leading-normal leading-tight">{language === "pt" ? "Sempre evoluindo" : "Always evolving"}</p>
                    </div>
                </div>
            </GlassCard>
            <GlassCard classname="md:w-[170px] md:h-[135px] !p-0 ">
                <img src="/star.gif" alt="star gif" loading="lazy" className="lg:size-[130px] h-20 w-26" />
            </GlassCard>
        </div>
    )
}