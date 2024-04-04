import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, IconButton } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

interface SortControlProps {
  sortBy: string; 
  pageSize: number;
  onSortChange: (sortBy: string) => void;
  onPageSizeChange: (pageSize: number) => void;
  onReset: () => void; 
}

const SortControl: React.FC<SortControlProps> = ({
  sortBy,
  pageSize,
  onSortChange,
  onPageSizeChange,
  onReset,
}) => {
  const handleSortByChange = (event: SelectChangeEvent) => {
    onSortChange(event.target.value as string);
  };

 
  const handlePageSizeChange = (event: SelectChangeEvent) => {
    const size = parseInt(event.target.value, 10); 
    onPageSizeChange(size);
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', marginBottom: 2 }}>
     
     <FormControl variant="outlined" sx={{ minWidth: 120, '.MuiInputLabel-root': { top: '-7px' }, '.MuiOutlinedInput-root': { alignItems: 'center' } }}>
        <InputLabel id="sort-by-label">Sortuj po</InputLabel>
        <Select
          labelId="sort-by-label"
          id="sort-by"
          value={sortBy}
          onChange={handleSortByChange}
        >
          <MenuItem value="popular_desc">Popularność największa</MenuItem>
          <MenuItem value="popular_asc">Popularność najmniejsza</MenuItem>
          <MenuItem value="name_asc">A-Z</MenuItem>
          <MenuItem value="name_desc">Z-A</MenuItem>
        </Select>
      </FormControl>
     
      <FormControl variant="outlined" sx={{ minWidth: 120, '.MuiInputLabel-root': { top: '-7px' }, '.MuiOutlinedInput-root': { alignItems: 'center' } }}>
        <InputLabel id="page-size-label">Na stronie</InputLabel>
        <Select
          labelId="page-size-label"
          id="page-size"
          value={pageSize.toString()} 
          onChange={handlePageSizeChange}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </FormControl>
      <IconButton onClick={onReset} aria-label="reset">
        <RefreshIcon />
      </IconButton>
    </Box>
  );
};

export default SortControl;
