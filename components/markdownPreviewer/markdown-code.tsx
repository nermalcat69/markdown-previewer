import { buttonVariants } from "@/components/globals/button"
import { Textarea } from "@/components/globals/textarea"


export function markdownCode() {
  return (
    <section className="">
      <span className="font-bold text-lg text-gray-700 tracking-normal	">
        Markdown Code
          </span>
          <div className="pt-4">
            <Textarea className="h-96 max-w-2xl" placeholder="Type your message here." />
          </div>

          <div className="mt-4 flex gap-2 ">
                <Textarea className="h-10" placeholder="Type your message here." />
              <div className={buttonVariants()}>
                  
                  <div className="inline-flex items-center py-1 px-2 space-x-3 rounded-md  ">

            <text className="font-semibold">Fetch</text>
          </div>
          </div>

          </div>
    </section>
  )
}
