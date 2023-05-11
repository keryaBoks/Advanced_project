import { Currency } from 'entities/Currency/model/types/currency';
import { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import cls from './CurrencySelect.module.scss';

interface SelectCurrencyProps {
    className?: string,
    value?: string,
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

export const SelectCurrency = ({ className, value, onChange, readonly }: SelectCurrencyProps) => {
    const onChangeHandler = useCallback((value?: string) => {
        onChange?.(value as Currency);
    }, [onChange]);
    const optionsList = [
        { value: Currency.USD, content: Currency.USD },
        { value: Currency.RUB, content: Currency.RUB },
        { value: Currency.EUR, content: Currency.EUR },
    ];

    return (

        <Select
            className={classNames(cls.navbar, {}, [className])}
            value={value}
            label="валюта"
            options={optionsList}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
};
