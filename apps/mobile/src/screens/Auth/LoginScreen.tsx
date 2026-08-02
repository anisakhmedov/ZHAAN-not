import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../../components/Button';
import { Screen } from '../../components/Screen';
import { colors, radius } from '../../theme';

export function LoginScreen() {
  return (
    <Screen>
      <View style={styles.logo}>
        <Ionicons name="compass-outline" size={28} color={colors.brand[600]} />
      </View>
      <Text style={styles.title}>Welcome back</Text>
      <Text style={styles.subtitle}>Log in to manage your bookings.</Text>

      <View style={styles.form}>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="jane@example.com"
            placeholderTextColor={colors.ink[400]}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <TextInput placeholder="••••••••" placeholderTextColor={colors.ink[400]} secureTextEntry style={styles.input} />
        </View>
        <Button title="Log in" size="lg" fullWidth style={styles.submit} />
      </View>

      <Text style={styles.footer}>
        Don&apos;t have an account? <Text style={styles.link}>Sign up</Text>
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 56,
    height: 56,
    borderRadius: radius.lg,
    backgroundColor: colors.brand[50],
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.ink[900],
    marginTop: 16,
  },
  subtitle: {
    fontSize: 13,
    color: colors.ink[500],
    marginTop: 4,
  },
  form: {
    marginTop: 24,
    gap: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.ink[700],
    marginBottom: 6,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: colors.ink[200],
    borderRadius: radius.md,
    paddingHorizontal: 14,
    fontSize: 14,
    color: colors.ink[900],
  },
  submit: {
    marginTop: 4,
  },
  footer: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 13,
    color: colors.ink[500],
  },
  link: {
    color: colors.brand[700],
    fontWeight: '700',
  },
});
