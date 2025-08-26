import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex flex-wrap gap-4">
        <Link href="/"><span className="font-bold">Home</span></Link>
        <Link href="/practice"><span>Practice</span></Link>
        <Link href="/custom-section"><span>Custom Section</span></Link>
        <Link href="/mistakes"><span>Mistakes</span></Link>
        <Link href="/timed-challenge"><span>Timed Challenge</span></Link>
        <Link href="/about"><span>About</span></Link>
        <Link href="/settings"><span>Settings</span></Link>
      </nav>
    </header>
  )
}
