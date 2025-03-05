import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">404</h2>
        <p className="text-lg text-gray-400 mb-6">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          href="/tasks"
          className="inline-block bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
