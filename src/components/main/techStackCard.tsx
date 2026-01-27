import GlassCard from "../common/glassCard"
import { FaWrench } from "react-icons/fa6"
import { Technologies } from "../common/techStack"

export default function TechStackCard() {
    return (
        <GlassCard classname="lg:w-[100%] w-[150px]">
            <div className="justify-items-center flex flex-col gap-1 w-full">
                <div className="flex flex-wrap lg:gap-2 gap-x-1.5 gap-y-1 lg:text-[20px] text-[13px]">
                    {Technologies.map((t: any, i: number) => (
                        <p key={i} className="hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:brightness-125 transition-all">{t}</p>
                    ))}
                </div>
                <span className="flex gap-2 items-center ml-auto ">
                    <FaWrench />
                    <p className="italic">Tech stack</p>
                </span>
            </div>
        </GlassCard>
    )
}