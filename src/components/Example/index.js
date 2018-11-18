import React from 'react';

import Styled from './styles';

import Layout from '../Layout';

const layoutProps = {
  smCols: [3],
  medCols: [2, 4, 6, 6, 4, 2],
  lgCols: [6, 6, 4, 4, 4, 12],
};

const Example = () => (
  <Layout fullwidth {...layoutProps}>
    {
      [...new Array(6)].map((el, i) => {
        return (
          <Styled key={i}>
          </Styled>
        );
      })
    }
  </Layout>
);

export default Example;
