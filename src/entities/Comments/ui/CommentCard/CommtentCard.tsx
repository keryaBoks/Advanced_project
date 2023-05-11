import { Comment } from 'entities/Comments/model/types/comment';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string,
    comment: Comment,
    isLoading?: boolean,
}

export const CommentCard = ({ className, comment, isLoading }: CommentCardProps) => {
    if (isLoading) {
        return (
            <div className={classNames(cls.wrapper, {}, [className])}>
                <div className={cls.userInfo}>
                    <Skeleton width={30} height={30} border="50%" className={cls.icon} />
                    <Skeleton height={16} width={100} />
                </div>
                <Skeleton width="100%" height={50} className={cls.text} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.userInfo}>
                {comment.user.avatar ? <Avatar src={comment.user.avatar} size={50} className={cls.icon} /> : null}
                <Text text={comment.user.username} />
            </AppLink>
            <Text text={comment.text} />
        </div>
    );
};
