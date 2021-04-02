import React from 'react';
import { Text, View } from 'react-native';

import { useScreen, useRem } from '../lib';
import { Header, Sidebar, Wrapper } from './styles';

export function Test() {
  const screen = useScreen()
  const rem = useRem()

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Text 
          style={{ 
            fontSize: rem(1), 
            fontWeight: 'bold', 
            color: '#fff' 
          }}
        >
          App header
        </Text>
      </Header>
      <Wrapper>
        <Sidebar />
        <View style={{ flex: 2, backgroundColor: '#333', padding: 24 }}>
          <Text style={{ fontSize: rem(1), color: '#FFF' }}>{JSON.stringify(screen)}</Text>
        </View>
      </Wrapper>
    </View>
  );
}