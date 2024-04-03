import React from 'react';
import { Tag, useTags } from '../hooks/useTags';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from '@mui/material';

export const TagsTable: React.FC<{page:number, pageSize:number}> = ({page, pageSize}) => {
    const { data, isLoading, isError} = useTags(page, pageSize);

    if(isLoading) return <CircularProgress />;
    if(isError) return <div>Coś poszło nie tak...</div>;

    return (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.items.map((tag: Tag) => (
                <TableRow key={tag.name}>
                  <TableCell component="th" scope="row">
                    {tag.name}
                  </TableCell>
                  <TableCell align="right">{tag.count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}
