import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from './ui/input'
import { CreditCard, InfoIcon, PiggyBank } from 'lucide-react'

function Payments() {
    return (
        <div>
            <div className='mt-10 !mb-6 space-y-2'>
                <h1 className='text-2xl '>Select yout mode of payment</h1>
                <h1 className='text-[#60646C]'>Payments with Tickete are secure and encrypted.</h1>
            </div>

            <Card className="w-full border-slate-700 h-fit">
                <CardHeader className='!p-6'>
                    <CardTitle className="text-base items-center flex gap-4 relative"><CreditCard className='w-4 h-4' /> Credit & debit card  <span className='absolute p-1 border-4 border-black rounded-full top-1 text-lg right-5 text-white'></span></CardTitle>
                    <div className='flex mt-2 space-x-4'>
                        <img src="https://www.logo.wine/a/logo/Mastercard/Mastercard-Logo.wine.svg" className='w-6 border' alt="logo" />
                        <img src="https://www.logo.wine/a/logo/Visa_Inc./Visa_Inc.-Logo.wine.svg" className='w-6 border' alt="logo" />
                        <img src="https://1000logos.net/wp-content/uploads/2020/04/Logo-Diners-Club-International.jpg" className='w-6 border' alt="logo" />
                    </div>
                </CardHeader>
                <CardContent className=" ">
                <div className='md:flex space-y-5 md:space-y-0  gap-4'>
                        <Input placeholder='Name on card'></Input>
                        <Input placeholder='Card number'></Input>
                    </div>

                    <div className='md:flex space-y-5 md:space-y-0 border-b pb-6 gap-4'>
                        <Input placeholder='Expiry Date'></Input>
                        <Input placeholder='CVV'></Input>
                    </div>
                </CardContent>

                <CardFooter className="block    space-y-2">
                    <div className="text-lg flex flex-col-reverse md:flex-row justify-between font-semibold">
                        <p>Total payble: $ 100</p>
                        <span className="text-xs w-fit text-white flex items-center gap-2 px-2 p-1 rounded-xl bg-green-700"> <PiggyBank fill="white" className="w-3 h-3" /> You saved $ 10 </span>
                    </div>
                    <div className="text-xs  flex items-center gap-2 text-[#60646cd0]">
                        <span className='border-b  border-b-[#60646cc8]'>
                            You will be charged in ADE
                        </span>
                        <InfoIcon className='w-[14px] ' />
                    </div>

                    <p className="text-xs !mt-6 !mb-3 text-[#60646C]"> By clicking “confirm & pay”, you agree to
                        <a href="https://www.tickete.co/" className="text-blue-500 underline" >Tickete’s general terms and conditions</a>  and
                        <a href="https://www.tickete.co/" className="text-blue-500 underline" > cancellation policy.</a>
                    </p>                    <Button className="  px-5 gap-2 tracking-wider">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
                        </svg>
                        Confirm & Pay</Button>
                </CardFooter>
            </Card>

            <div className='border-b pb-6'>
                <div  className='p-4  mt-10 relative flex justify-between space-y-1 border text-[#60646C] border-slate-300  bg-slate-100 rounded-lg'>
                    <h1 className='text-sm flex gap-4 items-center font-semibold'> 
                    <img src="https://www.logo.wine/a/logo/Apple_Pay/Apple_Pay-Logo.wine.svg" alt="logo" className='w-6 border' />
                    Coming soon
                    </h1>
                    <span className='p-2 rounded-full bg-slate-300'></span>
                </div>

                <div className='p-4 mt-5 relative flex justify-between space-y-1 border text-[#60646C] border-slate-300  bg-slate-100 rounded-lg'>
                    <h1 className='text-sm flex items-center gap-4 font-semibold'>
                    <img src="https://www.logo.wine/a/logo/Google_Pay/Google_Pay-Logo.wine.svg" alt="logo" className='w-6  border' />
                        Coming soon
                        </h1>
                    <span className='p-2 rounded-full bg-slate-300'></span>
                </div>

            </div>

            <span className="text-xs mt-10 w-fit text-green-700 md:hidden flex items-center gap-2 px-2 p-1 rounded-xl bg-green-200"> <PiggyBank fill="green" className="w-3 h-3" /> You saved $ 10 </span>

            <h1 className='text-2xl mt-4 '>Total payble: $ 100</h1>
            <div className='p-4 my-4  mb-10 relative space-y-1 font-semibold border border-slate-200 !rounded-2xl'>
                <div className="text-sm   flex items-center gap-2 text-[#000000f0]">
                    <InfoIcon fill='black' color='white' className='w-[14px] ' />
                    <span className=''>
                        You will be charged in ADE
                    </span>
                </div>
                <h1 className='text-sm pl-6 !font-normal text-[#60646C] '>The price shown here is in US Dollar (USD) as per the current conversion rate. You will be charged in United Arab Emirates Dirham (AED).</h1>
            </div>

        </div>
    )
}

export default Payments
