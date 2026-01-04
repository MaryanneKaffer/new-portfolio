import GlassCard from "./components/glassCard"

function App() {
  return (
    <section className="flex-col size-full">
      <GlassCard>
        <div className="flex gap-2  ">
          <img src="/usertile16.jpg" className=" border-2 border-white"/>
          <h1 className="text-xl">Maryanne Käffer</h1>
        </div>
      </GlassCard>
    </section>
  )
}

export default App
