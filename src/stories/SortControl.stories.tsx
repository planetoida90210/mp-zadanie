import React from 'react';
import SortControl from '../components/SortControl'; // Dostosuj ścieżkę do swojego pliku
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/SortControl',
  component: SortControl,
} as Meta<typeof SortControl>;

const Template: StoryObj<typeof SortControl> = {
  render: (args) => <SortControl {...args} />,
};

export const Default = {
  ...Template,
  args: {
    sortBy: 'popular_desc',
    pageSize: 25,
    onSortChange: (sortBy: string) => console.log(sortBy),
    onPageSizeChange: (pageSize: number) => console.log(pageSize),
    onReset: () => console.log('Reset'),
  },
};
