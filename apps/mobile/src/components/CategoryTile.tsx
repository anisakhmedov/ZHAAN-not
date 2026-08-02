import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius } from '../theme';
import type { CATEGORIES } from '../lib/categories';

export function CategoryTile({ category, onPress }: { category: (typeof CATEGORIES)[number]; onPress?: () => void }) {
  return (
    <Pressable onPress={onPress} style={styles.tile}>
      <View style={styles.iconWrap}>
        <Ionicons name={category.icon} size={20} color={colors.brand[700]} />
      </View>
      <Text style={styles.label}>{category.label}</Text>
      <Text style={styles.tagline} numberOfLines={1}>
        {category.tagline}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    minWidth: 100,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.ink[100],
    padding: 12,
    gap: 6,
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: radius.md,
    backgroundColor: colors.brand[50],
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.ink[900],
  },
  tagline: {
    fontSize: 11,
    color: colors.ink[500],
  },
});
