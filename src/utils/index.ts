/**
 * Function for generic http request used for useSWR
 * @param { String } url - URL of request
 */
export function genericGetRequestor(url: string) {
    return fetch(`${url}`, {
        method: 'GET',
        next: {
            revalidate: 1_800,
        },
    }).then((response) => response.json());
}

/**
 * For Mocking HTTP requests only
 */
export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
