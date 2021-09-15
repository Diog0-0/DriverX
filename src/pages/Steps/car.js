import React, {useState, useEffect} from 'react';
import {Keyboard} from 'react-native';

import {
  Container,
  Button,
  ButtonText,
  Title,
  SubTitle,
  Input,
  Spacer,
} from '../../styles';

const Car = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setVisible(false);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setVisible(true);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <Container padding={30} justify="flex-start">
      <Container align="flex-start" height={40}>
        <Title>Cadastre seu veiculo</Title>
        <SubTitle>Preencha os campos abaixo.</SubTitle>
      </Container>
      <Container justify="flex-start">
        <Spacer height={50} />
        <Input placeholder="Placa do veiculo"></Input>
        <Spacer />
        <Input placeholder="Marca do veiculo"></Input>
        <Spacer />
        <Input placeholder="Cor do veiculo"></Input>
        <Spacer />
        <Input placeholder="Modelo do veiculo"></Input>
      </Container>
      <Container height={70} justify="flex-end">
        {visible && (
          <Button>
            <ButtonText>Comece a usar</ButtonText>
          </Button>
        )}
      </Container>
    </Container>
  );
};

export default Car;
