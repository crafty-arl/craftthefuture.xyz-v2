"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

export function Header() {
  return (
    <header className="sticky top-4 z-50 mx-auto w-[95%] max-w-7xl">
      <div className="flex h-24 sm:h-32 md:h-40 lg:h-48 items-center justify-between rounded-full bg-background/80 px-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-lg supports-[backdrop-filter]:bg-background/40 border border-gray-200/20">
        <Link href="/" className="flex items-center space-x-4 group">
          <Image
            src="/ctf-logo.png"
            alt="CTF Logo"
            width={40}
            height={40}
            className="dark:invert transition-transform group-hover:scale-110 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
          />
          <span className={`${playfair.className} font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight`}>Craft The Future</span>
        </Link>

        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            className="hover:bg-primary/10 text-lg sm:text-xl md:text-2xl"
          >
            Book Demo
          </Button>
          <Button 
            className="bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 text-lg sm:text-xl md:text-2xl px-6 shadow-lg"
          >
            Try Free
          </Button>
        </div>
      </div>
    </header>
  )
}
