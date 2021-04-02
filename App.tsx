import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import { Test } from './components/Test';
import { Hugo } from './hugo'
import { ThemeProvider } from './lib/integrations/styled-components';
import { ScreenProvider } from './lib/ScreenProvider';

export default function App() {
  return (
    <SafeAreaProvider>
      <ScreenProvider>
        <ThemeProvider>
          <View style={styles.container}>
            <Hugo />
            <StatusBar style="light" />
          </View>
        </ThemeProvider>
      </ScreenProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
});
