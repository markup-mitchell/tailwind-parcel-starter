const tailwindcss = require('tailwindcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')


module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'),
    require('cssnano')({
      preset: ['default', {
          discardComments: {
              removeAll: true,
          },
      }]
  }),
  purgecss({
      content: ['./index.html']
    }),

    autoprefixer
  ]
}
