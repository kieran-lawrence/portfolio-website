import './globals.css'

export const metadata = {
    title: 'Code Website | Developer Portfolio',
    description: 'A portfolio website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}