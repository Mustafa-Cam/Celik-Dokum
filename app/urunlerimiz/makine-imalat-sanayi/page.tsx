import Container from '@/app/components/Container';
import PageHero from '@/app/components/PageHero';
import React from 'react';

export default function MachineMimalatSanayiPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}

            <PageHero
                title="Makine İmalat Sanayi"
                subtitle="Yüksek kaliteli çelik döküm ürünleriyle makine sektörüne hizmet veriyoruz."
            />

            {/* Products Section */}
            <Container>
            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-12 text-center">Ürünlerimiz</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: 'Pompa Gövdeleri', desc: 'Endüstriyel pompa uygulamaları için' },
                        { title: 'Valf Gövdeleri', desc: 'Yüksek basınç valf sistemleri' },
                        { title: 'Koruma Parçaları', desc: 'Makine koruması için özel tasarım' },
                    ].map((product, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold mb-2 text-blue-600">{product.title}</h3>
                            <p className="text-gray-600">{product.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-blue-50 py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Neden Bizi Seçin?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex gap-4">
                            <span className="text-2xl">✓</span>
                            <div>
                                <h3 className="font-semibold mb-2">Yüksek Kalite</h3>
                                <p className="text-gray-700">Uluslararası standartlara uygun üretim</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-2xl">✓</span>
                            <div>
                                <h3 className="font-semibold mb-2">Güvenilir Teslimat</h3>
                                <p className="text-gray-700">Zamanında ve eksiksiz teslimat garantisi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </Container>
        </div>
    );
}