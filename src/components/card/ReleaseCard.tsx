import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';

interface IReleaseCard {
  title: string;
  description: string;
  disabled?: boolean;
  onClick?: () => void;
}
export default function ReleaseCard({
  title,
  description,
  disabled,
  onClick,
}: IReleaseCard) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minWidth: 275,
        minHeight: 200,
      }}
      className='transition-transform hover:scale-105'
      onClick={onClick}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 20 }}
          variant='body1'
          color='text.primary'
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
          sx={{ maxWidth: 250 }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' disabled={disabled}>
          Acessar
        </Button>
      </CardActions>
    </Card>
  );
}
