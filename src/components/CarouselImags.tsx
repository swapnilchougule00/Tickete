"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselImags() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const arr = ['https://images.pexels.com/photos/6710904/pexels-photo-6710904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://coolwallpapers.me/th700/3004938-amsterdam_bridge_buildings_canal_city_dark_holland_lights_netherlands_night_trees_water.jpg',
    'https://coolwallpapers.me/th700/2937641-cityscape-night-lights-architecture-old-building-sky-water-reflection-long-exposure-boat-amsterdam-netherlands-bridge-trees-light-trails___landscape-nature-wallpapers.jpg',

  ]
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full relative rounded-lg h-fit   max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >

      <CarouselContent className="shadow-xl rounded-lg">
        {arr.map((index: any) => (
          <CarouselItem >
            <Card className="!rounded-lg ">
              <CardContent className="!p-0  !rounded-lg  ">
                <img src={index} alt="1" className="rounded-lg w-full" />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-[50%] left-[5%]" />
      <CarouselNext className="absolute top-[50%] left-[85%]" />
      <p className="absolute top-4 left-5 text-xs bg-[#ffff] rounded-md px-2 font-semibold flex gap-1 items-center p-1"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
        Bestseller</p>
    </Carousel>
  )
}
