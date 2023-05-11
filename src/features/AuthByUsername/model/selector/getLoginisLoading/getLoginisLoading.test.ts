import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginisLoading } from './getLoginisLoading';

describe('getLoginError', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginisLoading(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { };
        expect(getLoginisLoading(state as StateSchema)).toEqual(false);
    });
});
