"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import img1 from '../assets/img1.jpg'
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

  const arr = [img1]
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full relative max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >

      <CarouselContent>
        {arr.map((index:any) => (
          <CarouselItem >
              <Card>
                <CardContent className="!p-0">
                  <img src={index} alt="1" />
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-[50%] left-[5%]"/>
      <CarouselNext className="absolute top-[50%] left-[85%]"/>
      <p className="absolute top-4 left-5 text-xs bg-[#ffff] rounded-md px-2 font-semibold p-1">Bestseller</p>
    </Carousel>
  )
}
