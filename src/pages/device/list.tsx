import { Helmet } from 'react-helmet-async';
// sections
import DeviceListView from 'src/sections/device/list';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> DeviceListView</title>
      </Helmet>

      <DeviceListView />
    </>
  );
}
