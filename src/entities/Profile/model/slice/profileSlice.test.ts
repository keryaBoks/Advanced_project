import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency/model/types/currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
    username: 'admin',
    age: 12312123231,
    country: Country.Belarus,
    first: 'Кирилл',
    lastname: 'Данченко',
    city: 'MINSK',
    currency: Currency.USD,
};

describe('profileSlice.test', () => {
    test('test setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: true,
        };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadOnly(false))).toEqual({ readonly: false });
    });

    test('test cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            readonly: false,
            form: data,
            validateError: [],
        };
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
            readonly: true, data, form: data, validateError: undefined,
        });
    });

    test('test updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: '12334' },
        };
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: '12334' }))).toEqual({
            form: { username: '12334' },
        });
    });

    test('test updateProfile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });

    test('test updateProfile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
            isLoading: false,
            data,
            form: data,
            validateError: undefined,
            readonly: true,
        });
    });
});
