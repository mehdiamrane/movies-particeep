import React from 'react';
import {
  Flex,
  Text,
  Select,
  useColorModeValue as mode,
} from '@chakra-ui/react';

const Filters = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      flexDir={{ base: 'column', md: 'row' }}
      bg={mode('white', 'gray.700')}
      rounded="lg"
      border="2px solid"
      borderColor={mode('gray.200', 'gray.500')}
      mb={8}
      px={6}
      py={4}
    >
      <Text
        fontSize="xl"
        fontWeight={600}
        color={mode('gray.700', 'gray.200')}
        mr={{ base: 0, md: 6 }}
        mb={{ base: 4, md: 0 }}
      >
        Filters
      </Text>
      <Flex w="full" flexDir={{ base: 'column', md: 'row' }}>
        <Select
          size="lg"
          borderWidth="2px"
          variant="solid"
          borderColor={mode('gray.200', 'gray.500')}
          bg={mode('gray.50', 'gray.600')}
          color={mode('gray.700', 'gray.200')}
          fontWeight="bold"
          placeholder="Category"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Select
          ml={{ base: 0, md: 4 }}
          mt={{ base: 4, md: 0 }}
          size="lg"
          borderWidth="2px"
          variant="solid"
          borderColor={mode('gray.200', 'gray.500')}
          bg={mode('gray.50', 'gray.600')}
          color={mode('gray.700', 'gray.200')}
          fontWeight="bold"
          placeholder="Elements per page"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Flex>
    </Flex>
  );
};

export default Filters;
