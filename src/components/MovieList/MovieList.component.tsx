import { TMovie } from '@/types';

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
        return <div data-test-id='no-result'>No Results Found</div>;
    }

    return (
        <ul data-testid='movieList'>
            {movies.map((movie, index) => (
                <li key={index}>{movie.Title}</li>
            ))}
        </ul>
    );
}
