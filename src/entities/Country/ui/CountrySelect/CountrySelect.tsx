import { Country } from 'entities/Country/model/types/country';
import { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import cls from './CountrySelect.module.scss';

interface SelecCountryProps {
    className?: string,
    value?: string,
    onChange?: (value: Country) => void;
    readonly?: boolean,
}

export const SelectCountry = ({ className, value, onChange, readonly }: SelecCountryProps) => {
    const onChangeHandler = useCallback((value?: string) => {
        onChange?.(value as Country);
    }, [onChange]);
    const optionsList = [
        { value: Country.Belarus, content: Country.Belarus },
        { value: Country.Russia, content: Country.Russia },
        { value: Country.Ukrine, content: Country.Ukrine },
    ];

    return (

        <Select
            className={classNames(cls.navbar, {}, [className])}
            value={value}
            label="Страна"
            options={optionsList}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
};
