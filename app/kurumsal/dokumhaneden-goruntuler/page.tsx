import PageHero from "@app/components/PageHero"
import Container from "@app/components/Container"

export default function DokumGoruntuler() {
  return (
    <>
      <PageHero 
        title="Dökümhaneden Görüntüler"
        subtitle="Üretim tesisimizden kareler."
      />

      <Container>
        <section className="py-20 grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-800 h-64 rounded-lg"></div>
          <div className="bg-zinc-800 h-64 rounded-lg"></div>
          <div className="bg-zinc-800 h-64 rounded-lg"></div>
          <div className="bg-zinc-800 h-64 rounded-lg"></div>
          <div className="bg-zinc-800 h-64 rounded-lg"></div>
          <div className="bg-zinc-800 h-64 rounded-lg"></div>
        </section>
      </Container>
    </>
  )
}
