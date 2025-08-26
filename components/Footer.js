/**
 * A simple footer component that sits at the bottom of the page. It
 * displays the current year and the application name. Keeping this
 * in a separate component avoids repeating markup across pages.
 */
export default function Footer() {
  return (
    <footer className="bg-gray-200 text-center p-4 mt-auto">
      <p>&copy; {new Date().getFullYear()} Spelling App</p>
    </footer>
  )
}
