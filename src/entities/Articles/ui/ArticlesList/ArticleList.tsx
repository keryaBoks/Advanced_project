import { Articles, ArticleView } from 'entities/Articles/model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListItem } from '../ArticlesListItem/ArticleListItem';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string
    articles: Articles[],
    views?: ArticleView,
}

export const ArticleList = ({ className, articles, views = ArticleView.SMALL }: ArticleListProps) => (
    <div className={classNames(cls.wrapper, {}, [className, cls[views]])}>
        {articles.length > 0 ? articles.map((article) => (
            <ArticleListItem article={article} views={views} key={article.id } />
        )) : null}
    </div>
);
