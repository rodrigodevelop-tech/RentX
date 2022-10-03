import React from 'react';
import { useTheme } from 'styled-components';
import { Container, Header, Title, RentalPeriod, DateInfo, DateTitle, DateValue,Content, Footer } from './styles';

import { BackButton } from '../../components/BackButton';

import ArrowSvg from '../../assets/arrow.svg';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

export function Scheduling() {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  const theme = useTheme();

  function handleConfirmRental() {
    navigate('SchedulingDetails');
  }

  return (
    <Container>
      <Header>
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
        <BackButton onPress={() => { }} color={theme.colors.shape} />

        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>18/09/2022</DateValue>
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>
        </RentalPeriod>  
      </Header>      
      
      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title="confirmar" onPress={handleConfirmRental} />
      </Footer>

    </Container>
  )
}