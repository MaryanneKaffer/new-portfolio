import GlassCard from "./glassCard";

export default function Profile() {
    return (
        <div className="flex gap-2">
            <GlassCard classname="w-full">
                <div className="flex gap-2">
                    <img src="/usertile16.jpg" className="border border-white/20 rounded-md sm:h-27 h-18 " />
                    <div className="flex flex-col gap-1">
                        <h1 className="text-2xl">Maryanne Käffer de Faria</h1>
                    </div>
                </div>
            </GlassCard>
            <GlassCard classname="w-[170px] h-[135px]">
                
            </GlassCard>
        </div>
    )
}