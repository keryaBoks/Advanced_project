import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, SizeButton, ThemeButton } from './Button';

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

export const BACKGROUND = Template.bind({});
BACKGROUND.args = {
    children: 'text',
    theme: ThemeButton.BACKGROUND,
};

export const BACKGROUND_INVERTED = Template.bind({});
BACKGROUND_INVERTED.args = {
    children: 'text',
    theme: ThemeButton.BACKGROUND_INVERTED,
};

export const SQUARE = Template.bind({});
SQUARE.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND,
    square: true,
};

export const SQUARE_M = Template.bind({});
SQUARE_M.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.M,
};

export const SQUARE_L = Template.bind({});
SQUARE_L.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.L,
};

export const SQUARE_XL = Template.bind({});
SQUARE_XL.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.XL,
};
