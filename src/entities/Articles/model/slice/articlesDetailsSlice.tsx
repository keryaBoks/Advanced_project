import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArticlesData } from '../services/fetchArticlesDetailsData/fetchArticlesData';
import { Articles } from '../types/article';
import { ArticlesDetailsSchema } from '../types/articleDetailsSchema';

const initialState: ArticlesDetailsSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

export const articlesDetailsSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticlesData.fulfilled, (state, action: PayloadAction<Articles>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticlesData.rejected, (state, action) => {
                state.isLoading = false;
                // @ts-ignore
                state.error = action.payload;
            });
    },
});

export const { actions: articlesDetailsActions } = articlesDetailsSlice;
export const { reducer: articlesDetailsReducer } = articlesDetailsSlice;
