import fs from "fs"
import path from "path"
import Header from "@/components/header"
import MarkdownContent from "@/components/markdown-content"

export default async function Home() {
  const content = await getMarkdownContent("content/home.md")

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 max-w-2xl mx-auto px-4 py-16 md:py-24">
        <MarkdownContent content={content} />
      </div>
      <Footer />
    </main>
  )
}

async function getMarkdownContent(filePath: string) {
  const fullPath = path.join(process.cwd(), filePath)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  return fileContents
}

function Footer() {
  return (
    <footer className="bg-gray-200 py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-4 text-sm text-[rgb(102,102,102)]">
        <p>
          I would like to acknowledge that I live and work on the traditional lands of what always was and always will be the Wurundjeri people of the
          Kulin Nation and pay respects to Elders past, present and emerging.
        </p>
        <p>
          I also acknowledge that we are in a climate emergency. I call on those who govern us to implement ambitious
          policies and practices which prevent the harmful effects of climate change.
        </p>
      </div>
    </footer>
  )
}
