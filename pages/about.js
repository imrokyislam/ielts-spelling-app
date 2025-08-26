import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1 container mx-auto p-4'>
        <h2 className='text-xl font-bold mb-4'>About</h2>
        <p className='mb-4'>
          This spelling practice app was created to help you improve your English spelling skills. It provides several modes:
        </p>
        <ul className='list-disc list-inside mb-4 space-y-1'>
          <li>Practice mode for regular spelling exercises.</li>
          <li>Timed challenges to test your speed and accuracy.</li>
          <li>A custom section for building your own word lists.</li>
          <li>A mistakes page so you can review and learn from errors.</li>
        </ul>
        <p className='mb-4'>
          Built with Next.js and Tailwind CSS, the site uses static export to run on any web server without the need for a Node.js backend. Your progress and mistakes are stored locally in your browser, keeping your data private and secure.
        </p>
      </main>
      <Footer />
    </div>
  )
}
