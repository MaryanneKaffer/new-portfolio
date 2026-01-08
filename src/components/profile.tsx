import GlassCard from "./glassCard";

export default function Profile() {
    return (
        <GlassCard classname="w-full">
            <div className="flex gap-2">
                <img src="/usertile16.jpg" className="border border-white/20 rounded-md sm:h-27 h-18 " />
                <div className="flex flex-col gap-1">
                    <h1 className="text-xl">Maryanne Käffer</h1>
                </div>
            </div>
        </GlassCard>
    )
}