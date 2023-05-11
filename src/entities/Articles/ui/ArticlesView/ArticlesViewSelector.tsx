import { ArticleView } from 'entities/Articles/model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';
import BIG from 'shared/assets/icons/BIG.svg';
import SMAL from 'shared/assets/icons/SMAL.svg';
import { Button } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticlesView.module.scss';

interface ArticleViewProps {
    className?: string
    view?: ArticleView,
    onViewClick?: (view: ArticleView)=>void
}

const viewType = [
    {
        view: ArticleView.BIG,
        icon: SMAL,
    },
    {
        view: ArticleView.SMALL,
        icon: BIG,
    },
];

export const ArticleViewsSelector = ({ className, onViewClick, view }: ArticleViewProps) => {
    const onClickHandler = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            {viewType.map((view) => (
                <Button onClick={onClickHandler(view.view)} className={cls.btn} key={view.view}><Icon Svg={view.icon} /></Button>
            ))}
        </div>
    );
};
