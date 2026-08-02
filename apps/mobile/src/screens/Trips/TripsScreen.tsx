import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Screen } from '../../components/Screen';
import { Card } from '../../components/Card';
import { Badge, type BadgeVariant } from '../../components/Badge';
import { colors } from '../../theme';
import { getCategory } from '../../lib/categories';
import { getBookingsWithListing, type BookingStatus } from '../../lib/mock-bookings';

const STATUS_VARIANT: Record<BookingStatus, BadgeVariant> = {
  upcoming: 'brand',
  completed: 'success',
  cancelled: 'danger',
};

const STATUS_LABEL: Record<BookingStatus, string> = {
  upcoming: 'Upcoming',
  completed: 'Completed',
  cancelled: 'Cancelled',
};

export function TripsScreen() {
  const bookings = getBookingsWithListing();

  return (
    <Screen>
      <Text style={styles.title}>My trips</Text>

      <View style={styles.list}>
        {bookings.map(({ booking, listing }) => {
          const category = getCategory(listing.category);
          return (
            <Card key={booking.id} style={styles.card}>
              <View style={styles.row}>
                <LinearGradient colors={listing.gradient} style={styles.thumb} />
                <View style={styles.info}>
                  <View style={styles.badgeRow}>
                    <Badge label={category.label} variant="neutral" />
                    <Badge label={STATUS_LABEL[booking.status]} variant={STATUS_VARIANT[booking.status]} />
                  </View>
                  <Text style={styles.listingTitle} numberOfLines={1}>
                    {listing.title}
                  </Text>
                  <View style={styles.metaRow}>
                    <Ionicons name="calendar-outline" size={12} color={colors.ink[500]} />
                    <Text style={styles.metaText}>
                      {booking.startDate}
                      {booking.endDate ? ` – ${booking.endDate}` : ''}
                    </Text>
                  </View>
                </View>
                <Text style={styles.price}>${booking.total}</Text>
              </View>
            </Card>
          );
        })}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.ink[900],
    marginBottom: 16,
  },
  list: {
    gap: 12,
  },
  card: {
    padding: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  thumb: {
    width: 56,
    height: 56,
    borderRadius: 12,
  },
  info: {
    flex: 1,
    gap: 4,
  },
  badgeRow: {
    flexDirection: 'row',
    gap: 6,
  },
  listingTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.ink[900],
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: colors.ink[500],
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.ink[900],
  },
});
