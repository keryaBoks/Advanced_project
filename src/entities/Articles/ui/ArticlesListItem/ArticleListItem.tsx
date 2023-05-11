import {
    ArticleBlockType, Articles, ArticleTextBlock, ArticleView,
} from 'entities/Articles/model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ArticlesTextBlockComponent } from '../ArticlesTextBlockComponent/ArticlesTextBlockComponent';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string
    article: Articles,
    views: ArticleView,
}

export const ArticleListItem = ({ className, article, views }: ArticleListItemProps) => {
    const navigate = useNavigate();
    const onReadMore = useCallback(() => {
        navigate(RoutePath.articles_details + article.id);
    }, [article.id, navigate]);

    if (views === ArticleView.SMALL) {
        return (
            <div className={classNames(cls.wrapper, {}, [className, cls[views]])} onClick={onReadMore}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} alt="" className={cls.img} />
                    <div className={cls.createdAt}>{article.createdAt}</div>
                </div>
                <div className={cls.footer}>
                    <Text text={article.type.join(', ')} className={cls.type} />
                    <Text text={String(article.views)} className={cls.views} />
                    <Icon Svg={EyeIcon} />
                </div>
                <Text text={article.title} className={cls.title} />
            </div>
        );
    }

    const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

    return (
        <div className={classNames(cls.wrapperBig, {}, [className, cls[views]])}>
            <div className={cls.topInfo}>
                <Avatar src={article.user.avatar} size={40} />
                <Text text={article.user.username} className={cls.username} />
                <Text text={article.createdAt} className={cls.data} />
            </div>
            <div>
                <Text title={article.title} />
            </div>
            <div>
                <Text text={article.type.join(', ')} />
            </div>
            <div>
                <img src={article.img} alt="" className={cls.img} />
                {textBlock && (
                    <ArticlesTextBlockComponent block={textBlock} className={cls.textBlock} />
                )}
                <div className={cls.footerBig}>
                    <Button className={cls.btn} onClick={onReadMore}>Читать далее...</Button>
                    <Text text={String(article.views)} className={cls.view} />
                    <Icon Svg={EyeIcon} />
                </div>
            </div>
        </div>
    );
};
