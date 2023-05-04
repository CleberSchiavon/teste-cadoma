import {
  DonutLarge,
  Notifications,
  SetMeal,
  TrendingUp,
} from '@mui/icons-material';

export const homeWidgets = [
  {
    title: 'Ciclos ativos',
    total: 25,
    color: 'success',
    icon: DonutLarge,
  },
  {
    title: 'Rendimento operacional',
    total: 10,
    color: 'success',
    icon: TrendingUp,
  },
  {
    title: 'Número de notificações',
    total: 45,
    color: 'error',
    icon: Notifications,
  },
  {
    title: 'Tanques desligados',
    total: 12,
    color: 'warning',
    icon: SetMeal,
  },
];
