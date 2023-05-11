import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getLoginisLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
