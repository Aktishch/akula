import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

import media from '../ts/functions/media'
import quiz from '../ts/quiz'

const init = () => {

  const quizSlider = new Swiper('.quiz-slider .swiper', {

    navigation: {

      prevEl: '.quiz-slider .swiper-button-prev',
      nextEl: '.quiz-slider .swiper-button-next'

    },

    pagination: {

      el: '.quiz-slider .swiper-pagination',
      type: 'custom',

      renderCustom: (swiper, current, total) => {

        return `${current}/${total}.`

      }

    },

    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    allowTouchMove: false,
    watchSlidesProgress: true,

    on: {

      slideChange: (swiper) => {

        quiz.checkQuizSlide(swiper.visibleSlides[0])

        if (swiper.visibleSlides[0] == swiper.slides[swiper.slides.length - 1]) {

          swiper.el.closest('[data-quiz]').setAttribute('data-quiz-end', '')

        } else {

          swiper.el.closest('[data-quiz]').removeAttribute('data-quiz-end')

        }

      }

    }

  })

  const workSlider = new Swiper('.work-slider .swiper', {

    pagination: {

      el: '.work-slider .swiper-pagination',
      clickable: true

    },

    slidesPerView: 1.2,
    spaceBetween: 16,

    breakpoints: {

      [media.sm]: {

        slidesPerView: 'auto',
        spaceBetween: 0,
        allowTouchMove: false

      }

    }

  })

  const directionsSlider = new Swiper('.directions-slider .swiper', {

    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: true,
    speed: 10000,
    allowTouchMove: false,

    autoplay: {

      delay: 0,
      stopOnLastSlide: false,
      disableOnInteraction: false

    }

  })

  const reviewsSlider = new Swiper('.reviews-slider .swiper', {

    pagination: {

      el: '.reviews-slider .swiper-pagination',
      clickable: true

    },

    navigation: {

      prevEl: '.reviews-slider .swiper-button-prev',
      nextEl: '.reviews-slider .swiper-button-next'

    },

    slidesPerView: 1.2,
    slidesPerGroup: 1,
    spaceBetween: 16,
    speed: 1000,
    grabCursor: true,
    loop: true,

    breakpoints: {

      [media.sm]: {

        slidesPerView: 1,
        spaceBetween: 20

      },

      [media.md]: {

        slidesPerView: 2,

      },

      [media.xl]: {

        slidesPerView: 3,
        spaceBetween: 30

      }

    },

    autoplay: {

      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false

    }

  })

  window.Swiper = Swiper

}

export default { init }