import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { About, Brand, CardImages, Container, Content, Description, Details, Header, Name, Period, Price, Rent, Accessories, Footer } from './styles';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';
import { Button } from '../../components/Button';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

export function CarDetails() {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  function handleConfirmRental() {
    navigate('Scheduling');
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

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
      </Content>

      <Footer>
        <Button
          title='Escolher período do aluguel'
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  )
}