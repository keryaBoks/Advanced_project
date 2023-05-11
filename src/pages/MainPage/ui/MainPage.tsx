import { BugErrorButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const changeValue = (value : string) => {
        setValue(value);
    };
    return (
        <PageWrapper>
            <BugErrorButton />
            {t('Главная страница')}
            <Counter />
            <Input onChange={changeValue} value={value} placeholder="EnnerText" />
        </PageWrapper>
    );
};

export default MainPage;
