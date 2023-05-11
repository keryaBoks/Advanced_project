import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articleDetailsData } from 'entities/Articles';
import { Comment } from 'entities/Comments';
import { getAuthData } from 'entities/User/model/selector/getAuthData/getAuthData';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string> >(
    'addCommentsForm/addCommentForArticle',
    async (text, thunkApi) => {
        const {
            extra, rejectWithValue, dispatch, getState,
        } = thunkApi;

        const userData = getAuthData(getState());
        const article = articleDetailsData(getState());

        if (!userData || !article) {
            return rejectWithValue('error');
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                text,
                articleId: article.id,
                userId: userData.id,
            });
            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentsByArticleId(String(article.id)));

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
