import { StyleSheet, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Screen } from '../../components/Screen';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { colors, radius } from '../../theme';
import { getCategory } from '../../lib/categories';
import { getListingById, LISTINGS } from '../../lib/mock-listings';
import type { RootStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Booking'>;

export function BookingScreen({ route }: Props) {
  const listing = getListingById(route.params.listingId) ?? LISTINGS[0];
  const category = getCategory(listing.category);
  const serviceFee = Math.round(listing.price * 0.08);
  const total = listing.price + serviceFee;

  return (
    <Screen>
      <LinearGradient colors={listing.gradient} style={styles.hero}>
        <View style={styles.categoryPill}>
          <Ionicons name={category.icon} size={13} color={colors.white} />
          <Text style={styles.categoryText}>{category.label}</Text>
        </View>
      </LinearGradient>

      <Text style={styles.title}>{listing.title}</Text>
      <View style={styles.locationRow}>
        <Ionicons name="location-outline" size={14} color={colors.ink[500]} />
        <Text style={styles.location}>{listing.location}</Text>
      </View>

      <Card style={styles.formCard}>
        <Text style={styles.formLabel}>Date</Text>
        <View style={styles.inputRow}>
          <Ionicons name="calendar-outline" size={16} color={colors.ink[400]} />
          <TextInput placeholder="Select date" placeholderTextColor={colors.ink[400]} style={styles.input} />
        </View>

        <Text style={[styles.formLabel, styles.mt]}>Guests</Text>
        <View style={styles.inputRow}>
          <Ionicons name="people-outline" size={16} color={colors.ink[400]} />
          <TextInput placeholder="2 guests" placeholderTextColor={colors.ink[400]} style={styles.input} />
        </View>
      </Card>

      <Card style={styles.summaryCard}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Base price</Text>
          <Text style={styles.summaryValue}>${listing.price}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Service fee</Text>
          <Text style={styles.summaryValue}>${serviceFee}</Text>
        </View>
        <View style={[styles.summaryRow, styles.totalRow]}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>${total}</Text>
        </View>
      </Card>

      <Button title="Confirm & pay" size="lg" fullWidth style={styles.cta} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    height: 140,
    borderRadius: radius.lg,
    padding: 12,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  categoryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(0,0,0,0.28)',
    borderRadius: radius.full,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  categoryText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.ink[900],
    marginTop: 16,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  location: {
    fontSize: 13,
    color: colors.ink[500],
  },
  formCard: {
    marginTop: 20,
  },
  formLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.ink[700],
    marginBottom: 6,
  },
  mt: {
    marginTop: 14,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    height: 46,
    borderWidth: 1,
    borderColor: colors.ink[200],
    borderRadius: radius.md,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: colors.ink[900],
  },
  summaryCard: {
    marginTop: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 13,
    color: colors.ink[600],
  },
  summaryValue: {
    fontSize: 13,
    color: colors.ink[700],
  },
  totalRow: {
    marginTop: 8,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.ink[100],
  },
  totalLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.ink[900],
  },
  totalValue: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.ink[900],
  },
  cta: {
    marginTop: 20,
    marginBottom: 24,
  },
});
