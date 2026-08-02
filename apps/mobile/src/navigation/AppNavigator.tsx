import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigator } from './TabNavigator';
import { BookingScreen } from '../screens/Booking/BookingScreen';
import { LoginScreen } from '../screens/Auth/LoginScreen';
import { colors } from '../theme';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,
          headerTitleStyle: { fontWeight: '700', color: colors.ink[900] },
          headerStyle: { backgroundColor: colors.white },
        }}
      >
        <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Booking" component={BookingScreen} options={{ title: 'Book now' }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Log in', presentation: 'modal' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
