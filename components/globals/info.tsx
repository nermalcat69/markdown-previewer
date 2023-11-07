import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Info() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          How do i utilize this markdown previewer ?
        </AccordionTrigger>
        <AccordionContent>
          Well you can write in the textarea of markdown code or fetch a
          markdown file from github repository.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          How do i utilize this markdown previewer ?
        </AccordionTrigger>
        <AccordionContent>
          Well you can write in the textarea of markdown code or fetch a
          markdown file from github repository.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>
          How do i utilize this markdown previewer ?
        </AccordionTrigger>
        <AccordionContent>
          Well you can write in the textarea of markdown code or fetch a
          markdown file from github repository.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>
          How do i utilize this markdown previewer ?
        </AccordionTrigger>
        <AccordionContent>
          Well you can write in the textarea of markdown code or fetch a
          markdown file from github repository.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
