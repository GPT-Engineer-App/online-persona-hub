import { Container, VStack, Box, Heading, Text, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.md" p={4}>
      {/* Header Section */}
      <Box as="header" textAlign="center" my={8}>
        <Heading as="h1" size="2xl">John Doe</Heading>
        <Text fontSize="lg" color="gray.600">Web Developer & Designer</Text>
      </Box>

      {/* About Section */}
      <Box as="section" my={8}>
        <Heading as="h2" size="xl" mb={4}>About Me</Heading>
        <Text fontSize="md" color="gray.700">
          Hello! I'm John, a passionate web developer with a knack for creating beautiful and functional websites. With a background in design and a love for coding, I strive to build web experiences that are both visually appealing and highly performant.
        </Text>
      </Box>

      {/* Contact Section */}
      <Box as="section" my={8}>
        <Heading as="h2" size="xl" mb={4}>Contact</Heading>
        <Text fontSize="md" color="gray.700">
          Feel free to reach out to me at <Link href="mailto:john.doe@example.com" color="teal.500">john.doe@example.com</Link>
        </Text>
      </Box>
    </Container>
  );
};

export default Index;