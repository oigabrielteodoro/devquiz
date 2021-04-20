import React from 'react';

import Header from '~/components/Header';
import CircularProgress from '~/components/CircularProgress';

import {
  Container,
  ProgressBarContainer,
  ProgressBarInformation,
  ProgressBarDescription,
  ProgressBarTitle,
} from './styles';

const Dashboard = () => {
  return (
    <>
      <Header />

      <Container>
        <ProgressBarContainer>
          <CircularProgress progress={75} />

          <ProgressBarInformation>
            <ProgressBarTitle>Vamos começar</ProgressBarTitle>
            <ProgressBarDescription>Complete os desafios e{`\n`}avance em conhecimento!</ProgressBarDescription>
          </ProgressBarInformation>
        </ProgressBarContainer>
      </Container>
    </>
  );
};

export default Dashboard;
