import fs from "fs"
import path from "path"

// Get all markdown files from a directory
export function getMarkdownFiles(dir: string) {
  const directory = path.join(process.cwd(), dir)
  return fs.readdirSync(directory).filter((file) => file.endsWith(".md"))
}

// Read a markdown file and return its contents
export function readMarkdownFile(filePath: string) {
  const fullPath = path.join(process.cwd(), filePath)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  return fileContents
}
