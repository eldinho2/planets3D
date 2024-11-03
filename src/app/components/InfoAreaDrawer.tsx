"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { ChevronRightIcon, GlobeIcon, RulerIcon, ClockIcon, MountainIcon, ThermometerIcon, CloudIcon, WindIcon, AtomIcon } from "lucide-react"
import { useEffect, useState } from "react"
import Link from 'next/link'

interface InfoProps {
  name: string
  description: string
  distances: {
    distanciaApartirdaTerra: string
    distanciaApartirDoSol: string
    tempoDeViagem: string
    diametro: string
  }[]
  terrentype: string
  uniqueFeature?: string
}

const planetColors = {
  Sol: "bg-yellow-500",
  Mercúrio: "bg-gray-400",
  Vênus: "bg-yellow-600",
  Terra: "bg-blue-500",
  Lua: "bg-gray-300",
  Marte: "bg-red-500",
  Júpiter: "bg-orange-400",
  Saturno: "bg-yellow-300",
  Urano: "bg-teal-400",
  Netuno: "bg-blue-600"
}

const planetAnimations = {
  Sol: {
    initial: { skew: 15, opacity: 0 },
    animate: { skew: 0, opacity: 1 },
    transition: { duration: 0.9, type: "spring" }
  },
  Mercúrio: {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5, type: "spring" }
  },
  Vênus: {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.7, type: "spring" }
  },
  Terra: {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, type: "spring" }
  },
  Lua: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5, type: "spring" }
  },
  Marte: {
    initial: { rotate: -90, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    transition: { duration: 0.8, type: "spring" }
  },
  Júpiter: {
    initial: { scale: 1.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 1, type: "spring" }
  },
  Saturno: {
    initial: { skew: 15, opacity: 0 },
    animate: { skew: 0, opacity: 1 },
    transition: { duration: 0.9, type: "spring" }
  },
  Urano: {
    initial: { rotate: 180, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    transition: { duration: 1.1, type: "spring" }
  },
  Netuno: {
    initial: { scale: 0.2, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 1.2, type: "spring" }
  }
}

export function PlanetInfoDrawer({ name, description, distances, terrentype, uniqueFeature }: InfoProps) {
  const [isOpen, setIsOpen] = useState(true)
  const [drawerDirection, setDrawerDirection] = useState("left");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDrawerDirection("top");
      } else {
        setDrawerDirection("left");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const planetColor = planetColors[name as keyof typeof planetColors] || "bg-gray-500"
  const animation = planetAnimations[name as keyof typeof planetAnimations] || {}

  const getUniqueIcon = () => {
    switch (name) {
      case "Sol": return <AtomIcon className="h-6 w-6" style={{ color: planetColor.replace("bg-", "text-") }} />
      case "Vênus": return <CloudIcon className="h-6 w-6" style={{ color: planetColor.replace("bg-", "text-") }} />
      case "Terra": return <WindIcon className="h-6 w-6" style={{ color: planetColor.replace("bg-", "text-") }} />
      default: return null
    }
  }
  return (
    <Drawer direction={drawerDirection as "left" | "right" | "top" | "bottom"} open={isOpen} onOpenChange={setIsOpen} modal={false}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="absolute bottom-4 right-4 z-50">
          <span>{isOpen ? "Ver Menos" : "Ver Mais"}</span>
          <ChevronRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="flex justify-center items-center h-full w-[500px] overflow-hidden bg-transparent border-none z-10 sm:w-full sm:px-2 md:w-full md:pl-4">
        <motion.div
          className={`mx-auto max-h-[800px] w-full max-w-md p-6 ${planetColor} bg-opacity-10 border rounded-lg backdrop-blur-sm overflow-y-scroll sm:h-[600px] sm:overflow-y-scroll sm:overflow-x-hidden`}
          {...animation}
        >
          <motion.h1
            className="text-4xl font-bold mb-4 text-center text-white"
            style={{ color: planetColor.replace("bg-", "text-") }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {name}
          </motion.h1>
          <motion.p
            className="text-muted-foreground mb-6 text-center text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {description}
          </motion.p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {distances?.map((distance, index) => (
              <InfoCard
                key={index}
                icon={<GlobeIcon className="h-6 w-6" style={{ color: planetColor.replace("bg-", "text-") }} />}
                title="Distâncias"
                items={[
                  { label: "Da Terra", value: `${distance.distanciaApartirdaTerra || 'N/A'} KM` },
                  { label: "Do Sol", value: `${distance.distanciaApartirDoSol || 'N/A'} KM` },
                ]}
              />
            ))}
            <InfoCard
              icon={<ClockIcon className="h-6 w-6" style={{ color: planetColor.replace("bg-", "text-") }} />}
              title="Tempo de Viagem"
              items={[{ label: "", value: distances[0]?.tempoDeViagem || 'N/A' }]}
            />
            <InfoCard
              icon={<RulerIcon className="h-6 w-6" style={{ color: planetColor.replace("bg-", "text-") }} />}
              title="Diâmetro"
              items={[{ label: "", value: `${distances[0]?.diametro || 'N/A'} KM` }]}
            />
            <InfoCard
              icon={<MountainIcon className="h-6 w-6" style={{ color: planetColor.replace("bg-", "text-") }} />}
              title="Tipo de Terreno"
              items={[{ label: "", value: terrentype }]}
            />
            {name === "Sol" && (
              <InfoCard
                icon={<ThermometerIcon className="h-6 w-6" style={{ color: planetColor.replace("bg-", "text-") }} />}
                title="Temperatura"
                items={[{ label: "Superfície", value: "5.505°C" }]}
              />
            )}
            {uniqueFeature && (
              <InfoCard
                icon={getUniqueIcon()}
                title="Característica Única"
                items={[{ label: "", value: uniqueFeature }]}
              />
            )}
            {
              name === 'Terra' && 
              <Link href={'/lua'} >
              <motion.div
                className="flex items-center justify-center bg-secondary rounded-lg p-4 shadow-md sm:flex sm:flex-col sm:items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >Lua
              </motion.div>
              </Link>

            }
          </motion.div>
        </motion.div>
      </DrawerContent>
    </Drawer>
  )
}

function InfoCard({ icon, title, items }: { icon: React.ReactNode, title: string, items: { label: string, value: string }[] }) {
  return (
    <motion.div
      className="bg-secondary rounded-lg p-4 shadow-md sm:flex sm:flex-col sm:items-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center space-x-2 mb-2 sm:flex-col">
        {icon}
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
      </div>
      {items.map((item, index) => (
        <div key={index} className="mt-1">
          {item.label && <span className="text-sm text-muted-foreground">{item.label}: </span>}
          <span className="text-sm font-medium">{item.value}</span>
        </div>
      ))}
    </motion.div>
  )
}
