"use client"

import { FloatingNavbar } from "@/components/ui/floating-navbar"

const navItems = [
  {
    name: "About",
    link: "about",
  },
  {
    name: "Achievements",
    link: "achievements",
  },
  {
    name: "Team",
    link: "team",
  },
  {
    name: "Audience",
    link: "audience",
  },
  {
    name: "Sponsorship",
    link: "sponsorship",
  },
  {
    name: "Partners",
    link: "partners",
  },
  {
    name: "Brand Guidelines",
    link: "brand-guidelines",
  },
  {
    name: "Contact Us",
    link: "contact",
    isButton: true,
  },
]

export default function Navbar() {
  return <FloatingNavbar navItems={navItems} />
}

