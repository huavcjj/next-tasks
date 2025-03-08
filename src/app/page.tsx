"use client";

import { useState } from "react";
import RegisterForm from "@/ui/register-form";
import LoginForm from "@/ui/login-form";
import { motion } from "framer-motion";

export default function Page() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6">
      <BackgroundAnimation />

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute w-full max-w-md bg-white bg-opacity-95 p-10 rounded-2xl shadow-2xl backdrop-blur-lg text-black transition-all duration-300"
      >
        <h1 className="text-4xl font-extrabold mb-6 text-center">
          {isRegister ? "Create a New Account" : "Sign in to Your Account"}
        </h1>
        <p className="text-gray-700 text-base text-center mb-8">
          {isRegister
            ? "Get started with managing your tasks seamlessly."
            : "Access your tasks and stay organized."}
        </p>

        <div className="transition-all duration-300">
          {isRegister ? <RegisterForm /> : <LoginForm />}
        </div>

        <div className="mt-8 text-center">
          <p className="text-base text-gray-600">
            {isRegister
              ? "Already have an account?"
              : "First time here? Join us!"}
          </p>
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="mt-3 text-black text-lg font-semibold underline transition-all duration-300 hover:text-gray-500"
          >
            {isRegister ? "Sign in" : "Sign up"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-500 to-gray-800 opacity-50"></div>

      <div className="absolute w-96 h-96 bg-gray-200 opacity-40 blur-3xl rounded-full top-16 left-16 animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-gray-400 opacity-30 blur-3xl rounded-full bottom-20 right-20 animate-pulse delay-200"></div>

      <div className="absolute w-72 h-72 bg-blue-400 opacity-20 blur-3xl rounded-full top-1/4 left-1/3 animate-pulse delay-300"></div>
      <div className="absolute w-72 h-72 bg-white opacity-10 blur-3xl rounded-full bottom-1/4 right-1/3 animate-pulse delay-500"></div>
    </div>
  );
}
