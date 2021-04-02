import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';

import { useBreakpointValue, useMediaQuery, useRem, useScreen } from '../lib';
import { Container, Title, RightBox } from './styles';

export function Hugo() {
  const screen = useScreen()
  const rem = useRem()

  const viewComponent = useBreakpointValue<ReactElement>({
    lg: <View style={{ flex: 1, backgroundColor: '#ccc' }} />,
    base: <View style={{ flex: 1, backgroundColor: '#f00' }} />
  })

  const isIPad = useMediaQuery({
    platform: 'ios',
    minBreakpoint: 'lg',
  })

  return (
    <Container>
      {viewComponent}
      <RightBox>
        <Title>Hugo</Title>

        <View style={{
          width: rem(6),
          height: rem(6),
          backgroundColor: '#00f',
        }} />
      </RightBox>
    </Container>
  );
}