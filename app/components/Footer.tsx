export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        <div>
          <h3 className="text-white text-xl font-bold mb-4">
            ÇELİK DÖKÜM
          </h3>
          <p>
            Endüstriyel çelik döküm çözümlerinde güvenilir üretim ortağınız.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Hızlı Menü</h4>
          <ul className="space-y-2">
            <li>Anasayfa</li>
            <li>Kurumsal</li>
            <li>Ürünlerimiz</li>
            <li>Kalite</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">İletişim</h4>
          <p>Organize Sanayi Bölgesi</p>
          <p>Türkiye</p>
          <p>info@celikdokum.com</p>
        </div>

      </div>

      <div className="text-center mt-12 text-sm text-gray-600">
        © {new Date().getFullYear()} Çelik Döküm. Tüm hakları saklıdır.
      </div>
    </footer>
  )
}
