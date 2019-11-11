import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Input, Submit } from './styled';

export default function Main() {
  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar usuario"
        />
        <Submit>
          <Icon name="add" size={20} color="#fff" />
        </Submit>
      </Form>
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Usuários',
};
