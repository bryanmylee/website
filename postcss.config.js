module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('tailwindcss'),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};
