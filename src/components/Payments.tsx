import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from './ui/input'
import { InfoIcon } from 'lucide-react'

function Payments() {
    return (
        <div>
            <div className='mt-10 space-y-2'>
                <h1 className='text-2xl '>Select yout mode of payment</h1>
                <h1 className='text-[#60646C]'>Payments with Tickete are secure and encrypted.</h1>
            </div>

            <Card className="w-full h-fit">
                <CardHeader>
                    <CardTitle className="text-base items-center relative">Credit & debit card  <span className='absolute p-1 border-4 border-black rounded-full top-1 text-lg right-5 text-white'></span></CardTitle>
                    <p>logos</p>
                </CardHeader>
                <CardContent className=" ">
                    <div className='flex gap-4'>
                        <Input placeholder='Email*'></Input>
                        <Input placeholder='Confirm Email'></Input>
                    </div>

                    <div className='flex border-b pb-6 gap-4'>
                        <Input placeholder='Email*'></Input>
                        <Input placeholder='Confirm Email'></Input>
                    </div>
                </CardContent>

                <CardFooter className="block    space-y-2">
                    <div className="text-lg flex justify-between font-semibold">
                        <p>Total payble: $ 100</p>
                        <p className="text-xs text-green-400"> You saved $ 10 </p>
                    </div>
                    <div className="text-xs  flex items-center gap-2 text-[#60646cd0]">
                        <span className='border-b  border-b-[#60646cc8]'>
                            You will be charged in ADE
                        </span>
                        <InfoIcon className='w-[14px] ' />
                    </div>

                    <p className="text-xs !mt-6 !mb-2 text-[#60646C]"> By clicking “confirm & pay”, you agree to Tickete’s general terms and conditions and cancellation policy. </p>
                    <Button className="  px-5 tracking-wider">Confirm & Pay</Button>
                </CardFooter>
            </Card>

            <div>
                <div className='p-4 mt-10 relative flex justify-between space-y-1 border border-slate-300  bg-slate-100 rounded-lg'>
                    <h1 className='text-sm font-semibold'>Coming soon</h1>
                    <span className='p-2 rounded-full bg-slate-500'></span>
                </div>

                <div className='p-4 mt-5 relative flex justify-between space-y-1 border border-slate-300  bg-slate-100 rounded-lg'>
                    <h1 className='text-sm font-semibold'>Coming soon</h1>
                    <span className='p-2 rounded-full bg-slate-500'></span>
                </div>

            </div>

            <div className='p-4 my-10 relative space-y-1 border border-slate-200 rounded-lg'>
                <h1 className='text-sm font-semibold'>Free Cancellation</h1>
                <h1 className='text-sm text-[#60646C] '>Tickets can be cancelled by 13th February, 2022.</h1>
                <InfoIcon className='w-4 absolute top-2 text-white right-4' fill='#60646C' />
            </div>

        </div>
    )
}

export default Payments
