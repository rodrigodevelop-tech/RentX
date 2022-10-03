import React from 'react';
import { CarImage, CarImageWrapper, Container, ImageIndex, ImageIndexes } from './styles';

interface ImageSlideProps {
  imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: ImageSlideProps) {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>

      <CarImageWrapper>
        <CarImage
          source={{ uri: imagesUrl[0] }}
          resizeMode="contain"
        />
      </CarImageWrapper>
    </Container>
  )
}