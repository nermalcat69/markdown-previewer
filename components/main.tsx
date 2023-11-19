import Info from "@/components/globals/info"
import { lastUpdated } from "@/components/markdownPreviewer/last-updated"
import { MarkdownCode } from "@/components/markdownPreviewer/markdown-code"
import { Preview } from "@/components/markdownPreviewer/preview"

export function Main() {
  return (
    <section className="py-2">
      <div>{lastUpdated()}</div>
      <div className="border border-gray-200 mt-8 p-6  rounded-md grid grid-cols-2 gap-6 my-8">
        <MarkdownCode />
        <div className="">{Preview()}</div>
      </div>
      <Info />
    </section>
  )
}
