import React from 'react';
import { ChakraProvider, Box, theme, Flex } from '@chakra-ui/react';
import NavBar from 'components/NavBar';
import MoviesGrid from 'components/MoviesGrid';
import Filters from 'components/Filters';
import Pagination from 'components/Pagination';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <>
        <NavBar />
        <Box maxW="7xl" mx="auto" py={16} px={6}>
          <Filters />
          <MoviesGrid />
          <Pagination />
        </Box>
      </>
    </ChakraProvider>
  );
}

export default App;
