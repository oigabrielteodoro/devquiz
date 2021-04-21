import React from 'react';

import Header from '~/components/Header';
import CircularProgress from '~/components/CircularProgress';

import { data } from '~/constants';

import {
  Container,
  ProgressBarContainer,
  ProgressBarInformation,
  ProgressBarDescription,
  ProgressBarTitle,
  CategoriesContainer,
  CategoryItem,
  CategoryItemText,
  ChallengeList,
  ChallengeItem,
} from './styles';

const Dashboard = () => {
  return (
    <>
      <Header />

      <Container>
        <ProgressBarContainer>
          <CircularProgress progress={75} />

          <ProgressBarInformation>
            <ProgressBarTitle>Bom resultado</ProgressBarTitle>
            <ProgressBarDescription>Seu conhecimento está{`\n`}sendo aprimorado :)</ProgressBarDescription>
          </ProgressBarInformation>
        </ProgressBarContainer>

        <CategoriesContainer>
          <CategoryItem color="#EBEBFC" activeOpacity={0.8}>
            <CategoryItemText color="#6363DB">Fácil</CategoryItemText>
          </CategoryItem>
          <CategoryItem color="#E1F5EC" activeOpacity={0.8}>
            <CategoryItemText color="#03AB4F">Médio</CategoryItemText>
          </CategoryItem>
          <CategoryItem color="#F5EFE9" activeOpacity={0.8}>
            <CategoryItemText color="#E8891C">Difícil</CategoryItemText>
          </CategoryItem>
          <CategoryItem color="#F5E9EC" activeOpacity={0.8}>
            <CategoryItemText color="#CC3750">Perito</CategoryItemText>
          </CategoryItem>
        </CategoriesContainer>

        <ChallengeList
          data={data}
          contentContainerStyle={{
            justifyContent: 'space-between',
          }}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <ChallengeItem>
              <></>
            </ChallengeItem>
          )}
        />
      </Container>
    </>
  );
};

export default Dashboard;
