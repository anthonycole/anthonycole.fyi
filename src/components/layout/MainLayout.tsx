"use client";

import { Box, Container } from "@chakra-ui/react"
import { useState } from "react"
import { Header } from "@/components/layout/Header"

function MainLayout({ children } : React.PropsWithChildren) {
  const [opened, setOpened] = useState(false);
  const toggle = () => setOpened(!opened);

  return (
    <Box minH="100vh">
      <Container maxW="4xl">
        <Header opened={opened} toggle={toggle} />
      </Container>
      <Container maxW="4xl" pt="md">
        {children}
      </Container>
    </Box>
  );
}

export default MainLayout