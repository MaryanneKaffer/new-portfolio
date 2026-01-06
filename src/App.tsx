import GlassCard from "./components/glassCard"
import Links from "./components/links"

function App() {
  return (
    <section className="flex flex-col w-full h-full gap-2">
      <GlassCard>
        <div className="flex gap-2">
          <img src="/usertile16.jpg" className="border border-white/20 rounded-md h-27 " />
          <div className="flex flex-col gap-1 text-white">
            <h1 className="text-xl">Maryanne Käffer</h1>
          </div>
        </div>
      </GlassCard>
      <GlassCard>a</GlassCard>
      <Links />
    </section>
  )
}

export default App