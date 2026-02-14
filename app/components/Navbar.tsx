"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <nav className="bg-black text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-widest">
         AVCI ÇELİK DÖKÜM
        </div>

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
              <div className="absolute  left-0 bg-zinc-900 p-4 w-64 shadow-xl">
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
              <div className="absolute  left-0 bg-zinc-900 p-4 w-64 shadow-xl">
                <DropdownLink href="/kalite/kalite-kontrol" text="Kalite Politikası" />
                <DropdownLink href="/kalite/katalog" text="Kalite Sertifikaları" />
                <DropdownLink href="/kalite/laboratuvar" text="Laboratuvar" />
                <DropdownLink href="/kalite/uretim-akisi" text="Üretim Akışı" />
              </div>
            )}

        </div>
        </div>
      </div>
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
