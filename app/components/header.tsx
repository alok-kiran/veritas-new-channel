'use client';
import { CATEGORIES } from '@/constants'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="border-b py-6">
    <div className="container mx-auto px-4">
      <Link href="/">
      <div className="flex justify-between items-center mb-6 animate-slide-in">
        <h1 className="text-4xl font-serif font-bold">THE VERITAS NEWS</h1>
      </div>
      </Link>
      {/* Responsive Navigation */}
      <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
        <nav className="flex gap-6 text-sm font-medium whitespace-nowrap min-w-max pb-3">
          {Object.keys(CATEGORIES).map((item, index) => (
            <Link
              key={item}
              href="#"
              className="hover:text-primary transition-colors duration-200 hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  </header>
  )
}

export default Header
