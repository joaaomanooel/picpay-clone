import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Button = styled(LinearGradient).attrs(({ focused }) => ({
  colors: focused ? ['#FFF', '#CCC'] : ['#00FC6D', '#00AC4A'],
  start: [1, 0.2],
}))`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  color: ${({ focused }) => (focused ? '#333' : '#FFF')};
  font-size: 12px;
`;
