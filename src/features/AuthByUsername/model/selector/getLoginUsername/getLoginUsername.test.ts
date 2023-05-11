import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginUsernmae } from './getLoginUsername';

describe('getLoginError', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '123',
            },
        };
        expect(getLoginUsernmae(state as StateSchema)).toEqual('123');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { };
        expect(getLoginUsernmae(state as StateSchema)).toEqual('');
    });
});
