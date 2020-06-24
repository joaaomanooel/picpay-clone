import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #222;
  flex: 1;
`;

export const ScrollView = styled.ScrollView``;

export const Header = styled.View`
  height: 50px;
  padding: 0px 16px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const BalanceContainer = styled.View`
  align-self: center;
`;

export const BalanceTitle = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  text-align: center;
`;

export const Balance = styled.Text`
  color: #FFF;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;
