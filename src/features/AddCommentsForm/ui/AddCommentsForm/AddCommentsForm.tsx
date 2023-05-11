import { getCommentText } from 'features/AddCommentsForm/model/selector/getCommentText/getCommentText';
import { addCommentsFormActions, addCommentsFormReducer } from 'features/AddCommentsForm/model/slice/addCommentsFormSlice';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLodaer';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './AddCommentsForm.module.scss';

interface AddCommentsFormProps {
    className?: string
    sendComment: (text: string) => void;
}

const reducer: ReducerList = {
    addCommentsForm: addCommentsFormReducer,
};

export const AddCommentsForm = ({ className, sendComment }: AddCommentsFormProps) => {
    const text = useSelector(getCommentText);

    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((text: string) => {
        dispatch(addCommentsFormActions.addComment(text));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onCommentTextChange('');
        sendComment(text || '');
    }, [onCommentTextChange, sendComment, text]);

    return (
        <DynamicModuleLoader reducer={reducer} removeAfterAnmount>
            <div className={classNames(cls.wrapper, {}, [className])}>
                <Input
                    value={text}
                    placeholder="Введите комментарий"
                    onChange={onCommentTextChange}
                />
                <Button onClick={onSendHandler}>Отправить</Button>
            </div>
        </DynamicModuleLoader>
    );
};
