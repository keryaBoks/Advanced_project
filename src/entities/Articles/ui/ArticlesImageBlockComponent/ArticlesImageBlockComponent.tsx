import { ArticleImageBlock } from 'entities/Articles/model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticlesImageBlockComponent.module.scss';

interface ArticlesImageBlockComponentProps {
    className?: string,
    block: ArticleImageBlock,
}

export const ArticlesImageBlockComponent = ({ className, block }: ArticlesImageBlockComponentProps) => (
    <div className={classNames(cls.wrapper, {}, [className])}>
        <img src={block.src} alt={block.type} className={cls.img} />
        {block.title && <Text text={block.title} />}
    </div>
);
