import React from 'react';
import { Container, Options, Img, Label } from './styles';

const items = [
  { id: String(Math.random()), img: require('../../images/01.png'), label: 'Recarga de Celular' },
  { id: String(Math.random()), img: require('../../images/02.png'), label: 'Uber Pré Pago' },
  { id: String(Math.random()), img: require('../../images/03.png'), label: 'Cartão de Transporte' },
  { id: String(Math.random()), img: require('../../images/04.png'), label: 'Minha SKY' },
  { id: String(Math.random()), img: require('../../images/05.png'), label: 'Central de Doações' },
  { id: String(Math.random()), img: require('../../images/06.png'), label: 'Pagar Conta' },
  { id: String(Math.random()), img: require('../../images/07.png'), label: 'Cobrar' },
];

export default () => {
  return (
    <Container horizontal>
      {items.map(item => (
        <Options key={item.id}>
          <Img source={item.img} />
          <Label>{item.label}</Label>
        </Options>
      ))}
    </Container>
  );
};
