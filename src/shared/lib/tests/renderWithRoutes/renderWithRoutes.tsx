import { ReactNode, Suspense } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';
import { MemoryRouter } from 'react-router-dom';

export interface renderWithRouterOptions {
    route: string
}

export function renderWithTranslation(component: ReactNode, options: renderWithRouterOptions) {
    const { route } = options;

    return render(
        <MemoryRouter initialEntries={[]}>
            <Suspense fallback="">
                <I18nextProvider i18n={i18n}>
                    {component}
                </I18nextProvider>
            </Suspense>
        </MemoryRouter>,
    );
}
