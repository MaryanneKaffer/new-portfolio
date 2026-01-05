import { FaBlog, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Links() {
    return (
        <div className="flex gap-0.5 mt-auto text-white ">
            <div className=" flex gap-2 p-3 rounded-xl transition-all duration-300 bg-white/5 backdrop-blur-md border border-white/20 
            hover:bg-white/5 hover:border-white/40 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.35)">
                <a href="https://linkedin.com/in/maryanne-käffer/" className="group" target="_blank"><FaLinkedin size={20} className="  text-white  transition  duration-300 group-hover:scale-110 filter " /></a>
                <a href="https://github.com/MaryanneKaffer/" className="group" target="_blank"><FaGithub size={20} className="  text-white  transition  duration-300 group-hover:scale-110 filter " /></a>
                <a href="mailto:kaffermaryanne@gmail.com" className="group" target="_blank"><SiGmail size={20} className="  text-white  transition  duration-300 group-hover:scale-110 filter " /></a>
                <a href="https://blog-vert-six-94.vercel.app" className="group" target="_blank"><FaBlog size={20} className="  text-white  transition  duration-300 group-hover:scale-110 filter " /></a>
            </div>
        </div>
    )
}