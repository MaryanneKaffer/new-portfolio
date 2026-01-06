type DefaultLayoutProps = {
    children: React.ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <div className="h-[100dvh] w-[100dvw] flex flex-col py-6 px-[28vw] bg-[url('/ascent.jpg')]">

            <main className="flex-1 w-full h-full">
                {children}
            </main>

        </div>
    )
}