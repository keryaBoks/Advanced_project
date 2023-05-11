/* eslint-disable i18next/no-literal-string */
import { getProfileData, getProfileReadonly, updateProfileData } from 'entities/Profile';
import { profileActions } from 'entities/Profile/model/slice/profileSlice';
import { getAuthData } from 'entities/User/model/selector/getAuthData/getAuthData';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const readOnly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = () => {
        dispatch(profileActions.setReadOnly(false));
    };

    const onSave = () => {
        dispatch(updateProfileData());
    };

    const onCancelEdit = () => {
        dispatch(profileActions.cancelEdit());
    };

    const authData = useSelector(getAuthData);
    const profileData = useSelector(getProfileData);

    const cancelEdit = authData?.id === profileData?.id;

    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            <Text title="Профиль" />
            {cancelEdit && (
                <div className={cls.editBtn}>
                    {readOnly
                        ? (
                            <Button theme={ThemeButton.OUTLINE} className={cls.btn} onClick={onEdit}>
                                <div>редактировать</div>
                            </Button>
                        )
                        : (
                            <>
                                <Button theme={ThemeButton.OUTLINE_RED} className={cls.btn} onClick={onCancelEdit}>
                                    <div>Отменить</div>
                                </Button>
                                <Button theme={ThemeButton.OUTLINE} className={cls.btnSave} onClick={onSave}>
                                    <div>Сохранить</div>
                                </Button>
                            </>
                        )}
                </div>
            )}
        </div>
    );
};
