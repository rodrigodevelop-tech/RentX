import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background_secondary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(325)}px;

  background-color: ${props => props.theme.colors.header};

  justify-content: center;
  padding: 25px;
  padding-top: ${getStatusBarHeight() + 30}px;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.shape};
  font-family: ${props => props.theme.fonts.secondary_semiBold};
  font-size: ${RFValue(34)}px;

  padding: 24px; 
`;

export const RentalPeriod = styled.View`
  width: 100%;
  margin-top: 32px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
 `;

export const DateInfo = styled.View`
  width: 30%;
 `;

export const DateTitle = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.secondary_medium};
  font-size: ${RFValue(10)}px;
`;

interface DateValueStyledProps {
  selected: boolean;
}

export const DateValue = styled.Text<DateValueStyledProps>`
  color: ${props => props.theme.colors.shape};
  font-family: ${props => props.theme.fonts.primary_medium};
  font-size: ${RFValue(15)}px;

  ${({ selected, theme }) => !selected && css`
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.text};
    padding-bottom: 5px;
  `};  
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24
  },
  showsVerticalScrollIndicator: false,
})``;

export const Footer = styled.View`
  padding: 24px;
`;