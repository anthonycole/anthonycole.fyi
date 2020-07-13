import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.span`
  display: block;
  line-height: 1.5;
  color: ${({ color }) => () => {
    switch (color) {
      case 'grey':
        return '#999';
      default:
        return '#000';
    }
  }};
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '400';
      case 'medium':
        return '400';
      default:
        return '500';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '3.2rem';
      case 'medium':
        return '2.3rem';
      default:
        return '2rem';
    }
  }};
  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '2.6rem';
        case 'medium':
          return '2rem';
        default:
          return '1.6rem';
      }
    }};
  `};
`;
