'use client';
import { useEffect, useState } from 'react';

import styles from './page.module.scss';
import { httpGetMoviesByYear, useGetMoviesByYear } from '@/http';
import MovieList from '@/components/MovieList/MovieList.component';
import { TMovie } from '@/types';

export default function Home() {
    const [movies, setMovies] = useState<TMovie[]>();

    const onClickOnSearch = async () => {
        const { data } = await httpGetMoviesByYear(2020);
        setMovies(data?.data);
    };

    return (
        <main className={styles.main}>
            <section>
                <button onClick={onClickOnSearch}>Search</button>
                <MovieList movies={movies} />
            </section>
        </main>
    );
}
