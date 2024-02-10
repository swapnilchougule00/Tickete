import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { CarouselImags } from "./CarouselImags"
import { InfoIcon, Plus } from "lucide-react"

export function CardPanel() {
    return (
        <Card className="w-[350px] h-fit">
            <CardHeader>
                <CarouselImags />
                <p className="text-sm text-[#60646C]"> <span className="font-semibold text-black">4.9</span>(4.5k) • Tours</p>
                <CardTitle className="text-[14px]">Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef</CardTitle>

            </CardHeader>
            <CardContent className=" ">

                <p className="text-sm my-2 font-semibold"> 1 ticket • 1 Adult</p>
                <div className="">
                    <p className="text-sm font-semibold"> 13 Feb 2022</p>
                    <p className="text-xs text-[#60646C]"> Duration 4 Hours</p>
                </div>
                <div className="">
                    <p className="text-sm font-semibold"> 13:00</p>
                    <p className="text-xs text-[#60646C]"> Oprating hours: 9:00-6:00 </p>
                </div>
                <p className="text-sm my-2 font-semibold"> 5 Guest</p>
            </CardContent>
            <div className="border-y py-4 px-6 border flex justify-between">
                <p className="text-sm border-b border-b-[#60646C] font-semibold text-[#60646C]"> View payment summary </p>
                <Plus color="#60646C" width={20} />
            </div>
            <CardFooter className="block mt-4 space-y-2">
                <div className="text-lg flex justify-between font-semibold">
                    <p>Total payble</p>
                    <p>$ 100</p>
                </div>
                <p className="text-xs text-green-400"> You saved $ 10 </p>
                <div className="text-xs  flex items-center gap-2 text-[#60646cd0]">
                    <span className='border-b  border-b-[#60646cc8]'>
                        You will be charged in ADE
                    </span>
                    <InfoIcon className='w-[14px] ' />
                </div>
                <p className="text-xs text-[#60646C]"> By clicking “confirm & pay”, you agree to Tickete’s general terms and conditions and cancellation policy. </p>
                <Button className="w-full mt-2 tracking-wider">Confirm & Pay</Button>
            </CardFooter>
        </Card>
    )
}
