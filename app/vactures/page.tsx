export default function Vacatures() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Open vacatures</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Voorbeeld vacature */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold mb-2">Senior Developer</h2>
            <p className="text-gray-600 mb-4">Amsterdam • €4.000 - €6.000</p>
            <p className="text-gray-700 mb-6">Volledige job description...</p>
            <a href="/solliciteren/1" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold">
              Solliciteer nu
            </a>
          </div>
          {/* Voeg meer toe */}
        </div>
      </div>
    </div>
  )
}
