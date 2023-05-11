import { ArticleTextBlock } from 'entities/Articles/model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticlesTextBlockComponent.module.scss';

interface ArticlesTextBlockComponentProps {
    className?: string,
    block: ArticleTextBlock,
}

export const ArticlesTextBlockComponent = ({ className, block }: ArticlesTextBlockComponentProps) => (
    <div className={classNames(cls.wrapper, {}, [className])}>
        {block.title && <Text title={block.title} className={cls.title} />}
        {block.paragraphs.map((elem) => (
            <Text text={elem} key={elem} className={cls.text} />
        ))}
    </div>
);
