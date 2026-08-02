import { ActivityIndicator, Pressable, StyleSheet, Text, type PressableProps, type StyleProp, type ViewStyle } from 'react-native';
import { colors, radius } from '../theme';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<PressableProps, 'style'> {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  style?: StyleProp<ViewStyle>;
}

const SIZES: Record<ButtonSize, { height: number; paddingHorizontal: number; fontSize: number }> = {
  sm: { height: 36, paddingHorizontal: 14, fontSize: 13 },
  md: { height: 46, paddingHorizontal: 18, fontSize: 15 },
  lg: { height: 52, paddingHorizontal: 22, fontSize: 16 },
};

export function Button({ title, variant = 'primary', size = 'md', loading, fullWidth, disabled, style, ...props }: ButtonProps) {
  const sizeStyle = SIZES[size];
  const isDisabled = disabled || loading;

  return (
    <Pressable
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.base,
        variantStyles[variant],
        { height: sizeStyle.height, paddingHorizontal: sizeStyle.paddingHorizontal },
        fullWidth && styles.fullWidth,
        isDisabled && styles.disabled,
        pressed && !isDisabled && styles.pressed,
        style,
      ]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' || variant === 'ghost' ? colors.brand[600] : colors.white} />
      ) : (
        <Text style={[textVariantStyles[variant], { fontSize: sizeStyle.fontSize }]}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.md,
    gap: 8,
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
  },
  pressed: {
    opacity: 0.85,
  },
});

const variantStyles = StyleSheet.create({
  primary: { backgroundColor: colors.brand[600] },
  secondary: { backgroundColor: colors.ink[900] },
  outline: { backgroundColor: 'transparent', borderWidth: 1, borderColor: colors.ink[300] },
  ghost: { backgroundColor: 'transparent' },
});

const textVariantStyles = StyleSheet.create({
  primary: { color: colors.white, fontWeight: '600' },
  secondary: { color: colors.white, fontWeight: '600' },
  outline: { color: colors.ink[800], fontWeight: '600' },
  ghost: { color: colors.ink[700], fontWeight: '600' },
});
