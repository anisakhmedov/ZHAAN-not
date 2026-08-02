import { View, Text } from 'react-native';
import type { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../../navigation/AppNavigator';

export function BookingScreen({ route }: { route: RouteProp<RootStackParamList, 'Booking'> }) {
  return (
    <View>
      <Text>Book listing {route.params.listingId}</Text>
    </View>
  );
}
