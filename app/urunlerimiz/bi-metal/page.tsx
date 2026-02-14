import Container from "@app/components/Container";
import PageHero from "@app/components/PageHero";

export default function BiMetalPage() {
    return (
        <div>
            <PageHero
                title="Bi-Metal Ürünler"
                subtitle="Yüksek kaliteli bi-metal ürünlerimizi keşfedin"
            />

            <Container>
                <section className="py-16">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">Özellikler</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Dayanıklılık</h3>
                            <p className="text-gray-600">Uzun ömürlü ve güvenilir performans</p>
                        </div>
                        <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Kalite</h3>
                            <p className="text-gray-600">En yüksek standartlarda üretilmiştir</p>
                        </div>
                        <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Verimlilik</h3>
                            <p className="text-gray-600">Optimal performans ve enerji tasarrufu</p>
                        </div>
                    </div>
                </section>

                <section className="py-16 border-t border-gray-200">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">Ürün Detayları</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Bi-metal ürünlerimiz endüstrinin en iyi malzemeleri kullanılarak
                        üretilmektedir. Yüksek sıcaklık ve basınç koşullarında güvenilir
                        performans sunar.
                    </p>
                </section>
            </Container>
        </div>
    );
}