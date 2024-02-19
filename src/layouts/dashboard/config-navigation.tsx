import { useMemo } from 'react';
// routes
import { paths } from 'src/routes/paths';
// components
import Iconify from 'src/components/iconify';
import Label from 'src/components/label';
import SvgColor from 'src/components/svg-color';
// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
  installation: icon('ic_install'),
  device: icon('ic_device'),
  list: icon('ic_list'),
  plus: icon('ic_plus'),
  display: icon('ic_display'),
  shop: icon('ic_shop'),
  plugin: icon('ic_plugin'),
  schedules: icon('ic_schedules'),
  widgets: icon('ic_widgets'),
  structure: icon('ic_structure'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const data = useMemo(
    () => [
      // OVERVIEW
      // ----------------------------------------------------------------------
      {
        subheader: 'Overview',
        items:[
          {
            title: 'Home',
            path: paths.dashboard.root,
            icon: ICONS.dashboard,
          }
        ]
      },
      {
        subheader: 'setup',
        items: [
          { title: 'installation', path: paths.installation.group.root, icon: ICONS.installation },
          {
            title: 'structures',
            icon: ICONS.structure,
            path:'',
            children:[
              { title: 'device groups', path: paths.sturcture.group.root },
              { title: 'floors', path: paths.sturcture.group.floor },
            ]
          }
          // { title: 'two', path: paths.dashboard.two, icon: ICONS.ecommerce },
          // { title: 'three', path: paths.dashboard.three, icon: ICONS.analytics },
        ],
      },
     

      // MANAGEMENT
      // ----------------------------------------------------------------------
      {
        subheader: 'management',
        items: [

          {
            title: 'devices',
            path: paths.device.group.root,
            icon: ICONS.device,
          },
          {
            title: 'content',
            path: paths.content.group.root,
            icon: ICONS.display,
          },

          {
            title: 'schedules',
            path: paths.schedule.group.root,
            icon: ICONS.schedules,
          },
        ],
      },

      {
        subheader: 'store',
        items: [
          {
            title: 'My Products',
            path:'',
            icon: ICONS.product,
            children: [
              {
                title: 'Plugins',
                path: paths.dashboard.root,
              },
              {
                title: 'Widgets',
                path: paths.dashboard.root,
              },
            ]
          },
          {
            title: 'Shop',
            path: paths.shop.group.root,
            icon: ICONS.shop,
            info: (
              <Label color="error" startIcon={<Iconify icon="mdi:hot" />}>
                New
              </Label>
            ),
          },
        ],
      },
      
    ],
    []
  );

  return data;
}
