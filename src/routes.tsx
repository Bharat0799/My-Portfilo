import Home from './pages/Home';
import WorkWithMe from './pages/WorkWithMe';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <Home />
  },
  {
    name: 'Work With Me',
    path: '/work-with-me',
    element: <WorkWithMe />
  },
  {
    name: 'Work With Me HTML',
    path: '/work-with-me.html',
    element: <WorkWithMe />
  }
];

export default routes;
