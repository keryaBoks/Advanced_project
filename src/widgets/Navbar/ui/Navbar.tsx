/* eslint-disable i18next/no-literal-string */
import { userActions } from 'entities/User';
import { getAuthData } from 'entities/User/model/selector/getAuthData/getAuthData';
import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, isSetAuthModal] = useState(false);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const authData = useSelector(getAuthData);

    const onCloseModal = useCallback(() => {
        isSetAuthModal(false);
    }, []);

    const onOpenModal = useCallback(() => {
        isSetAuthModal(true);
    }, []);

    const onLogut = useCallback(() => {
        dispatch(userActions.onLogout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button onClick={onLogut} className={cls.links} theme={ThemeButton.CLEAR}>
                    {t('выйти')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button onClick={onOpenModal} className={cls.links} theme={ThemeButton.CLEAR}>
                {t('Войти')}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
            <div />
        </div>
    );
};
