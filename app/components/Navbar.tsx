"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
    const [open, setOpen] = useState<string | null>(null)
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <nav className="bg-black text-white fixed w-full z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold tracking-widest">
                    AVCI ÇELİK DÖKÜM
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    <Link href="/" className="hover:text-red-600 transition">
                        Anasayfa
                    </Link>

                    <div
                        onMouseEnter={() => setOpen("kurumsal")}
                        onMouseLeave={() => setOpen(null)}
                        className="relative"
                    >
                        <span className="cursor-pointer hover:text-red-600 transition">
                            Kurumsal
                        </span>
                        {open === "kurumsal" && (
                            <div className="absolute left-0 bg-zinc-900 p-4 w-64 shadow-xl">
                                <DropdownLink href="/kurumsal/hakkimizda" text="Hakkımızda" />
                                <DropdownLink href="/kurumsal/ihracatlarimiz" text="İhracatlarımız" />
                                <DropdownLink href="/kurumsal/basinda-biz" text="Basında Biz" />
                                <DropdownLink href="/kurumsal/dokumhaneden-goruntuler" text="Dökümhaneden Görüntüler" />
                            </div>
                        )}
                    </div>

                    <div
                        onMouseEnter={() => setOpen("Ürünlerimiz")}
                        onMouseLeave={() => setOpen(null)}
                        className="relative"
                    >
                        <span className="cursor-pointer hover:text-red-600 transition">
                            Ürünlerimiz
                        </span>
                        {open === "Ürünlerimiz" && (
                            <div className="absolute left-0 bg-zinc-900 p-4 w-64 shadow-xl">
                                <DropdownLink href="/urunlerimiz/insaat-maden-kankasor" text="İnşaat & Maden Kankasör" />
                                <DropdownLink href="/urunlerimiz/otomotiv-is-makineleri" text="Otomotiv & İş Makineleri" />
                                <DropdownLink href="/urunlerimiz/makine-imalat-sanayi" text="Makine İmalat Sanayi" />
                                <DropdownLink href="/urunlerimiz/cimento-toprak-sanayi" text="Çimento & Toprak Sanayi" />
                            </div>
                        )}
                    </div>

                    <div
                        onMouseEnter={() => setOpen("Kalite")}
                        onMouseLeave={() => setOpen(null)}
                        className="relative"
                    >
                        <span className="cursor-pointer hover:text-red-600 transition">
                            Kalite
                        </span>
                        {open === "Kalite" && (
                            <div className="absolute left-0 bg-zinc-900 p-4 w-64 shadow-xl">
                                <DropdownLink href="/kalite/kalite-kontrol" text="Kalite Politikası" />
                                <DropdownLink href="/kalite/katalog" text="Kalite Sertifikaları" />
                                <DropdownLink href="/kalite/laboratuvar" text="Laboratuvar" />
                                <DropdownLink href="/kalite/uretim-akisi" text="Üretim Akışı" />
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden text-white text-2xl cursor-pointer focus:outline-none"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-zinc-900 p-4 space-y-4">
                    <Link href="/" className="block hover:text-red-600 transition">
                        Anasayfa
                    </Link>
                    <div>
                        <button
                            onClick={() => setOpen(open === "kurumsal" ? null : "kurumsal")}
                            className="w-full text-left hover:text-red-600 transition font-semibold"
                        >
                            Kurumsal
                        </button>
                        {open === "kurumsal" && (
                            <div className="pl-4 space-y-2 mt-2">
                                <DropdownLink href="/kurumsal/hakkimizda" text="Hakkımızda" />
                                <DropdownLink href="/kurumsal/ihracatlarimiz" text="İhracatlarımız" />
                                <DropdownLink href="/kurumsal/basinda-biz" text="Basında Biz" />
                                <DropdownLink href="/kurumsal/dokumhaneden-goruntuler" text="Dökümhaneden Görüntüler" />
                            </div>
                        )}
                    </div>
                    <div>
                        <button
                            onClick={() => setOpen(open === "Ürünlerimiz" ? null : "Ürünlerimiz")}
                            className="w-full text-left hover:text-red-600 transition font-semibold"
                        >
                            Ürünlerimiz
                        </button>
                        {open === "Ürünlerimiz" && (
                            <div className="pl-4 space-y-2 mt-2">
                                <DropdownLink href="/urunlerimiz/insaat-maden-kankasor" text="İnşaat & Maden Kankasör" />
                                <DropdownLink href="/urunlerimiz/otomotiv-is-makineleri" text="Otomotiv & İş Makineleri" />
                                <DropdownLink href="/urunlerimiz/makine-imalat-sanayi" text="Makine İmalat Sanayi" />
                                <DropdownLink href="/urunlerimiz/cimento-toprak-sanayi" text="Çimento & Toprak Sanayi" />
                            </div>
                        )}
                    </div>
                    <div>
                        <button
                            onClick={() => setOpen(open === "Kalite" ? null : "Kalite")}
                            className="w-full text-left hover:text-red-600 transition font-semibold"
                        >
                            Kalite
                        </button>
                        {open === "Kalite" && (
                            <div className="pl-4 space-y-2 mt-2">
                                <DropdownLink href="/kalite/kalite-kontrol" text="Kalite Politikası" />
                                <DropdownLink href="/kalite/katalog" text="Kalite Sertifikaları" />
                                <DropdownLink href="/kalite/laboratuvar" text="Laboratuvar" />
                                <DropdownLink href="/kalite/uretim-akisi" text="Üretim Akışı" />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    )
}

function DropdownLink({ href, text }: { href: string; text: string }) {
    return (
        <Link
            href={href}
            className="block py-2 hover:text-red-600 transition"
        >
            {text}
        </Link>
    )
}
