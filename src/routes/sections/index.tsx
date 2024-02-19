import { Navigate, useRoutes } from 'react-router-dom';
// config
import { PATH_AFTER_LOGIN } from 'src/config-global';
//
import { mainRoutes } from './main';

import { authRoutes } from './auth';
import { contentRoutes } from './contents';
import { dashboardRoutes } from './dashboard';
import { deviceRoutes } from './devices';
import { installationRoutes } from './installations';
import { scheduleRoutes } from './schedules';
import { shopRoutes } from './shop';
import { structureRoutes } from './structures';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to={PATH_AFTER_LOGIN} replace />,
    },

    // Auth routes
    ...authRoutes,

    // Dashboard routes
    ...dashboardRoutes,

    // Device routes
    ...deviceRoutes,

    // Content routes
    ...contentRoutes,

    // Schedule routes
    ...scheduleRoutes,

    // Structure routes
    ...structureRoutes,

    // Shop routes
    ...shopRoutes,

    // Installation routes
    ...installationRoutes,

    // Main routes
    ...mainRoutes,

    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
