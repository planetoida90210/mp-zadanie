import React, { ChangeEvent, useState } from 'react';
import { useTags, Tag } from '../hooks/useTags';
import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

export const TagsTable: React.FC = () => {
    const [page, setPage] = useState<number>(0); 
    const [pageSize, setPageSize] = useState<number>(25);
    const [sortBy, setSortBy] = useState<string>('popular');
    const [sortOrder, setSortOrder] = useState<string>('desc');

    const handleChangePage = (event: unknown, newPage: number): void => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>): void => {
        setPageSize(parseInt(event.target.value, 10));
        setPage(0); 
    };

    const handleSortChange = (event: SelectChangeEvent): void => {
        setSortBy(event.target.value);
    };

    const handleSortOrderChange = (event: SelectChangeEvent): void => {
        setSortOrder(event.target.value);
    };

    const { data, isLoading, error } = useTags(page + 1, pageSize, sortBy, sortOrder);

    if (isLoading) return <CircularProgress />;
    if (error) return <div>Coś poszło nie tak...</div>;

    return (
        <>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="sort-by-label">Sortuj według</InputLabel>
                <Select
                    labelId="sort-by-label"
                    id="sort-by"
                    value={sortBy}
                    onChange={handleSortChange}
                >
                    <MenuItem value="popular">Popularność</MenuItem>
                    <MenuItem value="name">Nazwa</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="sort-order-label">Kolejność</InputLabel>
                <Select
                    labelId="sort-order-label"
                    id="sort-order"
                    value={sortOrder}
                    onChange={handleSortOrderChange}
                >
                    <MenuItem value="desc">Malejąco</MenuItem>
                    <MenuItem value="asc">Rosnąco</MenuItem>
                </Select>
            </FormControl>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nazwa</TableCell>
                            <TableCell align="right">Liczba postów</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.items.map((tag: Tag) => (
                            <TableRow key={tag.name}>
                                <TableCell>{tag.name}</TableCell>
                                <TableCell align="right">{tag.count}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
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
