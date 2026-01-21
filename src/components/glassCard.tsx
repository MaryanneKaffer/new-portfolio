import { useRef, type ReactNode } from "react"

interface Props {
    children: ReactNode,
    classname?: string
}

export default function GlassCard({ classname, children }: Props) {
    const cardRef = useRef<HTMLDivElement>(null)

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = cardRef.current?.getBoundingClientRect()
        if (!rect) return

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        cardRef.current?.style.setProperty("--x", `${x}px`)
        cardRef.current?.style.setProperty("--y", `${y}px`)
    }

    function handleMouseEnter() {
        cardRef.current?.style.setProperty("--glow", "1")
    }

    function handleMouseLeave() {
        cardRef.current?.style.setProperty("--glow", "0")
    }

    return (
        <div ref={cardRef} onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            className={`flex rounded-md border-2 border-white/20 backdrop-blur-[2px] shadow-[0_8px_30px_rgba(0,0,0,0.25)] 
            transition-[background] duration-300 md:p-3 p-2 ${classname ? classname : "w-fit"} text-white md:text-base text-[11px] md:leading-normal leading-tight`}
            style={{
                background: `
          radial-gradient(
            70px circle at var(--x, 50%) var(--y, 50%),
            rgba(255,255,255,calc(0.15 * var(--glow, 0))),
            transparent 60%
          ),
          linear-gradient(to bottom right, rgba(255, 255, 255, 0.23), rgba(255,255,255,0.05)) `
            }}
        >
            {children}
        </div>
    )
}