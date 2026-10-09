// tailwind.config.js — Shoghmoum brand extension (optional)
module.exports = {
  theme: {
    extend: {
      colors: {
        maroon: '#441420', sand: '#E9EAD9', terracotta: '#814B41',
        gold: { DEFAULT: '#AA8302', light: '#D6B44E' },
        // reserved — do not use without approval: black '#0E0E0E', periwinkle '#A7B5DC', aqua '#9CC7C9'
      },
      fontFamily: { sans: ['"IBM Plex Sans Arabic"', '"IBM Plex Sans"', 'system-ui', 'sans-serif'] },
      borderRadius: { brand: '2px' },
    },
  },
};
