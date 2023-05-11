/* eslint-disable i18next/no-literal-string */
import { articleDetailsData, articleDetailsError, articleDetailsIsLoading } from 'entities/Articles/model/selector/articleDetails';
import { fetchArticlesData } from 'entities/Articles/model/services/fetchArticlesDetailsData/fetchArticlesData';
import { articlesDetailsReducer } from 'entities/Articles/model/slice/articlesDetailsSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLodaer';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextSize } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleBlockType, ArticlesBlock } from 'entities/Articles/model/types/article';
import cls from './ArticlesDetails.module.scss';
import { ArticlesCodeBlockComponent } from '../ArticlesCodeBlockComponent/ArticlesCodeBlockComponent';
import { ArticlesImageBlockComponent } from '../ArticlesImageBlockComponent/ArticlesImageBlockComponent';
import { ArticlesTextBlockComponent } from '../ArticlesTextBlockComponent/ArticlesTextBlockComponent';

interface ArticlesDetailsProps {
    className?: string,
    id:string,
}

export const ArticlesDetails = ({ className, id }: ArticlesDetailsProps) => {
    const reducers: ReducerList = {
        articlesDetails: articlesDetailsReducer,
    };

    const isLoading = useSelector(articleDetailsIsLoading);
    const error = useSelector(articleDetailsError);
    const article = useSelector(articleDetailsData);

    const dispatch = useAppDispatch();

    const renderBlock = (block: ArticlesBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticlesCodeBlockComponent block={block} key={block.id} />;
        case ArticleBlockType.IMAGE:
            return <ArticlesImageBlockComponent block={block} key={block.id} />;
        case ArticleBlockType.TEXT:
            return <ArticlesTextBlockComponent block={block} key={block.id} />;
        default:
            return null;
        }
    };

    useEffect(() => {
        dispatch(fetchArticlesData(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text text="Произошла ошибка" />
        );
    } else {
        content = (
            <>
                <Avatar src={article?.img} className={cls.avatar} />
                <Text title={article?.title} text={article?.subtitle} size={TextSize.L} />
                <div className={cls.articlesInfo}>
                    <Icon Svg={EyeIcon} className={cls.icon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.articlesInfo}>
                    <Icon Svg={CalendarIcon} className={cls.icon} />
                    <Text text={article?.createdAt} />
                </div>
            </>
        );
    }

    return (
        <DynamicModuleLoader reducer={reducers} removeAfterAnmount>
            <div className={classNames(cls.wrapper, {}, [className])}>
                <div>{content}</div>
                <div>
                    {article?.blocks.map(renderBlock)}
                </div>
            </div>
        </DynamicModuleLoader>
    );
};
