import { View, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';
import { colors, radius, shadow } from '../theme';

export function Card({ children, style, padded = true }: { children: React.ReactNode; style?: StyleProp<ViewStyle>; padded?: boolean }) {
  return <View style={[styles.card, padded && styles.padded, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.ink[100],
    ...shadow.card,
  },
  padded: {
    padding: 16,
  },
});
