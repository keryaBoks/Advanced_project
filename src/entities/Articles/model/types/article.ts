import { User } from "entities/User";

export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',

}

export interface ArticlesBlockBase {
    id: string,
    type: ArticleBlockType,
}

export interface ArticleImageBlock extends ArticlesBlockBase {
    type: ArticleBlockType.IMAGE
    src: string,
    title: string,
}

export interface ArticleTextBlock extends ArticlesBlockBase{
    type: ArticleBlockType.TEXT
    title?: string,
    paragraphs: string[],
}

export interface ArticleCodeBlock extends ArticlesBlockBase{
    type: ArticleBlockType.CODE
    code: string,
}

export type ArticlesBlock = ArticleCodeBlock | ArticleTextBlock | ArticleImageBlock;

export enum ArticleTypes {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONIMICS',
}

export enum ArticleView {
    SMALL = 'SMALL',
    BIG = 'BIG'
}

export interface Articles{
    id: string;
    title: string;
    user: User;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleTypes[];
    blocks: ArticlesBlock[];
}
