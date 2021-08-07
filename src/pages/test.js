import React from 'react';

import Layout from '../components/Layout';
import RedLegPictures from '../components/RedLegPictures';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <RedLegPictures />
    </article>
  </Layout>
);

export default IndexPage;
