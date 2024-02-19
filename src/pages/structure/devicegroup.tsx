import { Helmet } from 'react-helmet-async';
// sections
import DeviceGroupListView from 'src/sections/structure/devicegroup';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> DeviceGroupListView</title>
      </Helmet>

      <DeviceGroupListView />
    </>
  );
}
