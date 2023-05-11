import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (

        <PageWrapper className={classNames(cls.wrapper, {}, [className])}>
            {t('Страница не найдена')}
        </PageWrapper>
    );
};
