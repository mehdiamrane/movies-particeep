import { Box, Flex, Text, useColorModeValue as mode } from '@chakra-ui/react';
import ColorModeSwitcher from 'components/ColorModeSwitcher';
import React from 'react';

const NavBar = () => {
  return (
    <Box w="full" bg={mode('gray.200', 'gray.900')}>
      <Flex
        align="center"
        justify="space-between"
        px={6}
        py={4}
        w="full"
        maxW="7xl"
        mx="auto"
      >
        <Text
          fontSize="lg"
          color={mode('gray.800', 'white')}
          fontWeight="bold"
          textAlign="left"
        >
          Particeep Movies
        </Text>

        <ColorModeSwitcher />
      </Flex>
    </Box>
  );
};

export default NavBar;
