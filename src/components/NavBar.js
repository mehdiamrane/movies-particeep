import {
  Box,
  Flex,
  Text,
  Tooltip,
  IconButton,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import ColorModeSwitcher from 'components/ColorModeSwitcher';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

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
        <Box>
          <Tooltip
            hasArrow
            label="View source code on Github"
            aria-label="View source code on Github"
          >
            <IconButton
              as="a"
              href="https://github.com/mehdiamrane/movies-particeep"
              target="blank"
              size="sm"
              fontSize="lg"
              aria-label="View source code on Github"
              variant="solid"
              color="current"
              icon={<FaGithub />}
            />
          </Tooltip>

          <ColorModeSwitcher />
        </Box>
      </Flex>
    </Box>
  );
};

export default NavBar;
