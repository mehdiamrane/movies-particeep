import React from 'react';
import {
  Flex,
  Text,
  Select,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { changeElementsPerPage } from 'actions';
import CategoriesPicker from 'components/CategoriesPicker';

const Filters = () => {
  const dispatch = useDispatch();

  return (
    <Flex
      align="center"
      justify="space-between"
      flexDir={{ base: 'column', md: 'row' }}
      bg={mode('gray.50', 'gray.700')}
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
        <CategoriesPicker />
        <Select
          flexBasis={{ base: '100%', md: '50%' }}
          ml={{ base: 0, md: 4 }}
          mt={{ base: 4, md: 0 }}
          onChange={e =>
            dispatch(changeElementsPerPage(Number(e.target.value)))
          }
          size="lg"
          borderWidth="2px"
          variant="solid"
          borderColor={mode('gray.200', 'gray.500')}
          bg={mode('gray.50', 'gray.600')}
          color={mode('gray.700', 'gray.200')}
          fontWeight="bold"
        >
          <option defaultValue value={4}>
            4 movies per page
          </option>
          <option value={8}>8 movies per page</option>
          <option value={12}>12 movies per page</option>
        </Select>
      </Flex>
    </Flex>
  );
};

export default Filters;
