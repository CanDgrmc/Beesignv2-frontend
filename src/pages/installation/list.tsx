import { Helmet } from 'react-helmet-async';
// sections
import InstallationListView from 'src/sections/installation/list';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> InstallationListView</title>
      </Helmet>

      <InstallationListView />
    </>
  );
}
