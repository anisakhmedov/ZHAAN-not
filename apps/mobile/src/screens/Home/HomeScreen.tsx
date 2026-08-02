import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Screen } from '../../components/Screen';
import { CategoryTile } from '../../components/CategoryTile';
import { ListingCard } from '../../components/ListingCard';
import { colors, radius } from '../../theme';
import { CATEGORIES } from '../../lib/categories';
import { getFeaturedListings } from '../../lib/mock-listings';
import type { RootStackParamList, TabParamList } from '../../navigation/types';

type Nav = CompositeNavigationProp<BottomTabNavigationProp<TabParamList, 'Home'>, NativeStackNavigationProp<RootStackParamList>>;

export function HomeScreen() {
  const navigation = useNavigation<Nav>();
  const featured = getFeaturedListings(6);

  return (
    <Screen padded={false}>
      <LinearGradient colors={['#0a2726', '#194543']} style={styles.hero}>
        <Text style={styles.heroTitle}>Book anything for your next trip</Text>
        <Text style={styles.heroSubtitle}>Hotels, salons, rentals, flights and trains — all in one app.</Text>
        <Pressable onPress={() => navigation.navigate('Search')} style={styles.searchPill}>
          <Ionicons name="search-outline" size={16} color={colors.ink[400]} />
          <Text style={styles.searchPlaceholder}>Where to?</Text>
        </Pressable>
      </LinearGradient>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Browse by category</Text>
        <View style={styles.grid}>
          {CATEGORIES.map((c) => (
            <CategoryTile key={c.slug} category={c} onPress={() => navigation.navigate('Search')} />
          ))}
        </View>
      </View>

      <View style={[styles.section, styles.lastSection]}>
        <Text style={styles.sectionTitle}>Handpicked for you</Text>
        <View style={styles.cardsRow}>
          {featured.map((listing) => (
            <ListingCard key={listing.id} listing={listing} onPress={() => navigation.navigate('Booking', { listingId: listing.id })} />
          ))}
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    padding: 20,
    paddingTop: 24,
    paddingBottom: 28,
    borderBottomLeftRadius: radius.xl,
    borderBottomRightRadius: radius.xl,
    gap: 10,
  },
  heroTitle: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '800',
  },
  heroSubtitle: {
    color: colors.ink[300],
    fontSize: 13,
    lineHeight: 18,
  },
  searchPill: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.white,
    borderRadius: radius.full,
    paddingHorizontal: 16,
    height: 46,
  },
  searchPlaceholder: {
    color: colors.ink[400],
    fontSize: 14,
  },
  section: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  lastSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.ink[900],
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  cardsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
});
