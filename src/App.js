import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import NavBar from 'components/NavBar';
import MoviesGrid from 'components/MoviesGrid';
import Filters from 'components/Filters';
import EmptyBox from 'components/EmptyBox';
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
      return;
    }

    const tempCategories = [];

    for (var i = 0; i < moviesCopy.length; i++) {
      let movieCat = moviesCopy[i].category;
      if (!tempCategories.includes(movieCat)) {
        tempCategories.push(movieCat);
      }
    }

    dispatch(setAllCategories(tempCategories));

    if (categories.selected.length > 0) {
      moviesCopy = moviesCopy.filter(movie =>
        categories.selected.includes(movie.category)
      );
    }

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
          {movies.displayed.length > 0 ? (
            <>
              <Filters />
              <MoviesGrid />
              <Pagination />
            </>
          ) : (
            <EmptyBox
              infoText={hasLoaded ? 'No more movies to display!' : 'Loading'}
            />
          )}
        </Box>
      </>
    </ChakraProvider>
  );
}

export default App;
