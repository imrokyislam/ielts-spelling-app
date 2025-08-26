import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Mistakes() {
  const [mistakes, setMistakes] = useState([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = JSON.parse(localStorage.getItem('mistakes') || '[]')
        setMistakes(stored)
      } catch (err) {
        setMistakes([])
      }
    }
  }, [])

  function clearMistakes() {
    try {
      localStorage.removeItem('mistakes')
    } catch (err) {}
    setMistakes([])
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1 container mx-auto p-4'>
        <h2 className='text-xl font-bold mb-4'>Mistakes</h2>
        {mistakes.length === 0 ? (
          <p>You haven\\'t made any mistakes yet.</p>
        ) : (
          <div>
            <p className='mb-2'>Below is a list of words you misspelled:</p>
            <ul className='list-disc list-inside mb-4'>
              {mistakes.map((word, idx) => (
                <li key={`${word}-${idx}`}>{word}</li>
              ))}
            </ul>
            <button
              className='bg-red-600 text-white px-4 py-2 rounded'
              onClick={clearMistakes}
            >
              Clear mistakes
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
