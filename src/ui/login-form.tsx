"use client";

import { useActionState } from "react";
import { FormState, loginAction } from "@/lib/action";

export default function LoginForm() {
  const initialState: FormState = { error: "" };
  const [state, formAction, pending] = useActionState(
    loginAction,
    initialState,
  );

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full p-3 border border-gray-400 bg-white text-black rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-semibold mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="w-full p-3 border border-gray-400 bg-white text-black rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          placeholder="Enter your password"
        />
      </div>

      {state.error && <p className="text-red-500 text-sm">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className={`w-full py-3 rounded-lg font-semibold text-lg transition ${
          pending
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-black text-white hover:bg-gray-700"
        }`}
      >
        {pending ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
