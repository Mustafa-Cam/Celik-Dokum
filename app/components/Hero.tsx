export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <video
        autoPlay
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/videos/celik_dokum.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative text-center z-10 px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          ÇELİĞE ŞEKİL VERİYORUZ
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Endüstriyel döküm çözümlerinde güvenilir ve güçlü üretim altyapısı.
        </p>
      </div>
    </section>
  )
}
