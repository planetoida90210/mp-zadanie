import './App.css';
import React, {useState} from 'react';
import { Container } from '@mui/material';
import { TagsTable } from './components/TagsTable';
import { queryClient } from './react-query-client';
import { QueryClientProvider } from 'react-query';

function App() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(25);
  return (
    <QueryClientProvider client={queryClient}>
    <Container>
      <TagsTable page={page} pageSize={pageSize} />
    </Container>
    </QueryClientProvider>
  );
}

export default App;
