import { getAuthData } from 'entities/User/model/selector/getAuthData/getAuthData';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Sidebaritemtype } from 'widgets/Sidebar/model/types/sidebarItemTypes';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: Sidebaritemtype;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const isAuth = useSelector(getAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink theme={AppLinkTheme.SECONDARY} to={item.path} className={classNames(cls.item, { [cls.collapsed]: collapsed })}>
            <item.icon className={cls.icon} />
            <span className={cls.link}>{item.text}</span>
        </AppLink>
    );
});
