import React from 'react';

import Wrapper from './styles';

import Col from '../Col';

const getColValue = (values, i) => {
  if (!values) {
    return 12;
  } else if (values.length === 1) {
    return values;
  }

  return values[i];
};

// cascading colprops if sm only specified
const Layout = ({ children, smCols, medCols, lgCols }) => {
  return (
    <Wrapper>
      {React.Children.map(
        children, ( child, i ) => (
          <Col
            key={i}
            smCols={getColValue(smCols, i)}
            medCols={getColValue(medCols, i)}
            lgCols={getColValue(lgCols, i)}
          >
            { child }
          </Col>
        )
      )}
    </Wrapper>
  );
};

export default Layout;
