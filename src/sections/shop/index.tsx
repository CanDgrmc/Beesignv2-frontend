// @mui
import { Box, Container, Stack, Tab, Tabs, Typography } from '@mui/material';

import { alpha } from '@mui/material/styles';
import { useCallback, useState } from 'react';
// components
import Label from 'src/components/label';
import { useSettingsContext } from 'src/components/settings';
import { useRouter } from 'src/routes/hook';
import { paths } from 'src/routes/paths';
import ShopItem from './components/ShopItem';

const testShopItems = [
  {
    id:'testid',
    name:'test',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi et nulla necessitatibus reprehenderit libero quaerat cupiditate vel, deserunt, culpa in eveniet aut numquam, corrupti autem! Quae nostrum saepe maiores illo!',
    price: 5,
    currency: 'USD',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBsfsZdwo1sKEGhYa3WhqC-YGRSashj85LJA&usqp=CAU',
    createdAt: new Date().toISOString(),
    period: 'yearly',
    showPopular: true,
  },
  {
    id:'testid1',
    name:'test1',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi et nulla necessitatibus reprehenderit libero quaerat cupiditate vel, deserunt, culpa in eveniet aut numquam, corrupti autem! Quae nostrum saepe maiores illo!',
    price: 15,
    currency: 'USD',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeoveqdW5vONV3ICr4kvGpCtFjMh_xefF3GA&usqp=CAU',
    createdAt: new Date().toISOString(),
    period: 'yearly',
    showPopular: true,
  },
  {
    id:'testid2',
    name:'test2',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi et nulla necessitatibus reprehenderit libero quaerat cupiditate vel, deserunt, culpa in eveniet aut numquam, corrupti autem! Quae nostrum saepe maiores illo!',
    price: 25,
    currency: 'USD',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeoveqdW5vONV3ICr4kvGpCtFjMh_xefF3GA&usqp=CAU',
    createdAt: new Date().toISOString(),
    period: 'yearly',
    showPopular: false,
  }
]

const TABS = [
  {
    value: 'all',
    label: 'All',
    count: 44,
  },
  {
    value: 'plugins',
    label: 'Plugins',
    // count: 22,
  },
  {
    value: 'widgets',
    label: 'Widgets',
    count: 12,
  },

];

export default function ShopView() {
  const settings = useSettingsContext();
  const [currentTab, setCurrentTab] = useState('all');
  const router = useRouter();

  const handleView = useCallback(
    (id: string) => {
      router.push(paths.shop.group.details(id));
    },
    [router]
  );

  const handleEdit = useCallback(
    (id: string) => {
      router.push(paths.shop.group.details(id));
    },
    [router]
  );

  const handleDelete = useCallback((id: string) => {
    console.info('DELETE', id);
  }, []);
  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  }, []);
  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> Shop </Typography>

      <Box
        sx={{
          mt: 5,
          width: 1,
          borderRadius: 2,
          padding: 5,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      > 
    <Tabs value={currentTab} onChange={handleChangeTab}>
      {TABS.map((tab) => (
        <Tab
          key={tab.value}
          iconPosition="end"
          value={tab.value}
          label={tab.label}
          icon={
            tab.count ?
            <Label
              variant='soft'
              color='info'
            > 
              {tab.count}
            </Label>
            : <></>
          }
          sx={{
            '&:not(:last-of-type)': {
              mr: 3,
            },
          }}
        />
      ))}
    </Tabs>
    <Stack
    spacing={0.2}
    marginTop={10}
    direction="row"
    >
      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
      >
      {
        testShopItems.map(testShopItem => <ShopItem
          key='test'
          shopItem={testShopItem}
          onView={() => handleView('testid')}
          onEdit={() => handleEdit('testid')}
          onDelete={() => handleDelete('testid')}
        />)
      }
       
      </Box>

      {/* {jobs.length > 8 && (
        <Pagination
          count={8}
          sx={{
            mt: 8,
            [`& .${paginationClasses.ul}`]: {
              justifyContent: 'center',
            },
          }}
        />
      )} */}
    </Stack>
    
    </Box>

    
    </Container>
  );

}
