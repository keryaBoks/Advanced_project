import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '123',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('1233'))).toEqual({ username: '1233' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '123',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('1233'))).toEqual({ password: '1233' });
    });
});
