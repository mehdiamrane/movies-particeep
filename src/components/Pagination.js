import React from 'react';
import {
  Flex,
  Box,
  IconButton,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { changePage } from 'actions';

const Pagination = () => {
  const dispatch = useDispatch();
  const pagination = useSelector(state => state.pagination);

  return (
    <Flex mx="auto" w="full" align="center" justify="center">
      <Flex
        align="center"
        justify="center"
        bg={mode('white', 'gray.700')}
        rounded="lg"
        border="2px solid"
        borderColor={mode('gray.200', 'gray.500')}
        mt={8}
        p={4}
      >
        <IconButton
          fontSize="3xl"
          colorScheme="blue"
          aria-label="Previous page"
          isDisabled={pagination.current === 1}
          onClick={() => {
            dispatch(changePage(pagination.current - 1));
          }}
          icon={<RiArrowLeftSLine />}
        />
        <Box
          px={4}
          fontSize="lg"
          fontWeight="bold"
          color={mode('gray.700', 'gray.300')}
        >
          {pagination.current}
        </Box>
        <IconButton
          fontSize="3xl"
          colorScheme="blue"
          aria-label="Next page"
          isDisabled={pagination.current >= pagination.max}
          onClick={() => {
            dispatch(changePage(pagination.current + 1));
          }}
          icon={<RiArrowRightSLine />}
        />
      </Flex>
    </Flex>
  );
};

export default Pagination;
