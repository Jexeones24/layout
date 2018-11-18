import styled from 'styled-components';
import { desktop, tablet } from '../../styles/media-queries';

const COL_WIDTH = 100 / 12;
const getWidth = (cols) => COL_WIDTH * cols;

const GUTTER = '12px';
const DOUBLE_GUTTER = '24px'

const StyledCol = styled.div`
  max-width: calc(100% - ${DOUBLE_GUTTER});
  width: ${({ smCols }) => smCols && `calc(${getWidth(smCols)}% - ${DOUBLE_GUTTER})`};
  margin: 0 ${GUTTER};
  display: inline-block;
  word-break: break-word;

  @media ${tablet} {
    width: ${({ medCols }) => medCols && `calc(${getWidth(medCols)}% - ${DOUBLE_GUTTER})`};
  }

  @media ${desktop} {
    width: ${({ lgCols }) => lgCols && `calc(${getWidth(lgCols)}% - ${DOUBLE_GUTTER})`};
  }
`;

export default StyledCol;
