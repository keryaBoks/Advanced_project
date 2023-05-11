import { ArticleView } from 'entities/Articles/model/types/article';
import { ArticleList } from 'entities/Articles/ui/ArticlesList/ArticleList';
import { ArticleViewsSelector } from 'entities/Articles/ui/ArticlesView/ArticlesViewSelector';
import { getArticleData, getArticleHasMore, getArticleInited, getArticlePageNumber } from 'pages/ArticlesPage/model/selector/getArticleData';
import { fetchArticleNextPage } from 'pages/ArticlesPage/model/services/fetchArticleNextPage';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlePage';
import { articlePageReducer, getArticlePage, articlePageActions } from 'pages/ArticlesPage/model/slice/articlePageSlice';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLodaer';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string
}

const reducer: ReducerList = {
    articlePage: articlePageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispath = useAppDispatch();
    const inited = useSelector(getArticleInited);
    const onChangeView = (view: ArticleView) => {
        dispath(articlePageActions.setViews(view));
    };
    const articles = useSelector(getArticlePage.selectAll);

    const onLoadNextPart = useCallback(() => {
        dispath(fetchArticleNextPage());
    }, [dispath]);

    useEffect(() => {
        if (!inited) {
            dispath(articlePageActions.initState());
            dispath(fetchArticlesList({
                page: 1,
            }));
        }
    }, [dispath, inited]);

    const views = useSelector(getArticleData);

    return (
        <DynamicModuleLoader reducer={reducer} removeAfterAnmount>
            <PageWrapper onScrollEnd={onLoadNextPart} className={classNames(cls.wrapper, {}, [className])}>
                <ArticleViewsSelector onViewClick={onChangeView} />
                <ArticleList articles={articles} views={views} />
            </PageWrapper>
        </DynamicModuleLoader>
    );
};

export default ArticlesPage;
