import styled from 'styled-components/native';

import { darken } from 'polished';

import { FlatList, View } from 'react-native';
import colors from '~/styles/colors';
import fonts from '~/styles/fonts';
import ChallengeDTO from '~/dtos/ChallengeDTO';

interface CategoryItemProps {
  color: string;
}

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

export const CategoriesContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 24px 0 8px;
`;

export const CategoryItem = styled.TouchableOpacity<CategoryItemProps>`
  background: ${({ color }) => color};

  width: 80px;
  height: 32px;

  align-items: center;
  justify-content: center;

  border-radius: 28px;

  border-width: 1px;
  border-color: ${({ color }) => darken(0.1, color)};
`;

export const CategoryItemText = styled.Text<CategoryItemProps>`
  color: ${({ color }) => color};
  font-family: ${fonts.text};
  font-size: 13px;
`;

export const ChallengeList = styled(FlatList as new () => FlatList<ChallengeDTO>).attrs({
  numColumns: 2,
  showsHorizontalScrollIndicator: false,
})``;

export const ChallengeItem = styled.View`
  background: ${colors.white};
  padding: 21px;

  border-color: #e1e1e5;
  border-width: 1px;

  width: 160px;
  height: 177px;

  border-radius: 10px;

  margin-top: 16px;
`;
