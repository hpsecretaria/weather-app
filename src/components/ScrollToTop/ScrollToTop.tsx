import React, { Fragment, useEffect } from 'react';

import { useLocation, withRouter } from 'react-router';

function ScrollToTop(): React.ReactElement {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <Fragment />;
}

export default withRouter(ScrollToTop);
