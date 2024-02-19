import { Helmet } from 'react-helmet-async';
// sections
import ScheduleListView from 'src/sections/schedule/list';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> ScheduleListView</title>
      </Helmet>

      <ScheduleListView />
    </>
  );
}
