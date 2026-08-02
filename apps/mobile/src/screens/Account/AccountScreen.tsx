import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Screen } from '../../components/Screen';
import { Card } from '../../components/Card';
import { colors, radius } from '../../theme';
import type { RootStackParamList } from '../../navigation/types';

const MENU_ITEMS: { label: string; icon: keyof typeof Ionicons.glyphMap }[] = [
  { label: 'Payment methods', icon: 'card-outline' },
  { label: 'Favorites', icon: 'heart-outline' },
  { label: 'Notifications', icon: 'notifications-outline' },
  { label: 'Help & support', icon: 'help-circle-outline' },
  { label: 'Settings', icon: 'settings-outline' },
];

export function AccountScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Screen>
      <View style={styles.profileRow}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={26} color={colors.brand[700]} />
        </View>
        <View>
          <Text style={styles.name}>Jane Doe</Text>
          <Text style={styles.email}>jane@example.com</Text>
        </View>
      </View>

      <Card style={styles.menuCard} padded={false}>
        {MENU_ITEMS.map((item, i) => (
          <Pressable key={item.label} style={[styles.menuItem, i < MENU_ITEMS.length - 1 && styles.menuItemBorder]}>
            <View style={styles.menuLeft}>
              <Ionicons name={item.icon} size={18} color={colors.ink[600]} />
              <Text style={styles.menuLabel}>{item.label}</Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color={colors.ink[400]} />
          </Pressable>
        ))}
      </Card>

      <Pressable style={styles.logout} onPress={() => navigation.navigate('Login')}>
        <Ionicons name="log-out-outline" size={18} color="#e11d48" />
        <Text style={styles.logoutText}>Log out</Text>
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 20,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: radius.full,
    backgroundColor: colors.brand[100],
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.ink[900],
  },
  email: {
    fontSize: 13,
    color: colors.ink[500],
    marginTop: 2,
  },
  menuCard: {
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  menuItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.ink[100],
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  menuLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.ink[800],
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 20,
    paddingVertical: 12,
  },
  logoutText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#e11d48',
  },
});
