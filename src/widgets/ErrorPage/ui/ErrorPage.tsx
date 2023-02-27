/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const reload = () => {
        window.location.reload();
    };

    return (
        <div
            className={classNames(cls.wrapper, {}, [className])}
        >
            <Button onClick={reload}>Обновить страницу</Button>
        </div>
    );
};
