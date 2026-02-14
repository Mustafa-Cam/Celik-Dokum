import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export const metadata = {
  title: "Çelik Döküm",
  description: "Endüstriyel Çelik Döküm Çözümleri",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className="bg-[#111111] text-white">
        <Navbar />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
