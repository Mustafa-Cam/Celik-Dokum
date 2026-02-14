import PageHero from "../../components/PageHero"

export default function KaliteKontrol() {
  return (
    <>
      <PageHero 
        title="Kalite Kontrol"
        subtitle="Tüm üretim süreçlerimiz uluslararası kalite standartlarına uygundur."
      />

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-8">
          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-3">
              Spektrometre Analizi
            </h3>
            <p className="text-gray-400">
              Kimyasal analiz süreçleri modern laboratuvarımızda yapılmaktadır.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-3">
              Mekanik Testler
            </h3>
            <p className="text-gray-400">
              Çekme, sertlik ve darbe testleri uygulanmaktadır.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
