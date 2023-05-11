import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getLoginUsernmae = (state: StateSchema) => state?.loginForm?.username || '';
