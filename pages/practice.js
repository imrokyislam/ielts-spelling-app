import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import defaultWords from '../data/defaultWords'

export default function Practice() {
  const [words, setWords] = useState(defaultWords)
  const [index, setIndex] = useState(0)
  const [input, setInput] = useState('')
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)

  function reset() {
    setIndex(0)
    setScore(0)
    setCompleted(false)
    setInput('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    const currentWord = words[index]
    if (input.trim().toLowerCase() === currentWord.toLowerCase()) {
      setScore(prev => prev + 1)
    } else {
      try {
        const mistakes = JSON.parse(localStorage.getItem('mistakes') || '[]')
        mistakes.push(currentWord)
        localStorage.setItem('mistakes', JSON.stringify(mistakes))
      } catch (err) {}
    }
    setInput('')
    if (index + 1 < words.length) {
      setIndex(prev => prev + 1)
    } else {
      setCompleted(true)
    }
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1 container mx-auto p-4'>
        <h2 className='text-xl font-bold mb-4'>Practice</h2>
        {completed ? (
          <div>
            <p className='mb-4'>
              You scored {score} out of {words.length}.
            </p>
            <button
              className='bg-blue-600 text-white px-4 py-2 rounded'
              onClick={reset}
            >
              Practice again
            </button>
          </div>
        ) : (
          <div>
            <p className='mb-2'>Spell the word:</p>
            <div className='mb-4 text-2xl font-semibold'>
              {words[index]}
            </div>
            <form onSubmit={handleSubmit} className='flex space-x-2'>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                className='border rounded p-2 flex-1'
                autoFocus
              />
              <button
                type='submit'
                className='bg-blue-600 text-white px-4 py-2 rounded'
              >
                Submit
              </button>
            </form>
            <p className='mt-4'>
              Word {index + 1} of {words.length}
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
