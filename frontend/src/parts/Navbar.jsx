import React from 'react'
import { Button, Container, Flex, Text, HStack, Link as ChakraLink,} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaRegPlusSquare } from 'react-icons/fa'

const Navbar = () => (
  <Container maxW="1140px" px={4}>
    <Flex
      h={16}
      alignItems="center"
      justifyContent="space-between"
      flexDir={{ base: 'column', sm: 'row' }}
    >
      {/* Product Store title */}
      <ChakraLink
        as={RouterLink}
        to="/"
        _hover={{ textDecoration: 'none' }}
      >
        <Text
          fontSize={{ base: '22', sm: '28' }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
        >
          Product Store 🛒
        </Text>
      </ChakraLink>

      {/* + button */}
      <HStack spacing={2} alignItems="center">
        <ChakraLink
          as={RouterLink}
          to="/create"
          _hover={{ textDecoration: 'none' }}
        >
          <Button>
            <FaRegPlusSquare fontSize={20} />
          </Button>
        </ChakraLink>
      </HStack>
    </Flex>
  </Container>
)

export default Navbar
