export const colors = {
  brand: {
    50: '#eefbf9',
    100: '#d4f4ef',
    200: '#aae8e0',
    300: '#77d5c9',
    400: '#46bcae',
    500: '#2a9f93',
    600: '#1f8077',
    700: '#1c6862',
    800: '#1b534f',
    900: '#194543',
    950: '#0a2726',
  },
  ink: {
    50: '#f7f7f8',
    100: '#eeedf0',
    200: '#d9d7de',
    300: '#b6b2bd',
    400: '#8d8797',
    500: '#6f6a7a',
    600: '#585365',
    700: '#484452',
    800: '#3d3a44',
    900: '#28262c',
    950: '#19171b',
  },
  white: '#ffffff',
  success: '#059669',
  warning: '#d97706',
  danger: '#e11d48',
  category: {
    hotels: '#0284c7',
    salons: '#db2777',
    rentals: '#d97706',
    flights: '#4f46e5',
    trains: '#7c3aed',
  },
};

export const spacing = (n: number) => n * 4;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 999,
};

export const typography = {
  h1: { fontSize: 28, fontWeight: '700' as const, color: colors.ink[900] },
  h2: { fontSize: 22, fontWeight: '700' as const, color: colors.ink[900] },
  h3: { fontSize: 17, fontWeight: '600' as const, color: colors.ink[900] },
  body: { fontSize: 15, fontWeight: '400' as const, color: colors.ink[700] },
  bodyMedium: { fontSize: 15, fontWeight: '600' as const, color: colors.ink[900] },
  caption: { fontSize: 13, fontWeight: '400' as const, color: colors.ink[500] },
};

export const shadow = {
  card: {
    shadowColor: '#101828',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
};

export const theme = { colors, spacing, radius, typography, shadow };
export type Theme = typeof theme;
