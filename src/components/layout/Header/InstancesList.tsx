import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material/';
import * as React from 'react';

import logger from '@/lib/logger';

import { instanceData } from '@/data/instances';

interface IInstance {
  instanceName: string;
  instanceID: number;
}

function RenderInstance({ instanceName, instanceID }: IInstance) {
  return (
    <ListItem
      component='div'
      disablePadding
      onClick={() => logger(`Redirect na Instância de número: ${instanceID}`)}
    >
      <ListItemButton>
        <ListItemText secondary={`${instanceName}`} />
      </ListItemButton>
    </ListItem>
  );
}

export default function InstanceList() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 150,
        '& ul': { padding: 0 },
      }}
    >
      <List>
        {instanceData.map((instance) => (
          <RenderInstance
            instanceID={instance.id}
            instanceName={instance.name}
            key={instance.id}
          />
        ))}
      </List>
    </Box>
  );
}
