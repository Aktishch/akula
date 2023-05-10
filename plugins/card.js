const plugin = require('tailwindcss/plugin')
const { parseColor, formatColor } = require('tailwindcss/lib/util/color')

module.exports = plugin(

  ({ addComponents, theme }) => {

    const shadow = parseColor(theme('colors.black.DEFAULT')).color

    addComponents({

      '.card': {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        backgroundColor: theme('colors.white.DEFAULT'),
        boxShadow: `0px 6px 15px ${formatColor({ mode: 'rgba', color: shadow, alpha: 0.1 })}`,
        borderRadius: '24px',
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
        overflow: 'hidden',

        '&-content': {
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1
        },

        '&--active:active': {
          transform: 'translateY(4px)'
        }
      },

      '@media(hover)': {
        '.card--active:hover': {
          boxShadow: `0px 6px 15px ${formatColor({ mode: 'rgba', color: shadow, alpha: 0.3 })}`
        }
      }

    })

  }

)