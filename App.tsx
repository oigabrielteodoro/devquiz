import React from 'react';

import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import { useFonts, NotoSans_400Regular, NotoSans_700Bold } from '@expo-google-fonts/noto-sans';

import AppRouter from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    NotoSans_400Regular,
    NotoSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <AppRouter />

      <StatusBar style="light" />
    </>
  );
}
