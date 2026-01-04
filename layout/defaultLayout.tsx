type DefaultLayoutProps = {
    children: React.ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col py-6 px-[28vw] bg-[url('/ascent.jpg')]">

            <main className="flex-1">
                {children}
            </main>

        </div>
    )
}