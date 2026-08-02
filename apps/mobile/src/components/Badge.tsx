import { View, Text, StyleSheet } from 'react-native';
import { colors, radius } from '../theme';

export type BadgeVariant = 'neutral' | 'brand' | 'success' | 'warning' | 'danger';

const BG: Record<BadgeVariant, string> = {
  neutral: colors.ink[100],
  brand: colors.brand[100],
  success: '#d1fae5',
  warning: '#fef3c7',
  danger: '#ffe4e6',
};

const FG: Record<BadgeVariant, string> = {
  neutral: colors.ink[700],
  brand: colors.brand[800],
  success: '#065f46',
  warning: '#92400e',
  danger: '#9f1239',
};

export function Badge({ label, variant = 'neutral' }: { label: string; variant?: BadgeVariant }) {
  return (
    <View style={[styles.badge, { backgroundColor: BG[variant] }]}>
      <Text style={[styles.text, { color: FG[variant] }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    borderRadius: radius.full,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
  },
});
