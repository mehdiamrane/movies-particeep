import React from 'react';
import { Flex, Text, useColorModeValue as mode } from '@chakra-ui/react';

const EmptyBox = ({ infoText }) => {
  return (
    <Flex
      align="center"
      justify="center"
      bg={mode('gray.50', 'gray.700')}
      rounded="lg"
      border="2px solid"
      borderColor={mode('gray.200', 'gray.500')}
      px={6}
      py={12}
    >
      <Text
        fontSize="2xl"
        fontWeight={600}
        color={mode('gray.700', 'gray.200')}
      >
        {infoText || "There's nothing to see here!"}
      </Text>
    </Flex>
  );
};

export default EmptyBox;
