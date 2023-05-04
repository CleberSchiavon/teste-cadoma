import {
  CalendarMonth,
  Construction,
  Dashboard,
  EditNote,
  Equalizer,
  ExitToApp,
  GridView,
  NoteAlt,
  Notifications,
  RemoveRedEye,
} from '@mui/icons-material';

const navConfig = [
  {
    title: 'Lotes',
    path: '/lots',
    icon: GridView,
  },
  {
    title: 'Ciclos',
    path: '/app/cicles',
    icon: Dashboard,
  },
  {
    title: 'Finalizados',
    path: '/app/finished',
    icon: CalendarMonth,
  },
  {
    title: 'Notificações',
    path: '/app/notifications',
    icon: Notifications,
  },
  {
    title: 'Lançamentos',
    path: '/app/releases',
    icon: NoteAlt,
  },
  {
    title: 'Relatórios',
    path: '/app/reports',
    icon: Equalizer,
  },
  {
    title: 'Visão',
    path: '/app/visao-geral',
    icon: RemoveRedEye,
  },
  {
    title: 'Cadastros',
    path: '/app/users',
    icon: EditNote,
  },
  {
    title: 'Suporte Cadoma',
    path: '/app/suport',
    icon: Construction,
  },
  {
    title: 'Sair',
    path: '/404',
    icon: ExitToApp,
  },
];

export default navConfig;
