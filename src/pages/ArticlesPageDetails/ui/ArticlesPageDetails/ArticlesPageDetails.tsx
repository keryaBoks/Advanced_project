import { articleDetailsIsLoading, ArticlesDetails } from 'entities/Articles';
import { CommentList } from 'entities/Comments';
import { AddCommentsForm } from 'features/AddCommentsForm';
import { getCommentIsLoading } from 'pages/ArticlesPageDetails/model/selector/getCommentIsLoading/getCommentIsLoading';
import { addCommentForArticle } from 'pages/ArticlesPageDetails/model/services/addCommentForArticle';
import { fetchCommentsByArticleId } from 'pages/ArticlesPageDetails/model/services/fetchCommentsByArticleId';
import { articleDetailsCommentsReducer, getArticleComments } from 'pages/ArticlesPageDetails/model/slice/articlesDetailsCommentsSlice';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLodaer';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Button } from 'shared/ui/Button/Button';
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper';
import { Text, TextThema } from 'shared/ui/Text/Text';
import cls from './ArticlesPageDetails.module.scss';

interface ArticlesPageDetailsProps {
    className?: string
}

const reducer: ReducerList = {
    articlesComments: articleDetailsCommentsReducer,
};

const ArticlesPageDetails = ({ className }: ArticlesPageDetailsProps) => {
    const { id } = useParams<{ id: string }>();

    const navigate = useNavigate();
    const onBackToArticles = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const comments = useSelector(getArticleComments.selectAll);
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getCommentIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    if (!id) {
        return (
            <div className={classNames(cls.wrapper, {}, [className])}>
                <Text text="нет такой странциы" theme={TextThema.ERROR} />
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducer={reducer} removeAfterAnmount>
            <PageWrapper className={classNames(cls.wrapper, {}, [className])}>
                <Button onClick={onBackToArticles} className={cls.button}>Назад к списку статей</Button>
                <ArticlesDetails id={id} />
                <Text title="Комментарий" />
                <AddCommentsForm sendComment={onSendComment} />
                <CommentList
                    isLoading={isLoading}
                    comments={comments}
                />
            </PageWrapper>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPageDetails);
