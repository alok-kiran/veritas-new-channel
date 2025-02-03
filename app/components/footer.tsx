import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Separator } from './ui/separator'

function Footer() {
  return (
    <footer className="bg-muted mt-12 py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-3xl md:text-sm">
        {["About Us", "Services", "Connect", "Subscribe"].map((section, index) => (
          <div
            key={section}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {section === "Subscribe" ? (
              <>
                <p className="text-sm mb-4">
                  Get the latest news and updates delivered to your inbox
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700 hover-scale transition-all duration-200">
                  Subscribe Now
                </Button>
              </>
            ) : (
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors duration-200">
                    {section === "About Us" ? "About Us" : section === "Services" ? "Subscription" : "Contact Us"}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors duration-200">
                    {section === "About Us" ? "Terms of Use" : section === "Services" ? "Mobile App" : "Feedback"}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors duration-200">
                    {section === "About Us" ? "Privacy Policy" : section === "Services" ? "E-Paper" : "Social Media"}
                  </Link>
                </li>
              </ul>
            )}
          </div>
        ))}
      </div>
      <Separator className="my-8" />
      <div className="text-center text-sm text-muted-foreground animate-fade-in">
        © {new Date().getFullYear()} The Veritas News. All rights reserved.
      </div>
    </div>
  </footer>
  )
}

export default Footer
