import './App.css';
import React from 'react';
import { Container } from '@mui/material';
import { TagsTable } from './components/TagsTable';
import { queryClient } from './react-query-client';
import { QueryClientProvider } from 'react-query';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Container>
      <TagsTable />
    </Container>
    </QueryClientProvider>
  );
}

export default App;
