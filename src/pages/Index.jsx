import { Box, Container, Flex, Text, VStack, Link, Button } from "@chakra-ui/react";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { session, logout } = useSupabaseAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" fontWeight="bold">My Website</Text>
        <Flex>
          <Link href="/" p={2}>Home</Link>
          <Link href="/about" p={2}>About</Link>
          <Link href="/contact" p={2}>Contact</Link>
          {session ? (
            <Button onClick={handleLogout} ml={2}>Logout</Button>
          ) : (
            <Link href="/login" p={2}>Login</Link>
          )}
        </Flex>
      </Flex>

      <Box as="main" flex="1" p={4}>
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to My Website</Text>
          <Text>This is a simple React app with a basic structure.</Text>
        </VStack>
      </Box>

      <Flex as="footer" bg="blue.500" color="white" p={4} justifyContent="center">
        <Text>&copy; 2023 My Website. All rights reserved.</Text>
      </Flex>
    </Container>
  );
};

export default Index;