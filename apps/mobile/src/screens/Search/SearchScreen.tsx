import { useMemo, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Screen } from '../../components/Screen';
import { ListingCard } from '../../components/ListingCard';
import { colors, radius } from '../../theme';
import { CATEGORIES, type CategorySlug } from '../../lib/categories';
import { LISTINGS } from '../../lib/mock-listings';
import type { RootStackParamList } from '../../navigation/types';

export function SearchScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategorySlug | null>(null);

  const results = useMemo(() => {
    return LISTINGS.filter((l) => {
      if (category && l.category !== category) return false;
      if (query && !`${l.title} ${l.location}`.toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    });
  }, [query, category]);

  return (
    <Screen padded={false} scroll={false}>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={16} color={colors.ink[400]} />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search listings or locations"
            placeholderTextColor={colors.ink[400]}
            style={styles.input}
          />
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={CATEGORIES}
          keyExtractor={(item) => item.slug}
          contentContainerStyle={styles.chipsRow}
          renderItem={({ item }) => {
            const active = category === item.slug;
            return (
              <Pressable
                onPress={() => setCategory(active ? null : item.slug)}
                style={[styles.chip, active && styles.chipActive]}
              >
                <Ionicons name={item.icon} size={14} color={active ? colors.white : colors.ink[600]} />
                <Text style={[styles.chipText, active && styles.chipTextActive]}>{item.label}</Text>
              </Pressable>
            );
          }}
        />
      </View>

      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.empty}>No results found.</Text>}
        renderItem={({ item }) => (
          <ListingCard
            listing={item}
            style={styles.fullWidthCard}
            onPress={() => navigation.navigate('Booking', { listingId: item.id })}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.ink[100],
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.ink[50],
    borderRadius: radius.md,
    paddingHorizontal: 14,
    height: 44,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: colors.ink[900],
  },
  chipsRow: {
    gap: 8,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderRadius: radius.full,
    paddingHorizontal: 12,
    paddingVertical: 7,
    backgroundColor: colors.ink[100],
  },
  chipActive: {
    backgroundColor: colors.brand[600],
  },
  chipText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.ink[600],
  },
  chipTextActive: {
    color: colors.white,
  },
  list: {
    padding: 16,
    gap: 12,
  },
  fullWidthCard: {
    width: '100%',
  },
  empty: {
    textAlign: 'center',
    color: colors.ink[500],
    marginTop: 32,
  },
});
