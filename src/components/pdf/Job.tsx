import { Box, Heading, Text, Badge, Flex } from "@chakra-ui/react"

interface JobProps {
  title: string
  company: string
  dates: string
  type?: string
  responsibilities: string[]
  techStack?: string[]
  achievements?: string[]
}

export function Job({
  title,
  company,
  dates,
  type,
  responsibilities,
  techStack,
  achievements
}: JobProps) {
  return (
    <Box mb={8} pb={8} borderBottom="1px solid" borderColor="gray.200" _last={{ borderBottom: "none" }}>
      <Box mb={2}>
        <Heading as="h3" size="sm" fontWeight="600" mb={0.5}>
          {title}
        </Heading>
        <Text fontSize="sm" mb={0.5}>
          {company}
        </Text>
        <Text fontSize="xs" mb={3} color={"gray.600"} _dark={{ color: "white" }}>
          {dates}{type && ` • ${type}`}
        </Text>
      </Box>

      <Box mb={2}>
        {responsibilities.map((responsibility, index) => (
          <Text key={index} fontSize="sm" mb={1.5} lineHeight="1.6">
            • {responsibility}
          </Text>
        ))}
      </Box>

      {achievements && achievements.length > 0 && (
        <Box mb={2}>
          {achievements.map((achievement, index) => (
            <Text key={index} fontSize="sm" mb={1.5} lineHeight="1.6" fontWeight="500">
              ★ {achievement}
            </Text>
          ))}
        </Box>
      )}

      {techStack && techStack.length > 0 && (
        <Flex gap={1.5} flexWrap="wrap" mt={4}>
          {techStack.map((tech, index) => (
            <Badge key={index} variant="subtle" colorScheme="gray" fontSize="xs" px={2} py={0.5}>
              {tech}
            </Badge>
          ))}
        </Flex>
      )}
    </Box>
  )
}