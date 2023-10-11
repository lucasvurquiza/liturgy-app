import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native'
import { COLORS } from '@utils/constants';
import { Routes } from '@routes/Routes';

export default function App() {
  return (
    <ThemeProvider theme={{
      colors: COLORS
    }}>
      <NavigationContainer>
        <StatusBar style="light" />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
