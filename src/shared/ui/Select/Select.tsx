import { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

interface SelectOptions{
    value: string;
    content: string;
}

interface SelectProps {
    className?: string
    label?: string,
    options?: SelectOptions[];
    value?: string,
    onChange?: (value?: string) => void;
    readonly?: boolean,
}

export const Select = memo(({
    className, label, options, value, onChange,readonly,
}: SelectProps) => {
    const onChangehandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const optionList = useMemo(() => options?.map((opt) => (
        <option
            value={opt.value}
            key={opt.value}
            className={cls.option}
        >
            {opt.content}
        </option>
    )), [options]);
    return (

        <div className={classNames(cls.wrapper, {}, [className])}>
            {label && (<span className={cls.label}>{`${label}>`}</span>)}
            <select
                className={cls.select}
                value={value}
                onChange={onChangehandler}
                disabled={readonly}
            >
                {optionList}
            </select>
        </div>
    );
});
