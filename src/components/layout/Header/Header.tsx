"use client"

import Link from "next/link"
import { Container, Drawer, Flex, HStack, Heading, IconButton, Link as ChakraLink, VStack, CloseButton } from "@chakra-ui/react"
import { LuMenu, LuX } from "react-icons/lu"
import { navLinks } from "@/app/config/menu"
import { siteTitle } from "@/app/config/site"
import { ColorModeButton } from "@/components/ui/color-mode"


function Header({ opened, toggle }: { opened: boolean, toggle: () => void} ) {
  const items = navLinks.map((link) => {
    const Icon = link.icon;
    return (
      <ChakraLink
        asChild
        key={link.name}
        _hover={{ textDecoration: "underline" }}
      >
        <Link href={link.href}>
          <HStack as="span" gap={2} align="center">
            {Icon ? <Icon size={16} /> : null}
            <span>{link.name}</span>
          </HStack>
        </Link>
      </ChakraLink>
    );
  });

  return (
    <>
    <Drawer.Root open={opened} onOpenChange={(e) => e.open ? null : toggle()} size="full">
      <Drawer.Backdrop />
      <Drawer.Trigger />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.CloseTrigger />
          <Drawer.Header py={16}>
            <Drawer.Title fontWeight="500">
              {siteTitle}
            </Drawer.Title>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Header>
          <Drawer.Body>
            <VStack align="start">
              {items}
            </VStack>
          </Drawer.Body>
          <Drawer.Footer />
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
    <Container py={6} px={0} maxW="container.xl">
      <Flex justify="space-between" align="center">
        <ChakraLink asChild _hover={{ textDecoration: "none" }}>
          <Link href="/">
            <Heading as="h1" size="lg" fontWeight="500">{siteTitle}</Heading>
          </Link>
        </ChakraLink>
        <HStack gap={4}>
          <HStack hideBelow="sm" gap={6} fontSize="sm">
            {items}
          </HStack>
          <IconButton
            aria-label="Toggle menu"
            onClick={toggle}
            hideFrom="sm"
            size="sm"
            variant="ghost"
          >
            {opened ? <LuX /> : <LuMenu />}
          </IconButton>
          <ColorModeButton />
        </HStack>
      </Flex>
    </Container>
    </>
  );
}

export { Header }