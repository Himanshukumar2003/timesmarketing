import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function BlogFAQ({ faqs }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="mt-10 mb-4">
      <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
        <span className="inline-block w-1 h-7 bg-blue-600 rounded-full" />
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible className="flex flex-col gap-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="border border-blue-100 rounded-xl overflow-hidden px-5 hover:border-blue-300 transition-colors data-[state=open]:border-blue-400 data-[state=open]:shadow-md data-[state=open]:shadow-blue-100 bg-white"
          >
            <AccordionTrigger className="text-base font-semibold text-gray-800 hover:text-blue-600 hover:no-underline text-left py-4 data-[state=open]:text-blue-700">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 text-sm leading-relaxed pb-4">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
