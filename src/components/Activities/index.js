import React from 'react';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import avatar from '../../images/avatar.png';

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  UserName,
  CardBody,
  CardFooter,
  Detail,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionsLabel,
} from './styles';

export default () => {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold>
            <Description> pagou a </Description>
            <Bold>@joaaomanooel</Bold>
          </Description>
        </CardHeader>
        <CardBody>
          <UserName>João Manoel</UserName>
        </CardBody>
        <CardFooter>
          <Detail>
            <Value>R$ 20,00</Value>
            <Divider />
            <Feather name="lock" color="#FFF" size={14} />
            <Date>há 2 dias</Date>
          </Detail>
          <Actions>
            <Option>
              <MaterialCommunityIcons name="comment-outline" size={14} color="#FFF" />
              <OptionsLabel>23</OptionsLabel>
            </Option>
            <Option>
              <Feather name="heart" size={14} color="#FFF" />
              <OptionsLabel>23</OptionsLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
};
