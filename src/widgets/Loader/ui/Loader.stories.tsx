import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Loader } from './Loader';

export default {
    title: 'widgets/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const LOADER_LIGHT = Template.bind({});
LOADER_LIGHT.args = {};

export const LOADER_DARK = Template.bind({});
LOADER_DARK.args = {};

LOADER_DARK.decorators = [ThemeDecorator(Theme.DARK)];
