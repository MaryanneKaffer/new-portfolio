import { useRef, type ReactNode } from "react"

interface Props {
    children: ReactNode
}

export default function GlassCard({ children }: Props) {
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
            className="relative w-full flex rounded-md border border-white/20 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-[2px] shadow-[0_8px_30px_rgba(0,0,0,0.25)] 
            overflow-hidden transition-[background] duration-300 p-3"
            style={{
                background: `
          radial-gradient(
            70px circle at var(--x, 50%) var(--y, 50%),
            rgba(255,255,255,calc(0.15 * var(--glow, 0))),
            transparent 60%
          ),
          linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0.05)) `
            }}
        >
            {children}
        </div>
    )
}