import { Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius, shadow } from '../theme';
import { getCategory } from '../lib/categories';
import type { Listing } from '../lib/mock-listings';

export function ListingCard({
  listing,
  onPress,
  style,
}: {
  listing: Listing;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}) {
  const category = getCategory(listing.category);

  return (
    <Pressable onPress={onPress} style={[styles.card, style]}>
      <LinearGradient colors={listing.gradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.gradient}>
        <View style={styles.categoryPill}>
          <Ionicons name={category.icon} size={13} color={colors.white} />
          <Text style={styles.categoryText}>{category.label}</Text>
        </View>
        <Pressable style={styles.heart} hitSlop={8}>
          <Ionicons name="heart-outline" size={18} color={colors.white} />
        </Pressable>
      </LinearGradient>

      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={1}>
          {listing.title}
        </Text>
        <Text style={styles.location} numberOfLines={1}>
          {listing.location}
        </Text>
        <View style={styles.footerRow}>
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={13} color="#f59e0b" />
            <Text style={styles.ratingText}>{listing.rating.toFixed(1)}</Text>
            <Text style={styles.reviewCount}>({listing.reviewCount})</Text>
          </View>
          <Text style={styles.price}>
            ${listing.price}
            {listing.priceSuffix && <Text style={styles.priceSuffix}> {listing.priceSuffix}</Text>}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 220,
    borderRadius: radius.lg,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.ink[100],
    overflow: 'hidden',
    ...shadow.card,
  },
  gradient: {
    height: 120,
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  categoryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(0,0,0,0.28)',
    borderRadius: radius.full,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  categoryText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: '600',
  },
  heart: {
    width: 28,
    height: 28,
    borderRadius: radius.full,
    backgroundColor: 'rgba(0,0,0,0.28)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    padding: 12,
    gap: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.ink[900],
  },
  location: {
    fontSize: 12,
    color: colors.ink[500],
  },
  footerRow: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.ink[900],
  },
  reviewCount: {
    fontSize: 11,
    color: colors.ink[500],
  },
  price: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.ink[900],
  },
  priceSuffix: {
    fontSize: 11,
    fontWeight: '400',
    color: colors.ink[500],
  },
});
