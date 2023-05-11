import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticlesDetailsSchema } from 'entities/Articles/model/types/articleDetailsSchema';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile/model/types/profile';
import { UserSchema } from 'entities/User';
import { AddCommentsFormSchema } from 'features/AddCommentsForm/model/types/addCommentsFormSchema';
import { LoginSchema } from 'features/AuthByUsername';
import { articlePageSchema } from 'pages/ArticlesPage/model/types/articlePageShema';
import { ArticleDetailsCommentsSchema } from 'pages/ArticlesPageDetails';
import { NavigateOptions, To } from 'react-router-dom';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    // асинхронные редьюсеры
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articlesDetails?: ArticlesDetailsSchema;
    articlesComments?: ArticleDetailsCommentsSchema;
    addCommentsForm?: AddCommentsFormSchema;
    articlePage?: articlePageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state : StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager;
}

export interface ThunkExtraArgs {
    api: AxiosInstance,
    // navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T>{
    extra: ThunkExtraArgs,
    rejectWithValue: T;
    state: StateSchema;
}
