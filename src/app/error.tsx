"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error occurred:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Something went wrong</h2>
        <p className="text-lg text-gray-400 mb-6">
          An unexpected error has occurred. Please try again or log in.
        </p>
        <div className="flex gap-4">
          <button
            onClick={reset}
            className="bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="bg-gray-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-600 transition"
          >
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
