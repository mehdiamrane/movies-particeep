import React from 'react';
import { Grid } from '@chakra-ui/react';
import MovieCard from 'components/MovieCard';

const MoviesGrid = () => {
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
      {new Array(12).fill(undefined).map((movie, i) => {
        return <MovieCard key={i} />;
      })}
    </Grid>
  );
};

export default MoviesGrid;
