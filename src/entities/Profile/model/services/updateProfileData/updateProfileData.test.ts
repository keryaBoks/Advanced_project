import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency/model/types/currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestSyncthunk';
import { ValidateProfileError } from '../../types/profile';
import { updateProfileData } from './updateProfileData';

const data = {
    username: 'admin',
    age: 12312123231,
    country: Country.Belarus,
    first: 'Кирилл',
    lastname: 'Данченко',
    city: 'MINSK',
    currency: Currency.USD,
};

describe('fetchProfileData.test', () => {
    test('success', async () => {
        // @ts-ignore
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('server error', async () => {
        // @ts-ignore
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test('client error', async () => {
        // @ts-ignore
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: {...data, first: '', lastname: ''},
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
});
