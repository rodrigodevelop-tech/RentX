import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';

import {
  Container,
  Content,
  Title,
  Message,
  Footer,
} from './styles';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import { ConfirmButton } from '../../components/ConfirmButton';

import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

export function SchedulingComplete() {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();
  const { width } = useWindowDimensions();

  function handleConfirmSchedulingComplete() {
    navigate('Home')
  }

  return (
    <Container>
      <LogoSvg width={width} />
      <StatusBar barStyle='light-content' backgroundColor="transparent" translucent />
      
      <Content>
        <DoneSvg />
        <Title>Carro alugado</Title>

        <Message>
          Agora você só precisa ir {'\n'}
          até a concessionaria da RENTX {'\n'}
          pegar o seu automóvel.
        </Message>
        <Footer>
          <ConfirmButton title='OK' onPress={handleConfirmSchedulingComplete} />
        </Footer>
      </Content>
    </Container>
  )
}