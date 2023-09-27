import { TMovie } from '@/types';
import styles from './MovieList.module.scss';

type TMovieListProps = {
    movies?: TMovie[];
};
export default function MovieList({ movies }: TMovieListProps) {
    // Initially, don't display anything, MovieList should not be rendered
    if (movies == undefined) {
        return null;
    }

    // Display this when the TMovie is empty
    if (movies != undefined && movies.length <= 0) {
        return (
            <div
                className={`${styles.movieListContainer}`}
                data-test-id='no-result'
            >
                No Results Found
            </div>
        );
    }

    return (
        <ul data-testid='movieList' className={`${styles.movieListContainer}`}>
            {movies.map((movie, index) => (
                <li key={index}>{movie.Title}</li>
            ))}
        </ul>
    );
}
