import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RoutesDecorator = (story: () => Story) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
