import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getArticleData = (state: StateSchema) => state.articlePage?.view;
export const getArticleLimit = (state: StateSchema) => state.articlePage?.limit || 5;
export const getArticlePageNumber = (state: StateSchema) => state.articlePage?.page || 1;
export const getArticleHasMore = (state: StateSchema) => state.articlePage?.hasMore;
export const getArticleInited = (state: StateSchema) => state.articlePage?._inited;
