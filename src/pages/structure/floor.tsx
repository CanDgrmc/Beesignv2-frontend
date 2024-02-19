import { Helmet } from 'react-helmet-async';
// sections
import FloorListView from 'src/sections/structure/floor';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> FloorListView</title>
      </Helmet>

      <FloorListView />
    </>
  );
}
