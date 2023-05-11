import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleHasMore, getArticlePageNumber } from '../selector/getArticleData';
import { articlePageActions } from '../slice/articlePageSlice';
import { fetchArticlesList } from './fetchArticlePage';

export const fetchArticleNextPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlesPage/fetchArticlesList',
        async (_, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const hasMore = getArticleHasMore(getState());
            const page = getArticlePageNumber(getState());

            if (hasMore) {
                dispatch(articlePageActions.setPage(page + 1));
                dispatch(fetchArticlesList({
                    page: page + 1,
                }));
            }
        },
    );
