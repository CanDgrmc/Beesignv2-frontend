// @mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { alpha } from '@mui/material/styles';
import { SeoIllustration } from 'src/assets/illustrations';

// components
import Link from '@mui/material/Link';
import { useSettingsContext } from 'src/components/settings';
import { useMockedUser } from 'src/hooks/use-mocked-user';
import { RouterLink } from 'src/routes/components';
import { paths } from 'src/routes/paths';
import AppWelcome from './components/app-welcome';
// ----------------------------------------------------------------------

export default function DashboardView() {
  const { user } = useMockedUser();

  const settings = useSettingsContext();
 
  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <AppWelcome
            title={`Welcome back 👋 \n ${user?.displayName}`}
            description="Don't forget to check out our store for new plugins"
            img={<SeoIllustration />}
            action={
              <Link component={RouterLink} href={paths.shop.group.root} underline="none" variant="subtitle2">
                Go to shop
              </Link>
              
            }
          />

      <Box
        sx={{
          mt: 5,
          width: 1,
          height: 320,
          borderRadius: 2,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      />
    </Container>
  );
}
