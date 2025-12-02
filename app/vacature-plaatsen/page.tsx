'use client'
import { useState } from 'react'

export default function VacaturePlaatsen() {
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // API call naar /api/post-job
    alert('Vacature geplaatst!')
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Vacature plaatsen (gratis)</h1>
        <form onSubmit={onSubmit} className="space-y-6">
          <input name="title" placeholder="Functietitel" required className="w-full p-4 border rounded-lg" />
          <textarea name="description" placeholder="Beschrijving" rows={8} required className="w-full p-4 border rounded-lg" />
          <input name="requirements" placeholder="Eisen (comma-separated)" className="w-full p-4 border rounded-lg" />
          <input name="company" placeholder="Bedrijfsnaam" required className="w-full p-4 border rounded-lg" />
          <input name="email" type="email" placeholder="E-mail" required className="w-full p-4 border rounded-lg" />
          <button type="submit" disabled={loading} className="w-full bg-indigo-600 text-white py-4 rounded-lg font-bold">
            {loading ? 'Plaatsen...' : 'Vacature plaatsen'}
          </button>
        </form>
      </div>
    </div>
  )
}
