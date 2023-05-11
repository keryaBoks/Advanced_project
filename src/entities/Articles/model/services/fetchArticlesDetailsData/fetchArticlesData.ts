import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Articles } from '../../types/article';

export const fetchArticlesData = createAsyncThunk<Articles, string, ThunkConfig<string> >(
    'articles/fetchArticlesData',
    async (articleId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.get<Articles>(`/articles/${articleId}`);

            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('error');
        }
    },
);
