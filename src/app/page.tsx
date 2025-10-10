import HomePageContent from "@/content/home.mdx"
import { Box, Link } from "@chakra-ui/react"

export default async function Home() {
  return (
    <>
      <Box
        textAlign="left"
        maxW="840px"
        mx="auto"
        textStyle={"2xl"}
        py={{ base: 12, md: 24 }}
      >
        <HomePageContent />
      </Box>
      <Box>
        <Link href="/resume">Read More</Link>
      </Box>
    </>
  );
}
