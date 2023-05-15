// Libraries
import yandexMap from './lib/yandex-map'
import fancybox from './lib/fancybox'
import sliderSwiper from './lib/slider-swiper'

// Scripts
import scrollHeader from './ts/scroll-header'
import mobileMenu from './ts/mobile-menu'
import scrollTo from './ts/scroll-to'
import animation from './ts/animation'
import waved from './ts/waved'
import listing from './ts/listing'
import accordion from './ts/accordion'
import formSubmit from './ts/form-submit'
import formInputs from './ts/form-inputs'
import maskTel from './ts/mask-tel'
import quantity from './ts/quantity'
import quiz from './ts/quiz'
import transport from './ts/transport'
import preloader from './ts/preloader'

// Style
import './scss/index.scss'

// Connection
window.addEventListener('DOMContentLoaded', () => {

  fancybox.init()
  scrollHeader.init()
  mobileMenu.init()
  scrollTo.init()
  waved.init()
  listing.init()
  accordion.init()
  formSubmit.init()
  formInputs.init()
  maskTel.init()
  quantity.init()
  transport.init()

})

window.addEventListener('load', () => {

  yandexMap.init()
  sliderSwiper.init()
  animation.init()
  quiz.init()
  preloader.init()

})