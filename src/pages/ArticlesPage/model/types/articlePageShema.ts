import { EntityState } from '@reduxjs/toolkit';
import { Articles } from 'entities/Articles';
import { ArticleView } from 'entities/Articles/model/types/article';

export interface articlePageSchema extends EntityState<Articles> {
    isLoading?: boolean,
    error?: string,
    view: ArticleView,

    page: number;
    limit?: number;
    hasMore: boolean;
   _inited: boolean;
}
