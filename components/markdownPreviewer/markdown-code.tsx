"use client"

import { buttonVariants } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react";



export function MarkdownCode() {
    const [form, setForm] = useState({ markdown: "" });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section className="">
      <span className="font-bold text-lg text-gray-700 tracking-normal	">
        Markdown Code
      </span>
      <div className="pt-4">
        <Textarea
          name="markdownEditor"
          id="markdownEditor"
          className="h-96 max-w-2xl"
          placeholder="Type your message here."
          onChange={handleChange}
        />
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
