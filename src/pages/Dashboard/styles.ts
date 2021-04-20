import styled from 'styled-components/native';
import colors from '~/styles/colors';
import fonts from '~/styles/fonts';

export const Container = styled.View`
  margin-top: -40px;

  padding: 0 20px;
`;

export const ProgressBarContainer = styled.View`
  background: ${colors.white};
  border-radius: 15px;
  padding: 24px;

  flex-direction: row;
  align-items: center;

  border-color: ${colors.gray};
  border-width: 1px;
`;

export const ProgressBarInformation = styled.View`
  align-items: flex-start;
  margin-left: 24px;
`;

export const ProgressBarTitle = styled.Text`
  color: ${colors.heading};
  font-family: ${fonts.heading};
  font-size: 18px;
  line-height: 24.52px;
`;

export const ProgressBarDescription = styled.Text`
  color: ${colors.text};
  font-family: ${fonts.text};
  font-size: 13px;
  line-height: 20px;
`;
