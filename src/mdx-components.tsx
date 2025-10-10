import type { MDXComponents } from 'mdx/types'
import { Link, Heading, Text, List, Separator } from "@chakra-ui/react"
import type React from 'react'

export function useMDXComponents(components: MDXComponents = {}): MDXComponents {
  return {
    a: (props: React.ComponentProps<typeof Link>) => <Link variant="underline" {...props} />,
    h1: (props: React.ComponentProps<typeof Heading>) => <Heading as="h1" size="4xl" mb="4" {...props} />,
    h2: (props: React.ComponentProps<typeof Heading>) => <Heading as="h2" size="3xl" mt="8" mb="4" {...props} />,
    h3: (props: React.ComponentProps<typeof Heading>) => <Heading as="h3" size="2xl" mt="6" mb="2" {...props} />,
    h4: (props: React.ComponentProps<typeof Heading>) => <Heading as="h4" size="xl" mt="4" mb="2" {...props} />,
    p: (props: React.ComponentProps<typeof Text>) => <Text mb="2" {...props} />,
    hr: (props: React.ComponentProps<typeof Separator>) => <Separator my="6" {...props} />,
    ul: (props: React.ComponentProps<typeof List.Root>) => <List.Root mb="2" {...props} />,
    li: (props: React.ComponentProps<typeof List.Item>) => <List.Item {...props} />,
    ...components,
  }
}