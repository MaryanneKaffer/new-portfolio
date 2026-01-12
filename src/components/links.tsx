import { useEffect, useState } from "react";
import { FaBlog, FaGithub, FaLinkedin, FaPowerOff } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import LanguageSwitch from "./languageSwitch";

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
            shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:border-white/40 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] bg-gradient-to-br from-white/20 to-white/5 items-center">
                <a href="#" className="mr-auto md:w-[5%] w-[13%] group"><FaPowerOff size={20} className={animation} /></a>
                <LanguageSwitch />
                <a href="https://linkedin.com/in/maryanne-käffer/" className="group" target="_blank"><FaLinkedin size={20} className={animation} /></a>
                <a href="https://github.com/MaryanneKaffer/" className="group" target="_blank"><FaGithub size={20} className={animation} /></a>
                <a href="mailto:kaffermaryanne@gmail.com" className="group" target="_blank"><SiGmail size={20} className={animation} /></a>
                <a href="https://blog-vert-six-94.vercel.app" className="group" target="_blank"><FaBlog size={20} className={animation} /></a>
                <p className={`${animation} ml-auto md:w-[5%] w-[13%] hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] text-[17px]`}>{hora}</p>
            </div>
        </div>
    )
}