import { useEffect, useState } from "react";
import { FaBlog, FaGithub, FaLinkedin, FaPowerOff } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Links() {
    const [hora, setHora] = useState("")

    useEffect(() => {
        const timer = setInterval(() => {
            setHora(new Date().toLocaleTimeString().slice(0, 5))
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="flex gap-0.5 mt-auto text-white w-full">
            <div className="w-full flex gap-2 p-3 rounded-xl justify-center transition-all duration-300 backdrop-blur-md border border-white/20 rounded-mdbackdrop-blur-[2px] 
            shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:bg-white/5 hover:border-white/40 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] 
            hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.35) bg-gradient-to-br from-white/20 to-white/5">
                <a href="#" className="mr-auto w-[5%] group"><FaPowerOff size={20} className="text-white transition duration-300 group-hover:scale-110 filter" /></a>
                <a href="https://linkedin.com/in/maryanne-käffer/" className="group" target="_blank"><FaLinkedin size={20} className="text-white  transition  duration-300 group-hover:scale-110 filter" /></a>
                <a href="https://github.com/MaryanneKaffer/" className="group" target="_blank"><FaGithub size={20} className="text-white  transition  duration-300 group-hover:scale-110 filter" /></a>
                <a href="mailto:kaffermaryanne@gmail.com" className="group" target="_blank"><SiGmail size={20} className="text-white  transition  duration-300 group-hover:scale-110 filter" /></a>
                <a href="https://blog-vert-six-94.vercel.app" className="group" target="_blank"><FaBlog size={20} className="text-white  transition  duration-300 group-hover:scale-110 filter" /></a>
                <p className="text-white transition duration-300 filter ml-auto w-[5%] hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">{hora}</p>
            </div>
        </div>
    )
}