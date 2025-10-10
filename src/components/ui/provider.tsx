"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { system } from "@/app/theme"
import { ColorModeProvider } from "./color-mode"

export function Provider(props: React.PropsWithChildren) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider>
      {props.children}
      </ColorModeProvider>
    </ChakraProvider>
  )
}
