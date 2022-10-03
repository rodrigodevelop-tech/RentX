import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import {
  Brand,
  CardImages,
  Container,
  Content,
  Description,
  Details,
  Header,
  Name,
  Period,
  Price,
  Rent,
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateValue,
  DateTitle,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

export function SchedulingDetails() {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();
  const theme = useTheme();

  function handleConfirmRental() {
    navigate('SchedulingComplete');
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => { }} />
      </Header>

      <CardImages>
        <ImageSlider imagesUrl={['https://www.pngplay.com/wp-content/uploads/9/Lamborghini-PNG-Photo-Image.png']}/>
      </CardImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>
          
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory
            name='380Km/h'
            icon={speedSvg}
          />
          <Accessory
            name='3.2s'
            icon={accelerationSvg}
          />
          <Accessory
            name='800 HP'
            icon={forceSvg}
          />
          <Accessory
            name='Gasolina'
            icon={gasolineSvg}
          />
          <Accessory
            name='Auto'
            icon={exchangeSvg}
          />
          <Accessory
            name='2 pessoas'
            icon={peopleSvg}
          />
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>
            <DateInfo>
              <DateTitle>De</DateTitle>
              <DateValue>18/09/2022</DateValue>
            </DateInfo>
            <Feather
              name="chevron-right"
              size={RFValue(10)}
              color={theme.colors.text}
          />
           <DateInfo>
              <DateTitle>ATÉ</DateTitle>
              <DateValue>18/09/2022</DateValue>
            </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title='Alugar agora'
          color={theme.colors.success}
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  )
}