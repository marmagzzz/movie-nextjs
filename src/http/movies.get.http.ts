'use client';

import useSWR from 'swr';

import { APP_CONFIG } from '@/config';
import { TGenericResponseMovie, TMovie } from '@/types';
import { genericGetRequestor } from '@/utils';
import axios from 'axios';

const { MAIN_API_URL, MOVIE_ENDPOINT } = APP_CONFIG;

export function useGetMoviesByYear(movieYear: number) {
    const { data, isLoading, error } = useSWR<TGenericResponseMovie<TMovie[]>>(
        `${MAIN_API_URL}${MOVIE_ENDPOINT}?Year=${movieYear}`,
        genericGetRequestor
    );

    return { data, isLoading, error };
}

export function httpGetMoviesByYear(movieYear: number) {
    return axios.get<TGenericResponseMovie<TMovie[]>>(
        `${MAIN_API_URL}${MOVIE_ENDPOINT}?Year=${movieYear}`
    );
}
