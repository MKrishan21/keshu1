"use client";

import { useState } from "react";
import Link from "next/link";

interface NavDropdownProps {
  title: string;
  items?: { label: string; href: string }[];
}

export default function NavDropdown({ title, items }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div>
        {isOpen && (
          <div className="size-2 rounded-full bg-black absolute -translate-y-2"></div>
        )}
        <span className="hover:text-black cursor-pointer">{title}</span>
      </div>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
