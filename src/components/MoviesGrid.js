import React from 'react';
import { Grid } from '@chakra-ui/react';
import MovieCard from 'components/MovieCard';
import { useSelector } from 'react-redux';

const MoviesGrid = () => {
  const movies = useSelector(state => state.movies);

  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
        lg: 'repeat(4, 1fr)',
      }}
      gap={6}
    >
      {movies.displayed.length > 0 &&
        movies.displayed.map((movie, i) => {
          return <MovieCard movie={movie} key={movie.id} />;
        })}
    </Grid>
  );
};

export default MoviesGrid;
