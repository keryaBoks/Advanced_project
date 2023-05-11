import { createSelector } from '@reduxjs/toolkit';
import { getAuthData } from 'entities/User/model/selector/getAuthData/getAuthData';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import ListIcon from 'shared/assets/icons/list.svg';
import Profile from 'shared/assets/icons/profile.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';
import { Sidebaritemtype } from '../types/sidebarItemTypes';

export const getSidebarItem = createSelector(
    getAuthData,
    (userData) => {
        const sidebarItemList: Sidebaritemtype[] = [
            {
                path: RoutePath.main,
                icon: HomeIcon,
                text: 'Главная',
            },
            {
                path: RoutePath.about,
                icon: ListIcon,
                text: 'О сайте',
            },
        ];

        if (userData) {
            sidebarItemList.push(
                {
                    path: RoutePath.profile,
                    icon: Profile,
                    text: 'Профиль',
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    icon: ArticlesIcon,
                    text: 'Блог',
                    authOnly: true,
                },
            );
        }
        return sidebarItemList;
    },
);
