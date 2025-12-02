export function Hero() {
  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Sollicitanten 10× sneller vinden met AI
        </h1>
        <p className="text-xl mb-12">
          Onze AI leest élk cv en scoort kandidaten direct.
        </p>
        <div className="flex gap-6 justify-center">
          <a href="/vacatures" className="bg-white text-indigo-600 px-10 py-5 rounded-lg font-bold">
            Bekijk vacatures
          </a>
          <a href="/vacature-plaatsen" className="border-4 border-white px-10 py-5 rounded-lg font-bold">
            Plaats vacature
          </a>
        </div>
      </div>
    </div>
  )
}
