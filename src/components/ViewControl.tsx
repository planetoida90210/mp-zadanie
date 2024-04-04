import React from 'react';
import { IconButton } from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

interface ViewControlProps {
  onViewChange: (view: 'list' | 'grid') => void;
}

const ViewControl: React.FC<ViewControlProps> = ({ onViewChange }) => {
  return (
    <div>
      <IconButton onClick={() => onViewChange('list')} aria-label="list view">
        <ViewListIcon />
      </IconButton>
      <IconButton onClick={() => onViewChange('grid')} aria-label="grid view">
        <ViewModuleIcon />
      </IconButton>
    </div>
  );
};

export default ViewControl;
