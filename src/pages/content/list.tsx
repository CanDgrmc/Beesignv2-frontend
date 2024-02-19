import { Helmet } from 'react-helmet-async';
// sections
import ContentListView from 'src/sections/content/list';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> ContentListView</title>
      </Helmet>

      <ContentListView />
    </>
  );
}
