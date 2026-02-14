import Container from '@app/components/Container';
import PageHero from '@app/components/PageHero';

export default function HakkımızdaPage() {
    return (
        <main>
            <PageHero
                title="Hakkımızda"
                subtitle="Çelik döküm sektöründe 20+ yıllık deneyim ve uzmanlığımız"
            />

            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Kimiz?
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                            Çelik Döküm İşi olarak, en yüksek kalite standartlarını haiz ürünler sunmaktayız.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Müşteri memnuniyeti ve teknolojik gelişim bizim temel hedeflerimizdir.
                        </p>
                    </div>
                    <div className="bg-gray-200 h-80 rounded-lg"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { number: '20+', label: 'Yıllık Deneyim' },
                        { number: '500+', label: 'Mutlu Müşteri' },
                        { number: '1000+', label: 'Tamamlanan Proje' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center p-6 bg-gray-50 rounded-lg">
                            <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                            <div className="text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </Container>
        </main>
    );
}