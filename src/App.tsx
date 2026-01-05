import GlassCard from "./components/glassCard"
import Links from "./components/links"

function App() {
  return (
    <section className="flex-col size-full">
      <GlassCard>
        <div className="flex gap-2">
          <img src="/usertile16.jpg" className="border border-white/20 rounded-md" />
          <div className="flex flex-col gap-1 text-white">
            <h1 className="text-xl">Maryanne Käffer</h1>
            <Links/>
          </div>
        </div>
      </GlassCard>
    </section>
  )
}

export default App
