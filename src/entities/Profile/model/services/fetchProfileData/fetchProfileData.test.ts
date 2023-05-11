import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency/model/types/currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestSyncthunk';
import { fetchProfileData } from './fetchProfileData';

const data = {
    username: 'admin',
    age: '21',
    country: Country.Belarus,
    lastname: 'Данченко',
    first: 'Кирилл',
    city: 'MINSK',
    currency: Currency.USD,
};

describe('fetchProfileData.test', () => {
    test('success', async () => {
        // @ts-ignore
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk('1');
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('erro login', async () => {
        // @ts-ignore
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
