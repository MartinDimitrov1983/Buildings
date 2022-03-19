import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Table from './Table';

test('Snapshot Table', () => {
    const { asFragment } = render(
        <BrowserRouter>
            <Table />
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});
