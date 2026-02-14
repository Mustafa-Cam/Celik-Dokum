import PageHero from "@app/components/PageHero"
import Container from "@app/components/Container"
import SectionTitle from "@app/components/SectionTitle"

export default function Ihracatlarimiz() {
  return (
    <>
      <PageHero 
        title="İhracatlarımız"
        subtitle="Dünyanın birçok ülkesine güvenle ihracat yapıyoruz."
      />

      <Container>
        <section className="py-20">
          <SectionTitle 
            title="Global Gücümüz"
            subtitle="Avrupa, Orta Doğu ve Afrika pazarlarında aktif üretim ve tedarik."
          />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Avrupa</h3>
              <p className="text-gray-400">Almanya, Fransa, İtalya</p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Orta Doğu</h3>
              <p className="text-gray-400">BAE, Suudi Arabistan</p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Afrika</h3>
              <p className="text-gray-400">Cezayir, Fas</p>
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}
