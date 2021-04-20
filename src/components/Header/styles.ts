import { LinearGradient } from 'expo-linear-gradient';

import styled from 'styled-components/native';

import fonts from '~/styles/fonts';
import colors from '~/styles/colors';

export const Container = styled(LinearGradient).attrs({
  colors: colors.gradient,
  start: {
    x: -0,
    y: 0.3,
  },
})`
  padding: 65px 20px;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 20px;
  line-height: 30px;
  font-family: ${fonts.text};
`;

export const UserName = styled.Text`
  color: ${colors.white};
  font-size: 20px;
  line-height: 30px;
  font-family: ${fonts.heading};
`;
