import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Home from '@/app/page';

describe('Movie list home page - test suite', () => {
    it('Should not display anything from the Movie listing component on initial load', () => {
        render(<Home />);

        const movieListComponent = screen.queryByTestId('movieList');
        const noResultComponent = screen.queryByTestId('no-result');

        expect(movieListComponent).toBeNull();
        expect(noResultComponent).toBeNull();
    });

    // TODO: Test cases for movie searching
});
