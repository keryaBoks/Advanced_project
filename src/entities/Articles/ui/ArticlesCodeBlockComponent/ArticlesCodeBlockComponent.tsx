import { ArticleCodeBlock } from 'entities/Articles/model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code/Code';
import cls from './ArticlesCodeBlockComponent.module.scss';

interface ArticlesCodeBlockComponentProps {
    className?: string
    block: ArticleCodeBlock
}

export const ArticlesCodeBlockComponent = ({ className, block }: ArticlesCodeBlockComponentProps) => (
    <div className={classNames(cls.wrapper, {}, [className])}>
        <Code text={block.code} />
    </div>
);
