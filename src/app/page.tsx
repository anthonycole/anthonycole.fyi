import HomePageContent from "@/content/home.mdx"
import { Box, Link } from "@chakra-ui/react"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Anthony Cole',
  description: "I'm an experienced Software Engineer with a breadth of experience in both Senior and Lead capacities. I've successfully delivered projects in large enterprises like Aesop and ANZ, and helped startups at stages ranging from pre-seed to scaleup grow."
}
 
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
        <Link href="/resume">Read More &rarr;</Link>
      </Box>
    </>
  );
}
