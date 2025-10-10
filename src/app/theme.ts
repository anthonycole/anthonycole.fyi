import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        "subtle-text": {
          value: { default: "gray.600", _dark: "gray.400" },
        },
      },
    },
    tokens: {
      fonts: {
        heading: { value: "var(--font-dm-sans), sans-serif" },
        body: { value: "var(--font-dm-sans), sans-serif" },
      },
      fontWeights: {
        heading: { value: 500 },
        body: { value: 400 },
        bold: { value: 600 },
      },
      fontSizes: {
        xs: { value: "0.8125rem" },  // 13px
        sm: { value: "0.9375rem" },  // 15px
        md: { value: "1.0625rem" },  // 17px
        lg: { value: "1.25rem" },    // 20px
        xl: { value: "1.375rem" },   // 22px
        "2xl": { value: "1.625rem" }, // 26px
      },
    },
  },
})

export const system = createSystem(defaultConfig, config);