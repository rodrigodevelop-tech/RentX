import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";

interface ButtonStyleProps {
  color?: string;
}

export const Container = styled(RectButton)<ButtonStyleProps>`
  width: 100%;

  padding: 19px;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.color};
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.primary_medium};
  font-size: ${RFValue(15)}px;
  color: ${props => props.theme.colors.shape};
`;