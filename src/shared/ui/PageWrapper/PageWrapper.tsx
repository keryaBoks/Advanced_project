import { MutableRefObject, ReactNode, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfinitScroll';
import cls from './PageWrapper.module.scss';

interface PageWrapperProps {
    className?: string,
    children: ReactNode,
    onScrollEnd?: ()=> void,
}

export const PageWrapper = ({
    className, children, onScrollEnd,
}: PageWrapperProps) => {
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    return (
        <div ref={wrapperRef} className={classNames(cls.textWrapper, {}, [className])}>
            {children}
            <div ref={triggerRef} />
        </div>
    );
};
