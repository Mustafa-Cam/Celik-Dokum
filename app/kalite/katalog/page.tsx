import PageHero from "../../components/PageHero"
import Container from "../../components/Container"

export default function Katalog() {
  return (
    <>
      <PageHero 
        title="Katalog"
        subtitle="Ürün kataloğumuzu inceleyebilirsiniz."
      />

      <Container>
        <section className="py-20 text-center">
          <button className="bg-red-600 px-8 py-4 rounded-lg hover:bg-red-700 transition">
            PDF Kataloğu İndir
          </button>
        </section>
      </Container>
    </>
  )
}
