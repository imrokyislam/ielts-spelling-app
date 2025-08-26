import { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import defaultWords from '../data/defaultWords'

export default function TimedChallenge() {
  const [words] = useState(defaultWords)
  const [index, setIndex] = useState(0)
  const [input, setInput] = useState('')
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(10)
  const timerRef = useRef(null)
  const [duration, setDuration] = useState(10)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('timerDuration')
      if (stored) {
        const parsed = parseInt(stored, 10)
        if (!Number.isNaN(parsed) && parsed > 0) {
          setDuration(parsed)
          setTimeLeft(parsed)
        }
      }
    }
  }, [])

  useEffect(() => {
    if (completed) return
    setTimeLeft(duration)
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleTimeout()
          return duration
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timerRef.current)
  }, [index, completed, duration])

  function handleTimeout() {
    const currentWord = words[index]
    try {
      const mistakes = JSON.parse(localStorage.getItem('mistakes') || '[]')
      mistakes.push(currentWord)
      localStorage.setItem('mistakes', JSON.stringify(mistakes))
    } catch (err) {}
    if (index + 1 < words.length) {
      setIndex(prev => prev + 1)
      setInput('')
    } else {
      setCompleted(true)
      clearInterval(timerRef.current)
    }
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
    if (index + 1 < words.length) {
      setIndex(prev => prev + 1)
      setInput('')
    } else {
      setCompleted(true)
      clearInterval(timerRef.current)
    }
  }

  function reset() {
    setIndex(0)
    setScore(0)
    setInput('')
    setCompleted(false)
    setTimeLeft(duration)
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1 container mx-auto p-4'>
        <h2 className='text-xl font-bold mb-4'>Timed Challenge</h2>
        {completed ? (
          <div>
            <p className='mb-4'>You scored {score} out of {words.length}.</p>
            <button className='bg-blue-600 text-white px-4 py-2 rounded nClick={reset}>
              Play again
            </button>
          </div>
        ) : (
          <div>
            <p className='mb-2'>Time left: {timeLeft} second{timeLeft === 1 ? '' : 's'}</p>
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
              <button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded'>
                Submit
              </button>
            </form>
            <p className='mt-4'>Word {index + 1} of {words.length}</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
