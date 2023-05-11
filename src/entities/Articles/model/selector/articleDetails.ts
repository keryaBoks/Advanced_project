import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const articleDetailsData = (state: StateSchema) => state.articlesDetails?.data;
export const articleDetailsError = (state: StateSchema) => state.articlesDetails?.error;
export const articleDetailsIsLoading = (state: StateSchema) => state.articlesDetails?.isLoading;
