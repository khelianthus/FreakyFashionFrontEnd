import { useState, FormEvent, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Search() {
    const [search, setSearch] = useState('')
    const router = useRouter()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch('')
        router.push(`/${search}/`)
    }

  return (
    <form className="w-50 flex justify-center md:justify-between" onSubmit={handleSubmit}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-80 h-9 p-4 pl-10 text-xs text-gray-900 border-0 bg-gray-100 focus:ring-white placeholder-gray-700"
          placeholder="Sök produkt"
          required
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </form>
  )
}
