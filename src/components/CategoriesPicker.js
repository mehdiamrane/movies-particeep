import React from 'react';
import {
  Wrap,
  Stack,
  Tag,
  Tooltip,
  IconButton,
  TagLabel,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import {
  addSelectedCategory,
  removeSelectedCategory,
  resetSelectedCategories,
} from 'actions';

const CategoriesPicker = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  const handleCategoryClick = (isSelected, category) => {
    if (isSelected) {
      dispatch(removeSelectedCategory(category));
    } else {
      dispatch(addSelectedCategory(category));
    }
  };

  return (
    <Stack
      direction="row"
      spacing={0}
      minH={12}
      flexBasis={{ base: '100%', md: '50%' }}
      borderWidth="2px"
      borderColor={mode('gray.200', 'gray.500')}
      bg={mode('gray.50', 'gray.600')}
      color={mode('gray.700', 'gray.200')}
      fontWeight="bold"
      rounded="md"
      align="center"
      p={2}
    >
      <Wrap spacing={2}>
        <Tag
          size="md"
          borderRadius="full"
          variant="solid"
          colorScheme={categories.selected.length === 0 ? 'green' : 'gray'}
          overflow="hidden"
          pr={0}
        >
          <TagLabel pr={categories.selected.length > 0 ? 0 : 3}>All</TagLabel>
          {categories.selected.length > 0 && (
            <Tooltip
              label="Show all categories"
              hasArrow
              aria-label="Show all categories"
            >
              <IconButton
                size="xs"
                rounded="full"
                fontSize="sm"
                aria-label="Show all categories"
                variant="unstyled"
                colorScheme="gray"
                paddingLeft={2}
                paddingRight={2}
                onClick={() => dispatch(resetSelectedCategories())}
                icon={<FaPlus />}
              />
            </Tooltip>
          )}
        </Tag>

        {categories.all.map(category => {
          const isSelected = categories.selected.includes(category);
          return (
            <Tag
              size="md"
              borderRadius="full"
              variant="solid"
              colorScheme={isSelected ? 'green' : 'gray'}
              overflow="hidden"
              pr={0}
              key={category}
            >
              <TagLabel>{category}</TagLabel>
              <Tooltip
                label={`${
                  isSelected ? 'Remove' : 'Add'
                } ${category} to filters`}
                hasArrow
                aria-label={`${
                  isSelected ? 'Remove' : 'Add'
                } ${category} to filters`}
              >
                <IconButton
                  size="xs"
                  rounded="full"
                  fontSize="sm"
                  onClick={() => handleCategoryClick(isSelected, category)}
                  aria-label={`${
                    isSelected ? 'Remove' : 'Add'
                  } ${category} to filters`}
                  variant="unstyled"
                  colorScheme={isSelected ? 'green' : 'gray'}
                  paddingLeft={2}
                  paddingRight={2}
                  icon={isSelected ? <FaTimes /> : <FaPlus />}
                />
              </Tooltip>
            </Tag>
          );
        })}
      </Wrap>
    </Stack>
  );
};

export default CategoriesPicker;
