import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { Tag } from '../hooks/useTags';

interface GridViewProps {
  data: Tag[];
}

const GridView: React.FC<GridViewProps> = ({ data }) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      {data.map((tag) => (
        <Card key={tag.name} sx={{ minWidth: 275, maxWidth: 300 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Nazwa
            </Typography>
            <Typography variant="h5" component="div">
              {tag.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Liczba postów
            </Typography>
            <Typography variant="body2">
              {tag.count}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default GridView;
