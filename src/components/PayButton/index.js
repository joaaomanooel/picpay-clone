import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';

import { Button, Label } from './styles';

export default ({ onPress = () => { }, focused = false }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button focused={focused}>
        <MaterialIcons name="attach-money" size={30} color={focused ? '#333' : '#FFF'} />
        <Label focused={focused}>Pagar</Label>
      </Button>
    </TouchableWithoutFeedback>
  );
};
