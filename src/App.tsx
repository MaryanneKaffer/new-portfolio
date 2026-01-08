import { FaHeart, FaPaperclip, FaWrench } from "react-icons/fa6"
import GlassCard from "./components/glassCard"
import { Projects } from "./assets/projects"
import { Technologies } from "./assets/techSTack"
import { HiAcademicCap } from "react-icons/hi"

function App() {
  return (
    <section className="flex flex-col w-full h-full gap-2 text-white text-sm lg:text-base">
      <div className="flex flex-col gap-2">
        <span className="flex gap-2">
          <GlassCard classname="w-[200px]">
            <div className="flex flex-col gap-1">
              <span className="flex gap-2 items-center">
                <FaPaperclip />
                <p>Star Projects</p>
              </span>
              <div className="flex flex-col ml-3">
                {Projects.map((p) => (
                  <a href={p.link} className="w-fit underline hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:brightness-125 transition-all">{p.name}</a>
                ))}
              </div>
            </div>
          </GlassCard>
          <GlassCard>
            <div className="justify-items-center flex flex-col gap-1">
              <span className="flex gap-2 items-center">
                <FaHeart />
                <p>About me</p>
              </span>
              <p>I have been involved with programming since childhood and am always looking to learn and grow. In recent months, I have been focusing my studies on front-end development, using technologies such as React and JavaScript to build modern and high-performance web applications.</p>
            </div>
          </GlassCard>
        </span>
        <div className="flex gap-2">
          <span className="flex flex-col gap-2">
            <GlassCard classname="w-[400px]">
              <div className="justify-items-center flex flex-col gap-1 w-full">
                <div className="flex flex-wrap gap-2">
                  {Technologies.map((t) => (
                    <p className="hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:brightness-125 transition-all">{t}</p>
                  ))}
                </div>
                <span className="flex gap-2 items-center ml-auto">
                  <FaWrench />
                  <p>Tech stack</p>
                </span>
              </div>
            </GlassCard>
            <GlassCard classname="w-[400px]">
              <div className="leading-tight ">
                <p>Software Engineer</p>
                <span className="text-gray-300">
                  <p>Uninter</p>
                  <p>2025 - 2029</p>
                </span>
              </div>
              <span className="flex gap-2 items-center ml-auto mt-auto">
                <HiAcademicCap />
                <p>Academics</p>
              </span>
            </GlassCard>
          </span>
          <GlassCard classname="w-full">
            *
          </GlassCard>
        </div>
      </div>
    </section >
  )
}

export default App