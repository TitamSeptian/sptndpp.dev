"use client"

import {Moon, Sun} from "lucide-react"
import {useTheme} from "next-themes"

export function ThemeToggle(){
  const {theme, setTheme} = useTheme()
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="relative inline-flex"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <Sun  size="16" className="transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0"/>
      <Moon size="16" className="transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100"/>
      <span className="sr-only">Toggle Theme</span>
    </button>
  )
}