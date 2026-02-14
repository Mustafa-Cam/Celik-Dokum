import PageHero from "@app/components/PageHero"
import Container from "@app/components/Container"

export default function UretimAkisi() {
  return (
    <>
      <PageHero 
        title="Üretim Akışı"
        subtitle="Planlama'dan sevkiyata kadar tüm süreçler kontrol altında."
      />

      <Container>
        <section className="py-20 space-y-6">
          <div className="bg-zinc-900 p-6 rounded-lg">Model Hazırlama</div>
          <div className="bg-zinc-900 p-6 rounded-lg">Döküm Süreci</div>
          <div className="bg-zinc-900 p-6 rounded-lg">Isıl İşlem</div>
          <div className="bg-zinc-900 p-6 rounded-lg">Kalite Kontrol</div>
        </section>
      </Container>
    </>
  )
}
