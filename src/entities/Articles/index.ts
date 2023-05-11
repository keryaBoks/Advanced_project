import { articleDetailsData, articleDetailsError, articleDetailsIsLoading } from './model/selector/articleDetails';
import { articlesDetailsSlice, articlesDetailsActions, articlesDetailsReducer } from './model/slice/articlesDetailsSlice';
import { Articles } from './model/types/article';
import { ArticlesDetails } from './ui/ArticlesDetails/ArticlesDetails';

export { ArticlesDetails, Articles };
export {
    articlesDetailsSlice, articlesDetailsActions, articlesDetailsReducer,
    articleDetailsIsLoading, articleDetailsError, articleDetailsData,
};
