import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/globals/button"
import { Main } from "@/components/main"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <Main />
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl text-gray-900 font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
      </div>
    </section>
  )
}
