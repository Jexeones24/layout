import React from 'react';
import StyledCol from './styles';

const Col = (props) => {
  const {
    children,
    smCols,
    medCols,
    lgCols,
  } = props;

  return (
    <StyledCol
      smCols={smCols}
      medCols={medCols}
      lgCols={lgCols}
    >
      { children }
    </StyledCol>
  );
};

export default Col;
