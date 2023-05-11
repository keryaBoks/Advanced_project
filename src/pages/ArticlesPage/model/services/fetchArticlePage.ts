import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Articles } from 'entities/Articles';
import { getArticleLimit } from '../selector/getArticleData';

interface FetchArticleProps{
    page?: number
}

export const fetchArticlesList = createAsyncThunk<
    Articles[],
    FetchArticleProps,
    ThunkConfig<string>
    >(
        'articlesPage/fetchArticlesList',
        async (props, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;
            const { page = 1 } = props;
            const limit = getArticleLimit(getState());

            try {
                const response = await extra.api.get<Articles[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
