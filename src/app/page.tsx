import { CardPanel } from "@/components/CardPanel";
import FaqSection from "@/components/FaqSection";
import InformationForm from "@/components/InformationForm";
import Payments from "@/components/Payments";


export default function Home() {



  return (
    <div className="w-full p-10 md:px-24 flex flex-col justify-center items-center">
      <div className="w-full flex md:flex-row  flex-col-reverse gap-6">
        <div className="md:w-[70%] ">
          <InformationForm />
          <Payments />
        </div>
        <div className="md:w-[30%] flex flex-col space-y-6 md:flex-row justify-center ">
        <h1 className='font-serif md:hidden text-4xl'>Confirm & Pay</h1>
          <CardPanel />
        </div>
      </div>

      <FaqSection />

    </div>
  )
}
