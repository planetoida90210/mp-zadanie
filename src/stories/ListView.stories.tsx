import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ListView from '../components/ListView'; 
import { Tag } from '../hooks/useTags'; 

export default {
  title: 'Components/ListView',
  component: ListView,
} as Meta<typeof ListView>;

const Template: StoryObj<typeof ListView> = {
  render: (args) => <ListView {...args} />,
};

export const Default = {
  ...Template,
  args: {
    data: [
      { name: 'Tag 1', count: 100 },
      { name: 'Tag 2', count: 200 },
      { name: 'Tag 3', count: 300 },
    ] as Tag[],
  },
};
