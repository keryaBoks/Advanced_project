import { Comment } from 'entities/Comments/model/types/comment';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommtentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string,
    comments?: Comment[],
    isLoading?: boolean
}

export const CommentList = ({ className, comments, isLoading }: CommentListProps) => (
    <div className={classNames(cls.wrapper, {}, [className])}>
        {comments?.length ? comments.map((comment) => (
            <CommentCard comment={comment} isLoading={isLoading} key={comment.id} />
        ))
            : <Text title="Комменты отсутсвуют" />}
    </div>
);
