export type TGenericResponseMovie<T> = {
    page: number;
    per_page: number;
    total: number;
    total_pages: 5;
    data: T;
};
