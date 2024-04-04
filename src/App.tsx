import './App.css';
import React from 'react';
import { Box, Container } from '@mui/material';
import { TagsTable } from './components/TagsTable';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './react-query-client';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container sx={{ pt: 4, pb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ width: '100%', maxWidth: 'lg', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TagsTable />
        </Box>
      </Container>
    </QueryClientProvider>
  );
}

export default App;
