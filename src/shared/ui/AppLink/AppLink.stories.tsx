import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const APP_LINK_PRIMARY = Template.bind({});
APP_LINK_PRIMARY.args = {
    theme: AppLinkTheme.PRIMARY,
    children: 'text',
};

export const APP_LINK_RED = Template.bind({});
APP_LINK_RED.args = {
    theme: AppLinkTheme.RED,
    children: 'text',
};

export const APP_LINK_SECONDARY = Template.bind({});
APP_LINK_SECONDARY.args = {
    theme: AppLinkTheme.SECONDARY,
    children: 'text',
};
