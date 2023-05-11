import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextThema } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLodaer';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getLoginError } from '../../model/selector/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername';
import { getLoginUsernmae } from '../../model/selector/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selector/getLoginPassword/getLoginPassword';
import { getLoginisLoading } from '../../model/selector/getLoginisLoading/getLoginisLoading';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducer : ReducerList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsernmae);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginisLoading);
    const error = useSelector(getLoginError);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, password, username]);
    return (
        <DynamicModuleLoader reducer={initialReducer} removeAfterAnmount>
            <div className={classNames(cls.loginForm, {}, [className])}>
                <Text title="Форма авторизации" />
                {error && <Text text={error} theme={TextThema.ERROR} />}
                <Input
                    type="text"
                    className={cls.input}
                    autoFocus
                    placeholder="Введите username"
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    type="text"
                    className={cls.input}
                    placeholder="Введите пароль"
                    onChange={onChangePassword}
                    value={password}
                />
                <Button className={cls.loginBtn} disabled={isLoading} onClick={onLoginClick}>Войти</Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
