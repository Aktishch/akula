import ymaps from 'ymaps'
import media from '../ts/functions/media'

const init = () => {

  if (!document.querySelector('*[data-suggest-view]') && !document.getElementById('map')) return

  ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU').then((maps) => {

    const center = window.screen.width > media.lg ? [45.02260796561568, 38.979863260574355] : [45.022615574587945, 38.98088250000001]
    const mark = [45.022615574587945, 38.98088250000001]
    const inputs = [...document.querySelectorAll('[data-suggest-view]')]

    const map = new maps.Map('map', {

      center: center,
      zoom: 17

    })

    const placemark = new maps.Placemark((mark), {}, {

      iconLayout: 'default#image',
      iconImageHref: '/local/templates/main/img/pictures/geo.png',
      iconImageSize: [50, 50],
      iconImageOffset: [-25, -25]

    })

    inputs.forEach((input) => {

      new maps.SuggestView(input, {

        results: 5,
        container: document.body

      })

    })

    map.controls.remove('geolocationControl')
    map.controls.remove('searchControl')
    map.controls.remove('trafficControl')
    map.controls.remove('typeSelector')
    map.controls.remove('fullscreenControl')
    map.controls.remove('rulerControl')
    map.geoObjects.add(placemark)

  }).catch((error) =>

    console.log('Failed to load Yandex Maps', error)

  )

}

export default { init }