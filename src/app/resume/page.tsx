import Summary from '@/content/resume/summary.mdx'
import Skills from '@/content/resume/skills.mdx'
import RecentExperience from '@/content/resume/recent-experience.mdx'
import PastExperience from '@/content/resume/past-experience.mdx'
import type { Metadata } from "next"
import { Box, Flex, Grid, GridItem, Group, Heading, Link } from "@chakra-ui/react"
import { ExportButton } from "@/components/pdf/ExportButton"
import { contact } from "@/app/config/site"
import { PiGithubLogoDuotone, PiLinkedinLogoDuotone, PiMapPinAreaDuotone, PiPhoneCallDuotone, PiReadCvLogoDuotone } from 'react-icons/pi'

export const metadata: Metadata = {
  title: "Resume - Anthony Cole",
  description: "I'm an experienced Software Engineer with a breadth of experience in both Senior and Lead capacities. I've successfully delivered projects in large enterprises like Aesop and ANZ, and helped startups at stages ranging from pre-seed to scaleup grow.",
}

export default async function ResumePage() {
  return (
    <Box py={8}>
      <Flex
        justify="space-between"
        align="center"
        mb={8}
        position="sticky"
        top={0}
        bg={{ base: "white/89", _dark: "black/80" }}
        backdropFilter="blur(8px)"
        py={4}
        mx={-4}
        px={4}
        zIndex={10}
      >
        <Group>
          <PiReadCvLogoDuotone size={32} />
          <Heading as="h1" size={{ base: "lg", md: "xl" }} fontWeight="500">
            Resume
          </Heading>
        </Group>
        <ExportButton />
      </Flex>

      <Heading as="h2" size="lg" fontWeight="500" mb={4}>
        Summary
      </Heading>
      <Box mb={8}>
        <Summary />
      </Box>

      <Grid templateColumns={{ base: "1fr", md: "1fr 320px" }} gap={8}>
        <GridItem order={{ base: 2, md: 1 }}>
          <Box mb={8}>
            <RecentExperience />
          </Box>
          <Box>
            <PastExperience />
          </Box>
        </GridItem>

        <GridItem order={{ base: 1, md: 2 }}>
          <Flex direction="column" gap={2} fontSize="sm" mb={8}>
            <Heading as="h2" size="lg" fontWeight="500" mb={4}>Contact</Heading>
            <Flex align="center" gap={2}>
              <PiLinkedinLogoDuotone size={16} />
              <Link href={contact.linkedinUrl} target="_blank">
                {contact.linkedin}
              </Link>
            </Flex>
            <Flex align="center" gap={2}>
              <PiGithubLogoDuotone size={16} />
              <Link href={contact.githubUrl} target="_blank">
                {contact.github}
              </Link>
            </Flex>
            <Flex align="center" gap={2}>
              <PiMapPinAreaDuotone size={16} />
              {contact.location}
            </Flex>
            <Flex align="center" gap={2}>
              <PiPhoneCallDuotone size={16} />
              <Link href={`tel:${contact.phone.replace(/\s/g, '')}`}>
                {contact.phoneDisplay}
              </Link>
            </Flex>
          </Flex>
          <Skills />
        </GridItem>
      </Grid>
    </Box>
  );
}
