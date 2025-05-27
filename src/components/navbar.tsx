"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm">
      {/* Mobile View Header */}
      <div className="md:hidden flex items-center justify-between p-4">
        <Link href="/" className="text-blue-500 text-xl font-semibold">
          AEON
        </Link>
        <div className="flex items-center gap-2">
          {/* Search Icon */}
          <button className="p-2 cursor-pointer">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Toggle Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 cursor-pointer"
          >
            {isOpen ? (
              // X icon
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="black"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="black"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t">
          <div className="flex flex-col py-2">
            <Link href="/" className="px-4 py-3 text-gray-600 hover:bg-gray-50">
              Showcase
            </Link>
            <Link href="/" className="px-4 py-3 text-gray-600 hover:bg-gray-50">
              Docs
            </Link>
            <Link href="/" className="px-4 py-3 text-gray-600 hover:bg-gray-50">
              Blog
            </Link>
            <Link href="/" className="px-4 py-3 text-gray-600 hover:bg-gray-50">
              Analytics
            </Link>
            <Link href="/" className="px-4 py-3 text-gray-600 hover:bg-gray-50">
              Commerce
            </Link>
            <Link href="/" className="px-4 py-3 text-gray-600 hover:bg-gray-50">
              Templates
            </Link>
            <Link href="/" className="px-4 py-3 text-gray-600 hover:bg-gray-50">
              Enterprise
            </Link>
          </div>
        </div>
      )}

      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-xl font-semibold text-blue-500">
            AEON
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Showcase
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Docs
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Blog
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Analytics
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Templates
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Enterprise
          </Link>
        </div>

        {/* Desktop Search */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search documentation..."
            className="px-4 py-2 rounded-md cursor-pointer bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </nav>
  );
}
