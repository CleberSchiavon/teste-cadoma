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
    Icon: GridView,
  },
  {
    title: 'Ciclos',
    path: '/app/cicles',
    Icon: Dashboard,
  },
  {
    title: 'Finalizados',
    path: '/app/finished',
    Icon: CalendarMonth,
  },
  {
    title: 'Notificações',
    path: '/app/notifications',
    Icon: Notifications,
  },
  {
    title: 'Lançamentos',
    path: '/app/releases',
    Icon: NoteAlt,
  },
  {
    title: 'Relatórios',
    path: '/app/reports',
    Icon: Equalizer,
  },
  {
    title: 'Visão',
    path: '/app/visao-geral',
    Icon: RemoveRedEye,
  },
  {
    title: 'Cadastros',
    path: '/app/users',
    Icon: EditNote,
  },
  {
    title: 'Suporte Cadoma',
    path: '/app/suport',
    Icon: Construction,
  },
  {
    title: 'Sair',
    path: '/404',
    Icon: ExitToApp,
  },
];

export default navConfig;
