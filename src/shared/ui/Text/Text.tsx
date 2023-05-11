import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextThema{
    PRIMARY = 'primary',
    ERROR = 'error',

}

export enum TextSize{
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string,
    title?: string,
    text?: string,
    theme?: TextThema,
    size?: TextSize,
}

export const Text = ({
    className, title, text, theme = TextThema.PRIMARY, size = TextSize.M,
}: TextProps) => {
    const mods: Mods = {
        [cls[theme]]: true,
        [cls[size]]: true,
    };
    return (
        <div className={classNames(cls.textWrapper, mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
};
