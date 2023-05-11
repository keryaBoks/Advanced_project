import { Articles } from './article';

export interface ArticlesDetailsSchema {
    isLoading: boolean,
    error?: boolean,
    data?: Articles
}
