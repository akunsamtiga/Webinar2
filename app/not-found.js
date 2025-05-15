// app/not-found.js
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-800 font-sans">
      <div className="text-center max-w-lg px-6 py-12">
        <h1 className="text-6xl font-extrabold mb-4 text-gray-900">404</h1>
        <p className="text-lg mb-6 text-gray-600">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="inline-block bg-gray-900 text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-gray-800 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
// This is a custom 404 page for a Next.js application. It provides a user-friendly message and a link to return to the homepage.