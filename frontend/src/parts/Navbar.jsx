import React from 'react'
import { Button, Container, Flex, HStack, Text, IconButton, Link as ChakraLink, useColorMode, useColorModeValue  } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'
import { FaRegPlusSquare } from 'react-icons/fa'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode() //hook from chakra ui that will give us these values which allows us to toggle color mode on the webpage 
  //const navBg = useColorModeValue('white', 'gray.800')

  return (
    <Container maxW="1140px" px={4}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexDir={{ base: 'column', sm: 'row' }}
      >
        {/* ProductStore Page (Homepage) */}
        <Text
          as={RouterLink}
          to="/"
          display="inline-block"
          fontSize={{ base: '22px', sm: '28px' }}
          fontWeight="bold"
          textTransform="uppercase"
          sx={{
            background: 'linear-gradient(to right, #00B5D8, #4299E1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          _hover={{ textDecoration: 'none' }}
        >
          Product Store 🛒
        </Text>

        {/* 2 buttons on the side one is to toggle to the create page, and the other is to switch between light/dark mode */}
        <HStack spacing={2}>
          <IconButton 
            as={RouterLink}
            to="/create"
            aria-label="Create new product"
            icon={<FaRegPlusSquare />}
            //variant="outline"
            className="roudned-pill"
            size="md"
            _hover={{ bg: useColorModeValue('gray.100','gray.700') }}
          /> 
          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            //variant="outline"
            className="rounded-pill"
            size="md"
          />
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar
