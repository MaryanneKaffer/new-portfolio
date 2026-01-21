import { useEffect, useState } from "react";
import { SiGmail } from "react-icons/si";
import LanguageSwitch from "./languageSwitch";
import { FaBlog, FaDownload, FaGithub, FaLinkedin, FaPowerOff } from "react-icons/fa6";

export default function Links() {
    const [hora, setHora] = useState("")
    const animation = "text-white transition duration-300 group-hover:scale-115"

    useEffect(() => {
        const timer = setInterval(() => {
            setHora(new Date().toLocaleTimeString().slice(0, 5))
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="flex mt-auto text-white w-full">
            <div className="w-full flex gap-2 p-3 rounded-md justify-center transition-all duration-300 border border-white/20 rounded-md backdrop-blur-[2px] 
            shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:border-white/40 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] bg-gradient-to-br from-white/20 to-white/5 items-center md:text-[20px] text-[16px]">
                <button aria-label="decorative off button" className="mr-auto md:w-[5%] w-[13%] group cursor-pointer"><FaPowerOff className={animation} /></button>
                <LanguageSwitch />
                <a href="https://linkedin.com/in/maryanne-käffer/" aria-label="linkedin" className="group" target="_blank"><FaLinkedin className={animation} /></a>
                <a href="https://github.com/MaryanneKaffer/" aria-label="github" className="group" target="_blank"><FaGithub className={animation} /></a>
                <a href="mailto:kaffermaryanne@gmail.com" aria-label="send email" className="group" target="_blank"><SiGmail className={animation} /></a>
                <a href="https://blog-vert-six-94.vercel.app" aria-label="download CV" className="group" target="_blank"><FaDownload className={animation} /></a>
                <a href="https://blog-vert-six-94.vercel.app" aria-label="personal blog" className="group" target="_blank"><FaBlog className={animation} /></a>
                <p className={`${animation} ml-auto md:w-[5%] w-[13%] hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] md:text-[17px]`}>{hora}</p>
            </div>
        </div>
    )
}