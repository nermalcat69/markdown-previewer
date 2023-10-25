import { buttonVariants } from "@/components/globals/button"
import { Textarea } from "@/components/globals/textarea"

export function Preview() {
  return (
    <section>
      <span className="font-bold text-lg text-gray-700 tracking-normal	">
        Preview
          </span>
                    <div className="pt-4">
            <div className="h-96 max-w-2xl border border-gray-200 rounded-md" placeholder="Type your message here." />
          </div>
                <div className="mt-4 flex space-x-2">
        <div className={buttonVariants()}>
          <div className="inline-flex items-center py-1 px-2 space-x-3 rounded-md  ">
            <text className="font-semibold">Download Markdown File</text>
          </div>
              </div>
                      <div className={buttonVariants()}>
          <div className="inline-flex items-center py-1 px-2 space-x-3 rounded-md  ">
            <text className="font-semibold">Copy to Clipboard</text>
          </div>
              </div>
                                    <div className={buttonVariants()}>
          <div className="inline-flex items-center py-1 px-2 space-x-3 rounded-md  ">
            <text className="font-semibold">Share</text>
          </div>
        </div>
      </div>
    </section>
  )
}
