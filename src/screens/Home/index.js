import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import Suggestions from '../../components/Suggestions';

import { Container, Header, BalanceContainer, BalanceTitle, Balance, ScrollView } from './styles';

export default () => {
  return (
    <Container>
      <ScrollView>
        <Header>
          <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10C86E" />
          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>
          <AntDesign name="gift" size={30} color="#10C86E" />
        </Header>
        <Suggestions />
      </ScrollView>
    </Container>
  );
};
