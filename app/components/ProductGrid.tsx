import Link from "next/link"

const products = [
  {
    title: "İnşaat & Maden Kankasör",
    link: "/urunlerimiz/insaat-maden-kankasor",
  },
  {
    title: "Otomotiv & İş Makineleri",
    link: "/urunlerimiz/otomotiv-is-makineleri",
  },
  {
    title: "Çimento & Toprak Sanayi",
    link: "/urunlerimiz/cimento-toprak-sanayi",
  },
  {
    title: "Makine İmalat Sanayi",
    link: "/urunlerimiz/makine-imalat-sanayi",
  },
  {
    title: "Bi Metal",
    link: "/urunlerimiz/bi-metal",
  },
]

export default function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="group bg-zinc-900 p-10 rounded-lg hover:bg-red-600 transition duration-500"
          >
            <h3 className="text-2xl font-bold mb-4 group-hover:text-white">
              {item.title}
            </h3>
            <p className="text-gray-400 group-hover:text-white">
              Detayları Gör →
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
