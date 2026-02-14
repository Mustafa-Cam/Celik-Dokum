import PageHero from "@app/components/PageHero"
import Container from "@app/components/Container"

export default function InsaatMaden() {
  return (
    <>
      <PageHero 
        title="İnşaat & Maden Kankasör"
        subtitle="Yüksek dayanımlı döküm çözümleri."
      />

      <Container>
        <section className="py-20">
          <p className="text-gray-400 leading-8">
            Ağır hizmet koşullarına uygun yüksek aşınma dayanımlı çelik döküm ürünler üretmekteyiz.
          </p>
        </section>
      </Container>
    </>
  )
}
