import Links from "../src/components/links"

type DefaultLayoutProps = {
    children: React.ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <div className="h-[100dvh] w-[100dvw] flex flex-col py-6 xl:px-[28vw] lg:px-[20vw] md:px-[15vw] sm:px-[10vw] px-3 bg-[url('/ascent.jpg')]">

            <main className="flex-1 w-full h-full">
                {children}
            </main>

            <footer>
                <Links />
            </footer>
        </div>
    )
}