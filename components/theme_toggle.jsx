"use client"
import { assets } from "@/assets/assets"
import { useTheme } from "next-themes"
import Image from "next/image"
import React from "react"

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full glass hover:bg-dark-100 transition-colors"
    >
      <Image src={assets.moon_icon} alt="Theme" width={20} height={20} />
    </button>
  )
}

export default ThemeToggle
