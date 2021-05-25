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
import {
  RiThumbUpFill,
  RiThumbDownFill,
  RiDeleteBinFill,
} from 'react-icons/ri';
import ConfirmationDialog from 'components/ConfirmationDialog';
import { useDispatch } from 'react-redux';
import { likeMovie, deleteMovie } from 'actions';

const MovieCard = ({ movie }) => {
  const toast = useToast();

  const dispatch = useDispatch();

  const handleLike = isLiked => {
    dispatch(likeMovie(movie.id));
    toast({
      title: isLiked
        ? `You disliked ${movie.title}`
        : `You liked ${movie.title}`,
      position: 'top-right',
      status: isLiked ? 'info' : 'success',
      isClosable: true,
    });
  };

  const handleDelete = movie => {
    dispatch(deleteMovie(movie.id));

    toast({
      title: `You deleted ${movie.title}`,
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
        onConfirm={() => handleDelete(movie)}
        title="Delete this movie?"
        confirmButtonLabel="Delete"
      />
      <Box>
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
          <Tooltip label="Delete movie" hasArrow aria-label="Delete movie">
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
              {movie.title}
            </Text>
            <Progress
              value={(movie.likes / (movie.likes + movie.dislikes)) * 100}
              min={0}
              max={100}
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
              <Text as="span">{movie.likes} likes</Text>
              <Text as="span">{movie.dislikes} dislikes</Text>
            </Flex>

            <Tag size="sm" variant="subtle" colorScheme="blue" mt={2}>
              {movie.category}
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
            colorScheme={
              movie.isLiked === undefined
                ? 'gray'
                : movie.isLiked
                ? 'blue'
                : 'red'
            }
            onClick={() => handleLike(movie.isLiked)}
            leftIcon={
              movie.isLiked === undefined ? (
                <RiThumbUpFill />
              ) : movie.isLiked ? (
                <RiThumbUpFill />
              ) : (
                <RiThumbDownFill />
              )
            }
          >
            {movie.isLiked === undefined
              ? 'Like'
              : movie.isLiked
              ? 'Liked'
              : 'Disliked'}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default MovieCard;
