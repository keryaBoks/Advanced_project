import { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from '../Button/Button';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string
    text: string,
}

export const Code = ({ className, text }: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.wrapper, {}, [className])}>
            <Button theme={ThemeButton.OUTLINE} className={cls.button} onClick={onCopy}>Копирвоать</Button>
            <code>
                {text}
            </code>
        </pre>
    );
};
