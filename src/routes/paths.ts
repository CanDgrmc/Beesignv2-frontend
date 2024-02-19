// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
  DEVICES: '/devices',
  CONTENTS: '/contents',
  SCHEDULE: '/schedules',
  INSTALLATION: '/installation',
  STRUCTURE: '/structure',
  SHOP: '/shop',
};

// ----------------------------------------------------------------------

export const paths = {
  minimalUI: 'https://mui.com/store/items/minimal-dashboard/',
  // AUTH
  auth: {
    jwt: {
      login: `${ROOTS.AUTH}/jwt/login`,
      register: `${ROOTS.AUTH}/jwt/register`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    
  },
  device: {
    group: {
      root: ROOTS.DEVICES,
    },
  },
  content: {
    group: {
      root: ROOTS.CONTENTS,
    },
  },
  schedule: {
    group: {
      root: ROOTS.SCHEDULE,
    },
  },
  installation: {
    group: {
      root: ROOTS.INSTALLATION,
    },
  },
  shop: {
    group: {
      root: ROOTS.SHOP,
      details: (id: string) => `${ROOTS.SHOP}/detail/${id}`,
    },
  },
  sturcture: {
    group: {
      root: ROOTS.STRUCTURE,
      devicegroup: `${ROOTS.STRUCTURE}/devicegroups`,
      floor: `${ROOTS.STRUCTURE}/floors`,
    },
  }
};
