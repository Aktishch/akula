const plugin = require('tailwindcss/plugin')
const { parseColor, formatColor } = require('tailwindcss/lib/util/color')

module.exports = plugin(

  ({ addComponents, theme }) => {

    const grey = parseColor(theme('colors.black.DEFAULT')).color

    addComponents({

      '.input': {
        flexGrow: 1,
        width: '100%',
        height: theme('size.lg'),
        backgroundColor: theme('colors.white.DEFAULT'),
        padding: '12px 16px',
        border: `1px solid ${formatColor({ mode: 'rgba', color: grey, alpha: 0.2 })}`,
        transition: '0.2s ease',
        userSelect: 'initial',

        '&-cover': {
          display: 'flex',
          width: '100%'
        },

        '&--textarea': {
          height: 'auto'
        },

        '&--error': {
          borderColor: theme('colors.red.DEFAULT')
        },

        '&:first-of-type': {
          borderTopLeftRadius: '15px',
          borderBottomLeftRadius: '15px'
        },

        '&:last-of-type': {
          borderTopRightRadius: '15px',
          borderBottomRightRadius: '15px'
        },

        '&:not(&--error):focus': {
          borderColor: formatColor({ mode: 'rgba', color: grey, alpha: 0.6 })
        },

        '&::placeholder': {
          color: formatColor({ mode: 'rgba', color: grey, alpha: 0.3 })
        },

        '&[disabled="disabled"]': {
          pointerEvents: 'none',
          opacity: 0.5
        }
      }

    })

  }

)