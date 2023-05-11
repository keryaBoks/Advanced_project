/* eslint-disable i18next/no-literal-string */
import { Country, SelectCountry } from 'entities/Currency';
import { Currency } from 'entities/Currency/model/types/currency';
import { SelectCurrency } from 'entities/Currency/ui/CurrencySelect/CurrencySelect';
import { Profile } from 'entities/Profile/model/types/profile';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextThema } from 'shared/ui/Text/Text';
import { Loader } from 'widgets/Loader/ui/Loader';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readOnly?: boolean;
    onChangeFirstName: (value?: string) => void;
    onChangeLastName: (value?: string) => void;
    onChangeAge: (value: string) => void;
    onChangeCity: (value?: string) => void
    onChangeAvatar: (value?: string) => void
    onChangeUsername: (value?: string) => void;
    onChangeCountry: (country: Country) => void;
    onChangeCurrency: (currency: Currency) => void;
}

export const ProfileCard = ({
    className, data, isLoading, error, onChangeFirstName,
    onChangeLastName, readOnly, onChangeAge, onChangeCity,
    onChangeAvatar, onChangeUsername, onChangeCurrency, onChangeCountry
}: ProfileCardProps) => {
    if (isLoading) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.loading])}>
                <Text theme={TextThema.ERROR} title="Произошла ошибка" text="Попробуйте перезгарузить страницу" />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readOnly,
    };

    return (

        <div className={classNames(cls.profileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar
                    && (
                        <div className={cls.avatarWrapper}>
                            <Avatar src={data?.avatar} alt="123" />
                        </div>
                    )}
                <Input
                    value={data?.first}
                    placeholder="Ваше имя"
                    className={cls.input}
                    onChange={onChangeFirstName}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.lastname}
                    placeholder="Ваша Фамилия"
                    className={cls.input}
                    onChange={onChangeLastName}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.age}
                    placeholder="Ваш Возвраст"
                    className={cls.input}
                    onChange={onChangeAge}
                    readOnly={readOnly}
                />
                {/* <Input
                    value={data?.country}
                    placeholder="Ваша Страна"
                    className={cls.input}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.city}
                    placeholder="Ваша Валюта"
                    className={cls.input}
                    onChange={onChangeCity}
                    readOnly={readOnly}
                /> */}
                <Input
                    value={data?.username}
                    placeholder="Ваш никнейм"
                    className={cls.input}
                    onChange={onChangeUsername}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.avatar}
                    placeholder="Ваш аватарка"
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readOnly={readOnly}
                />
                <SelectCurrency value={data?.currency} onChange={onChangeCurrency} readonly={readOnly} />
                <SelectCountry value={data?.country} onChange={onChangeCountry} readonly={readOnly} />
                {/* <Input
                    value={data?.city}
                    placeholder="Ваш Город"
                    className={cls.input}
                    onChange={onChangeCity}
                    readOnly={readOnly}
                /> */}

            </div>
        </div>
    );
};
