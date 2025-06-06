import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function GuestHomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <nav className="bg-white shadow px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="text-2xl font-extrabold text-indigo-600">
            CreatorHub
          </span>
          <div className="space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <header className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to <span className="text-indigo-600">CreatorHub</span>
        </h1>
        <p className="text-gray-600 mb-6 max-w-2xl">
          The ultimate platform to manage your creator profile, earn credits,
          and discover amazing content.
        </p>
        <div className="space-x-4">
          <Link
            to="/register"
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 border border-indigo-600 text-indigo-600 font-semibold rounded hover:bg-indigo-50"
          >
            Sign In
          </Link>
        </div>
      </header>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">Track Credits</h3>
            <p className="text-gray-600 text-sm">
              Earn points for daily logins, profile completion, and interacting
              with content.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">Content Feed</h3>
            <p className="text-gray-600 text-sm">
              Discover and interact with aggregated content from Twitter,
              Reddit, and more.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">Dashboard Analytics</h3>
            <p className="text-gray-600 text-sm">
              View your saved content, and credit activity all in one place.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
