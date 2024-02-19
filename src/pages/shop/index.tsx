import { Helmet } from 'react-helmet-async';
// sections
import ShopView from 'src/sections/shop';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Shop</title>
      </Helmet>

      <ShopView />
    </>
  );
}
