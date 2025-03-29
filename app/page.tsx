import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen bg-black text-white">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">The Creator Verses</h1>
        <br />
        <p className="mt-4 text-lg sm:text-xl md:text-2xl">
          Simplifying access to Islamic knowledge.
        </p>
        <br />
        <p><u>Quick Links</u></p>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <Link
            href="/docs"
            className="bg-gray-900 text-white font-semibold py-2 px-4 rounded hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            href="/docs/Series/The-Story-of-Islam"
            className="bg-gray-900 text-white font-semibold py-2 px-4 rounded hover:bg-gray-700"
          >
            Series
          </Link>
          <Link
            href="https://chatgpt.com/g/g-6737ec71010c8191bf5d89deaef83482-thecreatorverses-islamic-knowledge"
            className="bg-gray-900 text-white font-semibold py-2 px-4 rounded hover:bg-gray-700"
          >
            CustomGPT
          </Link>

        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 p-4">
        © {new Date().getFullYear()} The Creator Verses. All rights reserved.
      </footer>
    </div>
  );
}
