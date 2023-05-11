import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency/model/types/currency';
import {
    fetchProfileData, getProfileData, getProfileError, getProfileForm, getProfileIsLoading, getProfileReadonly, getProfileValidateError, ProfileCard, profileReducer,
} from 'entities/Profile';
import { profileActions } from 'entities/Profile/model/slice/profileSlice';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLodaer';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper';
import { Text, TextThema } from 'shared/ui/Text/Text';
import cls from './ProfilePage.module.scss';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducer: ReducerList = {
    profile: profileReducer,
};

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();
    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });
    // const data = useSelector(getProfileData)
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const readOnly = useSelector(getProfileReadonly);
    const isLoading = useSelector(getProfileIsLoading);
    const validateProfileError = useSelector(getProfileValidateError);

    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);

    const onChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value: string) => {
        const newValue = value.replace(/\D/g, '');
        dispatch(profileActions.updateProfile({ age: Number(newValue || 0) }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    // const onChangeLastName = useCallback((value: string) => {
    //     dispatch(profileActions.updateProfile(data?.lastname : value || ""))
    // },[])

    return (

        <DynamicModuleLoader reducer={reducer} removeAfterAnmount>
            <PageWrapper className={classNames(cls.profile, {}, [className])}>
                <ProfilePageHeader />
                {validateProfileError?.length && validateProfileError.map((err) => (
                    <Text theme={TextThema.ERROR} text={err} key={err} />
                ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    readOnly={readOnly}
                />
            </PageWrapper>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
