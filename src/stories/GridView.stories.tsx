import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import GridView from '../components/GridView'; 
import { Tag } from '../hooks/useTags'; 

export default {
  title: 'Components/GridView',
  component: GridView,
} as Meta<typeof GridView>;

const Template: StoryObj<typeof GridView> = {
  render: (args) => <GridView {...args} />,
};

export const Default = {
  ...Template,
  args: {
    data: [
      { name: 'Tag 1', count: 100 },
      { name: 'Tag 2', count: 150 },
      { name: 'Tag 3', count: 200 },
    ] as Tag[],
  },
};
