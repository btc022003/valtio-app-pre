import { useEffect } from 'react';
import { useSnapshot } from 'valtio';
import store from '../store';
import { loadMovieData } from '../store/features/movie';

function Movies() {
  const { movie } = useSnapshot(store);
  // console.log(movie);
  useEffect(() => {
    loadMovieData();
  }, []);
  return (
    <div className='movies'>
      <ul>
        {movie.movies.map((item: any) => (
          <li key={item.albumId}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
