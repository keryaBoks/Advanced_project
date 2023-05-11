import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getAuthData = (state: StateSchema) => state.user.authData;
