import React from 'react';
import { Grid, Skeleton } from '@chakra-ui/react';
import MovieCard from 'components/MovieCard';
import { useSelector } from 'react-redux';
import EmptyBox from 'components/EmptyBox';

const MoviesGrid = ({ hasLoaded }) => {
  const movies = useSelector(state => state.movies);

  return (
    <Skeleton minH={48} rounded="lg" isLoaded={hasLoaded}>
      {movies.all.length < 1 && hasLoaded ? (
        <EmptyBox minH={48} infoText="No more movies to display!" />
      ) : (
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          }}
          gap={6}
        >
          {movies.all.length > 0 &&
            movies.displayed.map((movie, i) => {
              return <MovieCard movie={movie} key={movie.id} />;
            })}
        </Grid>
      )}
    </Skeleton>
  );
};

export default MoviesGrid;
