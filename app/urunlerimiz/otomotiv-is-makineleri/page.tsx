type Product = {
  id: string;
  title: string;
  category: "Otomotiv" | "İş Makinesi";
  short: string;
  specs: string[];
  imageAlt?: string;
};

export const metadata = {
  title: "Otomotiv & İş Makinaları — Ürünlerimiz",
  description:
    "Çelik döküm ürünleri: otomotiv parçaları ve iş makineleri bileşenleri. Örnek ürünler ve teknik bilgiler.",
};

const PRODUCTS: Product[] = [
  {
    id: "p1",
    title: "Motor Gövde Parçası (Çelik Döküm)",
    category: "Otomotiv",
    short: "Yüksek dayanımlı motor gövde uygulamaları için çelik döküm parça.",
    specs: [
      "Yüzey: kumlanmış ve ısıl işlemli",
      "Ağırlık: 12–20 kg",
      "Tolerans: ±0.2 mm",
    ],
    imageAlt: "Motor gövde çelik döküm",
  },
  {
    id: "p2",
    title: "Şasi Bağlantı Ayağı",
    category: "İş Makinesi",
    short: "İş makineleri yük taşıyıcıları için yüksek mukavemetli şasi ayağı.",
    specs: [
      "Malzeme: sertleştirilmiş çelik",
      "Koruma: fosfat kaplama",
      "Ömür: uzun vadeli",
    ],
    imageAlt: "Şasi bağlantı ayağı",
  },
  {
    id: "p3",
    title: "Fren Kaliper Tutucu",
    category: "Otomotiv",
    short: "Yüksek sıcaklığa dayanıklı fren kaliper tutucular.",
    specs: [
      "Isı dayanımı: 600°C",
      "Aşınma: düşük",
      "Montaj: CNC işlenmiş yüzey",
    ],
    imageAlt: "Fren kaliper tutucu",
  },
  {
    id: "p4",
    title: "Kepçe Pivot Mili Bağlantısı",
    category: "İş Makinesi",
    short: "Kepçe hareketini sağlayan dayanıklı pivot bağlantısı.",
    specs: [
      "Yük taşıma: yüksek",
      "Bakım: kolay erişimli gresleme",
      "Gevşeme önleyici tasarım",
    ],
    imageAlt: "Kepçe pivot mili",
  },
];

function IconPlaceholder({ title }: { title?: string }) {
  return (
    <svg
      role="img"
      aria-label={title || "ürün"}
      width="100%"
      height="140"
      viewBox="0 0 400 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="bg-gray-100 rounded-lg"
    >
      <rect width="400" height="140" rx="8" fill="#f3f4f6" />
      <g opacity="0.6" fill="#cbd5e1">
        <rect x="20" y="30" width="120" height="80" rx="6" />
        <rect x="160" y="20" width="220" height="100" rx="6" />
      </g>
    </svg>
  );
}

export default function Page() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-12">
        <div className="mb-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Otomotiv & İş Makinaları
          </h1>
          <p className="text-lg text-gray-600">
            Çelik döküm çözümleri: otomotiv ve iş makinesi komponentleri.
            Dayanıklılık, hassasiyet ve üretim tecrübesi.
          </p>
        </div>
        <div className="text-gray-700">
          <strong>Ürün Sayısı:</strong> {PRODUCTS.length}
        </div>
      </header>

      <section className="mb-12 flex flex-col sm:flex-row gap-6">
        <div className="flex-1">
          <label className="sr-only" htmlFor="search">
            Ürün ara
          </label>
          <input
            id="search"
            placeholder="Ürün adı veya özellik ara..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <button className="px-4 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition">
            Tümü
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition">
            Otomotiv
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition">
            İş Makinesi
          </button>
        </div>
      </section>

      <section
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        aria-label="Ürün listesi"
      >
        {PRODUCTS.map((p) => (
          <article
            key={p.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <figure className="m-0">
              <IconPlaceholder title={p.imageAlt} />
            </figure>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {p.title}
              </h3>
              <p className="text-gray-600 mb-4">{p.short}</p>
              <ul className="space-y-2 mb-6">
                {p.specs.map((s, i) => (
                  <li key={i} className="text-sm text-gray-700">
                    • {s}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {p.category}
                </span>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Detaylar →
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <footer className="border-t border-gray-200 pt-8 text-center text-gray-600">
        <small>
          İletişim için: info@ornekdomain.com • Fabrika: Çelik Döküm Tesisi
        </small>
      </footer>
    </main>
  );
}
