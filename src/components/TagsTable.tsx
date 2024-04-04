import React, { useState } from 'react';
import {  useTags } from '../hooks/useTags';
import { CircularProgress, TablePagination } from '@mui/material';
import SortControl from './SortControl';
import ViewControl from './ViewControl';
import ListView from './ListView';
import GridView from './GridView';

export const TagsTable: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(25);
  const [sortBy, setSortBy] = useState<string>('popular_desc');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  const handleChangePage = (event: unknown, newPage: number): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPageSize(parseInt(event.target.value, 10));
    setPage(0);
  };


  const { data, isLoading, error } = useTags(page + 1, pageSize, sortBy);

    if (isLoading) return <CircularProgress />;
    if (error) return <div>Coś poszło nie tak...</div>;

    return (
        <>
 <SortControl 
  sortBy={sortBy}
  pageSize={pageSize}
  onSortChange={setSortBy}
  onPageSizeChange={setPageSize}
  onReset={() => {
      setSortBy('popular_desc'); 
      setPageSize(25);
  }} 
/>
            <ViewControl onViewChange={(view) => setViewMode(view)} />
      {viewMode === 'list' ? (
        <ListView data={data.items} />
      ) : (
        <GridView data={data.items} />
      )}
            <TablePagination
                component="div"
                count={-1} 
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={pageSize}
                onRowsPerPageChange={handleChangeRowsPerPage}
               
            />
        </>
    );
};
