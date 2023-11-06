export default function Cheatsheet() {
  return (
    <div className="">
      <div>
        <span className="text-gray-800 font-semibold text-2xl">Cheatsheet</span>
      </div>
      <div className="pt-5">
        <div className="pb-4">
          <h3 className="font-bold text-lg pb-2">Headings</h3>
          <p># Heading 1</p>
          <p>## Heading 2</p>
          <p>### Heading 3</p>
          <p>#### Heading 4</p>
        </div>
        <div className="pb-4">
          <h3 className="font-bold text-lg pb-2">Text Decoration</h3>
          <p>**Bold Text**</p>
          <p>*Italic Text*</p>
          <p> &gt; Blockquote </p>
          <p>`code`</p>
        </div>
        <div className="pb-4">
          <h3 className="font-bold text-lg pb-2">Ordered List</h3>
          <p>1. First Text</p>
          <p>2. Second Text</p>
          <p>3. Third Text</p>
          <p>4. Fourth Text</p>
        </div>
        <div className="pb-4">
          <h3 className="font-bold text-lg pb-2">Ordered List</h3>
          <p>- First Text</p>
          <p>- Second Text</p>
          <p>- Third Text</p>
          <p>- Fourth Text</p>
        </div>
      </div>
    </div>
  )
}
