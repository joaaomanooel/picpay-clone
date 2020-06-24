import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const Header = styled.View``;

export const Title = styled.Text`
  color: #FFF;
  font-size: 18px;
  font-weight: bold;
`;

export const Card = styled.View`
  background-color: #1E222B;
  border-radius: 10px;
  margin-top: 20px;
  padding: 15px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  margin-right: 15px;
`;

export const Description = styled.Text`
  color: #FFF;
  font-size: 16px;
`;

export const Bold = styled(Description)`
  font-weight: bold;
`;

export const CardBody = styled.View`
  margin-top: 20px;
`;

export const UserName = styled.Text`
  color: #FFF;
  font-size: 20px;
`;

export const CardFooter = styled.View`
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Detail = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  color: #F75175;
  font-size: 14px;
  font-weight: bold;
`;

export const Divider = styled.View`
  width: 2px;
  height: 13px;
  margin: 0 10px;
  background-color: rgba(255, 255,255, 0.4);
`;

export const Date = styled.Text`
  color: #FFF;
  font-size: 14px;
  margin-left: 5px;
`;

export const Actions = styled(Detail)``;

export const Option = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
`;

export const OptionsLabel = styled(Date)``;
