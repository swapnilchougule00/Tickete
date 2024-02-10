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
import { Calendar, CupSoda, InfoIcon, PiggyBank, Plus, Star, Ticket, TimerIcon, UsersIcon } from "lucide-react"

export function CardPanel() {
    return (
        <Card className="md:w-[350px] w-full h-fit">
            <CardHeader className="flex justify-center items-center w-full">
                <CarouselImags />
            </CardHeader>
            <CardContent className=" ">
                <p className="text-sm text-[#60646C] flex items-center"> <Star className="w-4 h-4" fill="#FE575D" color="treansperent" /> <span className="font-semibold text-black">4.9</span>(4.5k) • Tours</p>

                <CardTitle className="text-[14px]">Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef</CardTitle>
                <p className="text-sm my-2 flex items-center gap-2 font-semibold"><Ticket className="w-4 h-4" />  1 ticket • 1 Adult</p>
                <div className="">
                    <p className="text-sm flex items-center gap-2 font-semibold"> <Calendar className="w-4 h-4" /> 13 Feb 2022</p>
                    <p className="text-xs text-[#60646C] pl-6"> Duration 4 Hours</p>
                </div>
                <div className="">
                    <p className="text-sm flex gap-2 items-center font-semibold"> <TimerIcon className="w-4 h-4" /> 13:00</p>
                    <p className="text-xs pl-6 text-[#60646C]"> Oprating hours: 9:00-6:00 </p>
                </div>
                <p className="text-sm my-2 flex items-center gap-2 font-semibold"> <UsersIcon className="w-4 h-4" /> 5 Guest</p>
            </CardContent>
            <div className="border-y py-4 px-6 border flex justify-between">
                <p className="text-sm border-b border-b-[#60646C] font-semibold text-[#60646C]"> View payment summary </p>
                <Plus color="#60646C" width={20} />
            </div>
            <CardFooter className="block mt-4 space-y-3">
                <div className="text-lg flex justify-between font-semibold">
                    <p>Total payble</p>
                    <p>$ 100</p>
                </div>
                <span className="text-xs w-fit text-green-700 flex items-center gap-2 px-2 p-1 rounded-xl bg-green-200"> <PiggyBank fill="green" className="w-3 h-3" /> You saved $ 10 </span>
                <div className="text-xs  flex items-center gap-2 text-[#60646cd0]">
                    <span className='border-b  border-b-[#60646cc8]'>
                        You will be charged in ADE
                    </span>
                    <InfoIcon className='w-[14px] ' />
                </div>
                <p className="text-xs md:block hidden text-[#60646C]"> By clicking “confirm & pay”, you agree to
                    <a href="https://www.tickete.co/" className="text-blue-500 underline" >Tickete’s general terms and conditions</a>  and
                    <a href="https://www.tickete.co/" className="text-blue-500 underline" > cancellation policy.</a>
                </p>
                <Button className="w-full md:flex items-center hidden mt-2 gap-2 tracking-wider">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
                    </svg>
                    Confirm & Pay</Button>
            </CardFooter>
        </Card>
    )
}
