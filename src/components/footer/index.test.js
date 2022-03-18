import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Footer from './index';

test('Snapshot Footer', () => {
    const { asFragment } = render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});
