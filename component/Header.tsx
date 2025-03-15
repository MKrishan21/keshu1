"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import NavDropdown from "./Dropdown"; // Import reusable dropdown

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category: string | null) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <header className="bg-gray-100 border-b px-6 md:px-12">
      <div className="flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <span className="mr-2">🔄</span> Keshoo
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <NavDropdown
            title="Individuals"
            items={[
              { label: "Jobseekers", href: "#" },
              { label: "Freelancers", href: "#" },
            ]}
          />
          <NavDropdown
            title="Businesses"
            items={[
              { label: "Small Businesses", href: "#" },
              { label: "Corporations", href: "#" },
            ]}
          />
          <NavDropdown
            title="Features"
            items={[
              { label: "AI Matching", href: "#" },
              { label: "Resume Builder", href: "#" },
            ]}
          />
          <NavDropdown
            title="Pricing"
            items={[
              { label: "Basic", href: "#" },
              { label: "Premium", href: "#" },
            ]}
          />
          {/* <Link href="#" className="hover:text-black">
            Blog
          </Link> */}
          <NavDropdown title="FAQ" />
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex gap-3">
          <Button variant="outline">Sign in</Button>
          <Button className="bg-black text-white">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <span className="text-2xl font-bold">Menu</span>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`fixed inset-0 bg-white transition-transform duration-300 z-50 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex justify-between items-center p-6 border-b">
            <span className="text-2xl font-bold">Menu</span>
            <button onClick={() => setMenuOpen(false)}>
              <X size={28} />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="p-6">
            {/* Our Clients Section */}
            <div>
              <button
                className="w-full text-left font-medium py-3 border-b"
                onClick={() => toggleCategory("clients")}
              >
                Our Clients
              </button>

              {/* Expandable Items */}
              {openCategory === "clients" && (
                <div className="pl-4 bg-gray-100 py-2 transition-all duration-300">
                  {[
                    "Jobseekers",
                    "Bootcamps",
                    "Outplacement",
                    "Universities",
                    "Whitelabel",
                    "Recruiters",
                    "Agencies",
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="block py-2 text-gray-700 hover:text-black"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Additional Sections */}
            <div>
              <button
                className="w-full text-left font-medium py-3 border-b"
                onClick={() => toggleCategory("features")}
              >
                Features
              </button>
              {openCategory === "features" && (
                <div className="pl-4 bg-gray-100 py-2 transition-all duration-300">
                  <Link href="#" className="block py-2">
                    AI Matching
                  </Link>
                  <Link href="#" className="block py-2">
                    Resume Builder
                  </Link>
                </div>
              )}
            </div>

            <Link href="#" className="block py-3 border-b">
              Blog
            </Link>
            <Link href="#" className="block py-3 border-b">
              FAQ
            </Link>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-3">
              <Button variant="outline">Sign in</Button>
              <Button className="bg-black text-white">Get Started</Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
