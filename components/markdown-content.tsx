import Markdown from "markdown-to-jsx"
import Link from "next/link"

export default function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="markdown-content">
      <Markdown
        options={{
          overrides: {
            a: {
              component: CustomLink,
            },
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  )
}

function CustomLink(props: any) {
  const { href, children, ...rest } = props
  if (href && href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[rgb(102,102,102)] underline decoration-[rgba(102,102,102,0.4)] hover:decoration-[rgba(102,102,102,0.8)]"
        {...rest}
      >
        {children}
      </a>
    )
  }
  return (
    <Link
      href={href || "#"}
      className="text-[rgb(102,102,102)] underline decoration-[rgba(102,102,102,0.4)] hover:decoration-[rgba(102,102,102,0.8)]"
      {...rest}
    >
      {children}
    </Link>
  )
}
