export const typography = {
  fontFamily: {
    heading: '"Montserrat", system-ui, sans-serif',
    body: '"Inter", system-ui, sans-serif',
  },
  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  scale: {
    h1: { fontFamily: 'heading', weight: 700, size: '2.5rem', lineHeight: 1.15, letterSpacing: '-0.01em' },
    h2: { fontFamily: 'heading', weight: 600, size: '1.75rem', lineHeight: 1.2, letterSpacing: '-0.005em' },
    h3: { fontFamily: 'heading', weight: 600, size: '1.25rem', lineHeight: 1.3 },
    body: { fontFamily: 'body', weight: 400, size: '1rem', lineHeight: 1.6 },
    caption: { fontFamily: 'body', weight: 500, size: '0.875rem', lineHeight: 1.4 },
  },
} as const
