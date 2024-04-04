import React from 'react';
import ViewControl from '../components/ViewControl'; 
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/ViewControl',
  component: ViewControl,
} as Meta<typeof ViewControl>;

const Template: StoryObj<typeof ViewControl> = {
  render: (args) => <ViewControl {...args} />,
};

export const Default = {
  ...Template,
  args: {
    onViewChange: (view: 'list' | 'grid') => console.log(view),
  },
};
