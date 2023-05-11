import { getProfileData } from './model/selector/getProfileData/getProfileData';
import { getProfileError } from './model/selector/getProfileError/getProfileError';
import { getProfileForm } from './model/selector/getProfileForm/gerProfileForm';
import { getProfileIsLoading } from './model/selector/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from './model/selector/getProfileReadonly/getProfileReadonly';
import { getProfileValidateError } from './model/selector/getProfileValidateError/getProfileValidateError';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { updateProfileData } from './model/services/updateProfileData/updateProfileData';
import { profileReducer, profileSlice } from './model/slice/profileSlice';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';

export {
    profileReducer,
    profileSlice,
    fetchProfileData,
    ProfileCard,
    getProfileIsLoading,
    getProfileError,
    getProfileData,
    getProfileReadonly,
    getProfileForm,
    updateProfileData,
    getProfileValidateError,
};
