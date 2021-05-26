import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import NavBar from 'components/NavBar';
import MoviesGrid from 'components/MoviesGrid';
import Filters from 'components/Filters';
import Pagination from 'components/Pagination';
import { movies$ } from 'data/movies';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadMovies,
  setDisplayedMovies,
  setMaxPage,
  setAllCategories,
} from 'actions';

function App() {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies);
  const elementsPerPage = useSelector(state => state.elementsPerPage);
  const pagination = useSelector(state => state.pagination);
  const categories = useSelector(state => state.categories);

  const [hasLoaded, setHasloaded] = useState(false);

  useEffect(() => {
    movies$.then(result => {
      setHasloaded(true);
      dispatch(loadMovies(result));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let moviesCopy = [...movies.all];

    if (moviesCopy.length === 0 && movies.displayed.length === 0) {
      // doing this because this useEffect runs before movies have been loaded.
      return;
    }

    //
    // Gets categories from movies and dispatch theme
    //
    const tempCategories = [];

    for (var i = 0; i < moviesCopy.length; i++) {
      let movieCat = moviesCopy[i].category;
      if (!tempCategories.includes(movieCat)) {
        tempCategories.push(movieCat);
      }
    }

    dispatch(setAllCategories(tempCategories));

    //
    // Filters all movies based on selected categories (if any).
    //
    if (categories.selected.length > 0) {
      moviesCopy = moviesCopy.filter(movie =>
        categories.selected.includes(movie.category)
      );
    }

    //
    // Sets max page and displayed movies per page
    //
    dispatch(setMaxPage(moviesCopy.length / elementsPerPage));

    dispatch(
      setDisplayedMovies(
        moviesCopy.slice(
          elementsPerPage * (pagination.current - 1),
          elementsPerPage * (pagination.current - 1) + elementsPerPage
        )
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies.all, elementsPerPage, pagination.current, categories.selected]);

  return (
    <ChakraProvider theme={theme}>
      <>
        <NavBar />
        <Box maxW="7xl" mx="auto" py={16} px={6}>
          <Filters hasLoaded={hasLoaded} />
          <MoviesGrid hasLoaded={hasLoaded} />
          <Pagination hasLoaded={hasLoaded} />
        </Box>
      </>
    </ChakraProvider>
  );
}

export default App;
