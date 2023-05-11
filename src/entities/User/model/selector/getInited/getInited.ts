import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getInited = (state: StateSchema) => state.user._inited;
