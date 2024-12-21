import Link from "next/link"
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  const footerSections = {
    Company: [
      { name: "About us", href: "#" },
      { name: "Contact us", href: "#" },
      { name: "Careers", href: "#" },
    ],
    "Business Size": [
      { name: "Entrepreneurs", href: "#" },
      { name: "SMBs", href: "#" },
      { name: "Growth Business", href: "#" },
      { name: "Household Services", href: "#" },
      { name: "Enterprise", href: "#" },
    ],
    "Business Type": [
      { name: "Health & Wellness", href: "#" },
      { name: "Sports", href: "#" },
      { name: "Learning Activities", href: "#" },
      { name: "Household Services", href: "#" },
      { name: "Miscellaneous", href: "#" },
    ],
    Download: [
      { name: "Business App", href: "#", icon: "apple", key: "business-app-apple" },
      { name: "Business App", href: "#", icon: "google", key: "business-app-google" },
      { name: "User App", href: "#", icon: "apple", key: "user-app-apple" },
      { name: "User App", href: "#", icon: "google", key: "user-app-google" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms & Conditions", href: "#" },
      { name: "Return Policy", href: "#" },
    ],
    "Contact us": [
      { name: "support@rmax.com", href: "mailto:support@rmax.com" },
      { name: "+91-8459671235", href: "tel:+918459671235" },
    ],
  }

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {Object.entries(footerSections).map(([title, items]) => (
            <div key={title}>
              <h3 className="font-semibold text-white mb-4">{title}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.key || item.name}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors inline-flex items-center gap-2"
                    >
                      {item.icon && (
                        <img
                          src={`/${item.icon}-icon.svg`}
                          alt={`${item.icon} icon`}
                          className="w-5 h-5"
                        />
                      )}
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © 2024 Copyright, All Right Reserved@RMax
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-white">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-white">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-white">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

