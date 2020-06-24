import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
  },
}))`
  background-color: #1E222B;
  height: 130px;
  margin: 10px 0px;
`;

export const Options = styled.TouchableOpacity`
  width: 100px;
  margin-right: 16px;
  align-items: center;
`;

export const Img = styled.Image``;

export const Label = styled.Text`
  color: #FFF;
  text-align: center;
  font-weight: bold;
  margin-top: 8px;
  font-size: 14px;
`;
