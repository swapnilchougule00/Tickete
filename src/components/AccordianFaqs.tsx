import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordianFaqs() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      <AccordionItem value="item-1">
        <AccordionTrigger>What should I do on my first trip to Rome?</AccordionTrigger>
        <AccordionContent>
          Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit.
          If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla.
          For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" defaultChecked defaultValue="item-2" >
        <AccordionTrigger>What are some hidden gems to see in Rome?</AccordionTrigger>
        <AccordionContent>
          Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit.
          If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla.
          For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How much time should I spend in Rome?</AccordionTrigger>
        <AccordionContent>
          Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit.
          If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla.
          For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>What food is Rome known for?</AccordionTrigger>
        <AccordionContent>
          Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit.
          If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla.
          For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>What is the best way to get around Rome?</AccordionTrigger>
        <AccordionContent>
          Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit.
          If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla.
          For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
