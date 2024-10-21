'use client'

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { type CarouselApi } from "@/components/ui/carousel"

const planets = [
  { name: "Sol", path: "/sol" },
  { name: "Mercúrio", path: "/mercurio" },
  { name: "Vênus", path: "/venus" },
  { name: "Terra", path: "/" },
  { name: "Lua", path: "/lua" },
  { name: "Marte", path: "/marte" },
  { name: "Júpiter", path: "/jupiter" },
  { name: "Saturno", path: "/saturno" },
  { name: "Urano", path: "/urano" },
  { name: "Netuno", path: "/netuno" },
]

export default function PlanetSelector() {
  const pathname = usePathname()
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (api) {
      const index = planets.findIndex(planet => planet.path === pathname)
      if (index !== -1) {
        api.scrollTo(index)
        setCurrent(index)
      }
    }
  }, [api, pathname])

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-[500px] sm:w-96 sm:max-w-xs md:w-96 md:max-w-xs absolute top-4 left-0 right-0 mx-auto z-50 "
      setApi={setApi}
    >
      <CarouselContent className="border-none">
        {planets.map((planet, index) => (
          <CarouselItem key={planet.path} className="basis-1/5 flex item-center border-none">
            <Link href={planet.path} passHref>
            <div className="flex items-center justify-center border-none">

            <Card className="w-16 h-16 bg-transparent border-none">
            <CardContent className="flex aspect-square items-center justify-center p-2">
                  <span className={`text-lg px-0 mx-0 text-white font-bold ${current === index ? 'text-primary' : 'text-foreground'}`}>
                    {planet.name}
                  </span>
                </CardContent>
              </Card>
            </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-1 sm:left-4 bg-background/80 hover:bg-background text-foreground" />
      <CarouselNext className="right-1 sm:right-4 bg-background/80 hover:bg-background text-foreground" />
    </Carousel>
  )
}