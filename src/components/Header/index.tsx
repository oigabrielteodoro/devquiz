import React from 'react';

import avatarImg from '~/assets/Diego.png';

import { Container, Title, UserName, Avatar } from './styles';

const Header = () => {
  return (
    <Container>
      <Title>
        Olá, <UserName>Gabriel</UserName>
      </Title>

      <Avatar source={avatarImg} />
    </Container>
  );
};

export default Header;
