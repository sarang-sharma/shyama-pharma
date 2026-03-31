export default function NotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-white font-sans">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-neutral-300">404</h1>
          <p className="mt-4 text-lg text-neutral-600">Page not found</p>
          <a
            href="/"
            className="mt-6 inline-block rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700"
          >
            Go Home
          </a>
        </div>
      </body>
    </html>
  );
}
