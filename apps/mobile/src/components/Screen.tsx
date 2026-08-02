import { ScrollView, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme';

export function Screen({
  children,
  scroll = true,
  padded = true,
  style,
}: {
  children: React.ReactNode;
  scroll?: boolean;
  padded?: boolean;
  style?: StyleProp<ViewStyle>;
}) {
  const Container = scroll ? ScrollView : View;

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <Container
        style={scroll ? styles.scroll : styles.flex}
        contentContainerStyle={scroll ? [padded && styles.padded, style] : undefined}
      >
        {scroll ? children : <View style={[styles.flex, padded && styles.padded, style]}>{children}</View>}
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scroll: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  padded: {
    padding: 16,
  },
});
