import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NAVBAR_LIGHT = Template.bind({});
NAVBAR_LIGHT.args = {};

export const NAVBAR_DARK = Template.bind({});
NAVBAR_DARK.args = {};

NAVBAR_DARK.decorators = [ThemeDecorator(Theme.DARK)];
NAVBAR_LIGHT.decorators = [StoreDecorator({

})];
