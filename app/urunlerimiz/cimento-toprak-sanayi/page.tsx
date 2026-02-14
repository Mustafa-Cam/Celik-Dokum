import  Container from "@app/components/Container";
import  PageHero  from "@app/components/PageHero";

export default function CimentoToprakSanayiPage() {
    return (
        <>
            <PageHero
                title="Çimento & Toprak Sanayi"
                subtitle="Çimento ve toprak sanayi için yüksek kaliteli döküm ürünleri"
            />
            <Container>
                <section className="py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Ürün Özellikleri
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Sektörün ihtiyaçlarına uygun, dayanıklı ve uzun ömürlü döküm
                                çözümleri sunuyoruz.
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                    Yüksek sıcaklık direnci
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                    Korozyon önleyici
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                    Standart uyumlu
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                            <span className="text-gray-400">Ürün Görseli</span>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    );
}