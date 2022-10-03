import React from 'react';
import { Alert, StatusBar } from 'react-native';
import { CarList, Container, Header, HeaderContent, TotalCars } from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { CardCar } from '../../components/CardCar';

import CarImg from '../../assets/audi-rs.png';
import VolvoImg from '../../assets/volvo.png';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

type Car = {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}

const CARS = [
  {
    brand: 'AUDI',
    name: 'RD 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120
    },
    thumbnail: CarImg
  },
  {
    brand: 'VOLVO',
    name: 'XC40',
    rent: {
      period: 'AO DIA',
      price: 130
    },
    thumbnail: VolvoImg
  },
]


export function Home() {
  const { navigate } : NavigationProp<ParamListBase> = useNavigation();

  const carList = {
    brand: 'AUDI',
    name: 'RD 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120
    },
    thumbnail: CarImg
  }

  function handleCardDetails() {
    Alert.alert('Teste');
    navigate('CarDetails');
  }
  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>
      <CarList
        data={[1, 2, 3, 4 ,5]}
        keyExtractor={(item) => String(item)}
        renderItem={( {item} ) => (
          <CardCar data={carList} onPress={handleCardDetails} />
        )}
      />
    </Container>
  )
}