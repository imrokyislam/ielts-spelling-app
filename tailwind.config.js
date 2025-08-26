/**
 * Tailwind CSS configuration
 *
 * The `content` array lists the directories where Tailwind
 * should look for class names. When you add new pages or
 * components, make sure they live in `pages` or `components`
 * so that Tailwind can find them.
 */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
