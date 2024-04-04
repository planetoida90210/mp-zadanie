import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Meta, StoryObj } from '@storybook/react'; 
import { TagsTable } from '../components/TagsTable';


const queryClient = new QueryClient();


export default {
  title: 'Components/TagsTable',
  component: TagsTable,
} as Meta<typeof TagsTable>;


export const Default: StoryObj<typeof TagsTable> = {
  render: () => (
    <QueryClientProvider client={queryClient}>
      <TagsTable />
    </QueryClientProvider>
  ),
};