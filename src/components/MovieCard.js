import React, { useState } from 'react';
import {
  Box,
  Text,
  Flex,
  Button,
  IconButton,
  Tooltip,
  Progress,
  useToast,
  Tag,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { RiThumbUpFill, RiDeleteBinFill } from 'react-icons/ri';
import ConfirmationDialog from 'components/ConfirmationDialog';

const MovieCard = () => {
  const [isLiked, setIsLiked] = useState(false);
  const toast = useToast();

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast({
      title: isLiked
        ? 'You removed your like from the movie'
        : 'You liked this movie!',
      position: 'top-right',
      status: isLiked ? 'info' : 'success',
      isClosable: true,
    });
  };

  const handleDelete = () => {
    toast({
      title: 'You deleted this movie!',
      position: 'top-right',
      status: 'success',
      isClosable: true,
    });
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <ConfirmationDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        onConfirm={handleDelete}
        title="Delete this movie?"
        confirmButtonLabel="Delete"
      />

      <Box
        pos="relative"
        rounded="lg"
        bg={mode('white', 'gray.700')}
        border="2px solid"
        borderColor={mode('gray.200', 'gray.500')}
        _hover={{ shadow: 'lg' }}
        transition="all 200ms ease"
        overflow="hidden"
      >
        <Tooltip label="Delete movie" aria-label="Delete movie">
          <IconButton
            pos="absolute"
            top={1}
            right={1}
            variant="ghost"
            aria-label="Delete movie"
            onClick={() => setIsDialogOpen(true)}
            fontSize="xl"
            rounded="full"
            color={mode('gray.400', 'gray.200')}
            _hover={{
              color: mode('red.500', 'red.600'),
              bg: mode('red.50', 'red.200'),
            }}
            colorScheme="red"
            icon={<RiDeleteBinFill />}
          />
        </Tooltip>
        <Box px={6} pt={6}>
          <Text fontWeight="bold" fontSize="lg" pb={2}>
            Taxi 5 : Le retour
          </Text>
          <Progress
            value={80}
            colorScheme="blue"
            rounded="lg"
            size="sm"
            bg={mode('red.100', 'red.200')}
          />
          <Flex
            align="center"
            justify="space-between"
            fontWeight={500}
            fontSize="sm"
            color={mode('gray.600', 'gray.400')}
            pb={2}
            pt={1}
          >
            <Text as="span">9 likes</Text>
            <Text as="span">2 dislikes</Text>
          </Flex>

          <Tag size="sm" variant="subtle" colorScheme="blue" mt={2}>
            Comedy
          </Tag>
        </Box>
        <Button
          w="full"
          mt={4}
          py={6}
          rounded="none"
          borderTop="2px solid"
          borderColor={mode('gray.200', 'gray.500')}
          variant="ghost"
          fontSize="md"
          size="sm"
          colorScheme={isLiked ? 'blue' : 'gray'}
          onClick={() => handleLike()}
          leftIcon={<RiThumbUpFill />}
        >
          {isLiked ? 'Remove like' : 'Like'}
        </Button>
      </Box>
    </>
  );
};

export default MovieCard;
