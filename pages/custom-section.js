import Header from '../components/Header'
import Footer from '../components/Footer'

export default function CustomSection() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">Custom Section</h2>
        <p>This feature will be implemented later.</p>
      </main>
      <Footer />
    </div>
  )
}
