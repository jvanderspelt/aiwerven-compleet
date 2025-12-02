export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Sollicitanten 10× sneller vinden met AI
        </h1>
        <p className="text-xl md:text-2xl mb-12">
          Onze AI leest élk cv en scoort kandidaten direct.<br />
          Praat alleen nog met wie écht past.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="/vacatures" className="bg-white text-indigo-600 px-10 py-5 rounded-lg text-xl font-bold hover:bg-gray-100">
            Bekijk vacatures
          </a>
          <a href="/vacature-plaatsen" className="border-4 border-white px-10 py-5 rounded-lg text-xl font-bold hover:bg-white/10">
            Vacature plaatsen (gratis)
          </a>
        </div>
      </div>
    </div>
  )
}
