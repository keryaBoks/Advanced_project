import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'text',
    theme: ThemeButton.CLEAR,
};

export const OUTLINE = Template.bind({});
OUTLINE.args = {
    children: 'text',
    theme: ThemeButton.OUTLINE,
};

export const OUTLINE_DARK = Template.bind({});
OUTLINE_DARK.args = {
    children: 'text',
    theme: ThemeButton.OUTLINE,
};

OUTLINE_DARK.decorators = [ThemeDecorator(Theme.DARK)];
