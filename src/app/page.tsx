import { CardPanel } from "@/components/CardPanel";
import FaqSection from "@/components/FaqSection";
import InformationForm from "@/components/InformationForm";
import Payments from "@/components/Payments";


export default function Home() {



  return (
    <div className="w-full p-10 px-24 flex flex-col justify-center items-center">
      <div className="w-full flex gap-6">
        <div className="w-[70%]">
          <InformationForm />
          <Payments />
        </div>
        <div className="w-[30%] flex justify-center ">
          <CardPanel />
        </div>
      </div>

      <FaqSection />

    </div>
  )
}
