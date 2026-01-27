import { useEffect, useState } from "react"
import Links from "../src/components/common/links"
import Profile from "../src/components/main/profileCard"

type DefaultLayoutProps = {
    children: React.ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
    const [bg, setBg] = useState("")
    
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 1504) {
                setBg("bg-[url('/bg/bgPc.webp')]")
            } else {
                setBg("bg-[url('/bg/bgMb.webp')]")
            }
        }

        handleResize() 
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <div className={`max-h-[100dvh] h-[100dvh] min-w-[100dvw] flex flex-col py-6 2xl:px-[28vw] lg:px-[18vw] md:px-[15vw] sm:px-[10vw] px-3 ${bg} bg-cover bg-start bg-no-repeat gap-2`}>
            <footer>
                <Profile />
            </footer>

            <main className="flex-1 w-full h-full">
                {children}
            </main>

            <footer>
                <Links />
            </footer>
        </div>
    )
}