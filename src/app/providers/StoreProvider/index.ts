import { createStore, AppDispatch } from './config/store';
import { StoreProvider } from './ui/StoreProvider';
import type { ReduxStoreWithManager, ThunkConfig } from './config/StateSchema';

export {
    StoreProvider, createStore, ReduxStoreWithManager, AppDispatch, ThunkConfig,
};
