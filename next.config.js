/**
 * @type {import('next').NextConfig}
 *
 * This configuration tells Next.js to produce a fully static
 * site via `next export` when you run `npm run export`. By
 * using the `output: 'export'` option the app can be hosted
 * on any static file host such as cPanel or shared hosting.
 */
const nextConfig = {
  // Enable React strict mode for additional development checks.
  reactStrictMode: true,
  // Export the site as a collection of HTML files.
  output: 'export',
}

module.exports = nextConfig
