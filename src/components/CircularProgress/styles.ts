import styled from 'styled-components/native';

import colors from '~/styles/colors';
import fonts from '~/styles/fonts';

export const Container = styled.View`
  position: relative;
`;

export const CurrentProgressText = styled.Text`
  color: ${colors.heading};
  font-family: ${fonts.heading};
  font-size: 18px;

  position: absolute;

  top: 31px;
  left: 27px;
`;
