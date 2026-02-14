import PageHero from "@app/components/PageHero"
import Container from "@app/components/Container"

export default function BasindaBiz() {
  return (
    <>
      <PageHero 
        title="Basında Biz"
        subtitle="Sektörel yayınlarda yer alan haberlerimiz."
      />

      <Container>
        <section className="py-20 space-y-8">

          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-2">
              Sanayi Dergisi Röportajı
            </h3>
            <p className="text-gray-400">
              2025 yılında sektörün yükselen firmaları arasında gösterildik.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-2">
              İhracat Başarı Ödülü
            </h3>
            <p className="text-gray-400">
              Yüksek ihracat performansımız ile ödüle layık görüldük.
            </p>
          </div>

        </section>
      </Container>
    </>
  )
}
