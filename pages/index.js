import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

/**
 * Home page
 *
 * This page introduces the app and provides links to the
 * primary sections. It uses the Header and Footer components
 * defined in the `components` directory.
 */
export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1 container mx-auto p-4'>
        <h2 className='text-2xl font-bold mb-4'>Welcome to the Spelling App</h2>
        <p className='mb-4'>
          Practice spelling, challenge yourself against the clock, and
          create custom word lists. Track your mistakes and watch your
          progress improve over time.
        </p>
        <ul className='space-y-3'>
          <li>
            <Link href='/practice' className='font-medium hover:underline'>
              Practice
            </Link>{' '}– Word-based spelling practice.
          </li>
          <li>
            <Link href='/timed-challenge' className='font-medium hover:underline'>
              Timed Challenge
            </Link>{' '}– Test your skills against the clock.
          </li>
          <li>
            <Link href='/custom-section' className='font-medium hover:underline'>
              Custom Section
            </Link>{' '}– Create your own word sets.
          </li>
          <li>
            <Link href='/mistakes' className='font-medium hover:underline'>
              Mistakes
            </Link>{' '}– Review words you spelled incorrectly.
          </li>
          <li>
            <Link href='/about' className='font-medium hover:underline'>
              About
            </Link>{' '}– Learn about this app.
          </li>
          <li>
            <Link href='/settings' className='font-medium hover:underline'>
              Settings
            </Link>{' '}– Configure your preferences.
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}
