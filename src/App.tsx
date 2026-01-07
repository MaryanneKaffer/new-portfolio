import { FaHeart, FaPaperclip } from "react-icons/fa6"
import GlassCard from "./components/glassCard"
import { Projects } from "./assets/projects"

function App() {
  return (
    <section className="flex flex-col w-full h-full gap-2 text-white text-sm lg:text-base">
      <GlassCard classname="w-full">
        <div className="flex gap-2">
          <img src="/usertile16.jpg" className="border border-white/20 rounded-md sm:h-27 h-18 " />
          <div className="flex flex-col gap-1">
            <h1 className="text-xl">Maryanne Käffer</h1>
          </div>
        </div>
      </GlassCard>
      <div className="flex gap-2">
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
      </div>
    </section>
  )
}

export default App