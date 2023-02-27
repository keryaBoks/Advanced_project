import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ErrorPage } from './ErrorPage';

export default {
    title: 'widgets/Loader',
    component: ErrorPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = (args) => <ErrorPage {...args} />;

export const ERROR_PAGE_LIGHT = Template.bind({});
ERROR_PAGE_LIGHT.args = {};

export const ERROR_PAGE_DARK = Template.bind({});
ERROR_PAGE_DARK.args = {};

ERROR_PAGE_DARK.decorators = [ThemeDecorator(Theme.DARK)];
