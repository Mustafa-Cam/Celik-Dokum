import PageHero from "@app/components/PageHero"
import Container from "@app/components/Container"

export default function Laboratuvar() {
  return (
    <>
      <PageHero 
        title="Laboratuvar"
        subtitle="Modern test ve analiz ekipmanlarımız."
      />

      <Container>
        <section className="py-20">
          <p className="text-gray-400">
            Spektrometre, çekme test cihazı ve sertlik ölçüm ekipmanlarımız ile kalite güvence altındadır.
          </p>
        </section>
      </Container>
    </>
  )
}
