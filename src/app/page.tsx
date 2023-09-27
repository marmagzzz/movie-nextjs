'use client';
import { ChangeEvent, useState } from 'react';

import styles from './page.module.scss';
import { httpGetMoviesByYear } from '@/http';
import MovieList from '@/components/MovieList/MovieList.component';
import { TMovie } from '@/types';

export default function Home() {
    const [movies, setMovies] = useState<TMovie[]>();
    const [inputYear, setInputYear] = useState<number>();
    const [isFetchingMovies, setIsFetchingMovies] = useState(false);
    const disableSearchBtn = inputYear == undefined;
    const searchBtnLabel = isFetchingMovies == true ? 'Fetching' : 'Search';

    const onClickOnSearch = async () => {
        if (disableSearchBtn == false) {
            setIsFetchingMovies(true);
            const { data } = await httpGetMoviesByYear(inputYear);
            setMovies(data?.data);
            setIsFetchingMovies(false);
        }
    };

    const onChangeYearInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInputYear(+e.target.value);
    };

    return (
        <main className={styles.main}>
            <header className={`${styles.headerContainer}`}>
                <div className={`${styles.headerDivContainer}`}>Movie List</div>
            </header>
            <section className={`${styles.sectionContainer}`}>
                <div className={`${styles.yearInputAndSearchContainer}`}>
                    <input
                        className={`${styles.inputYear}`}
                        value={inputYear}
                        type='number'
                        onChange={onChangeYearInput}
                        placeholder='Enter Year eg: 2015'
                    />
                    <button
                        className={`${styles.searchBtn}`}
                        onClick={onClickOnSearch}
                        disabled={disableSearchBtn}
                    >
                        {searchBtnLabel}
                    </button>
                </div>
                <MovieList movies={movies} />
            </section>
        </main>
    );
}
