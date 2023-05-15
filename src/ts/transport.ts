const init = (): void => {

  document.addEventListener('change', ((event: Event) => {

    if ((event.target as HTMLInputElement).hasAttribute('data-transport-toggle')) {

      const transport = (event.target as HTMLInputElement).closest('[data-transport]') as HTMLElement
      const toggle = event.target as HTMLInputElement
      const label = transport.querySelector('*[data-transport-label]') as HTMLInputElement
      const input = transport.querySelector('*[data-transport-input]') as HTMLInputElement
      const error = transport.querySelector('*[data-transport-error]') as HTMLElement

      if (toggle.dataset.transportToggle == 'active') {

        label.setAttribute('data-label', 'input')
        input.removeAttribute('disabled')
        input.classList.add('input--error')
        error.classList.add('visible', 'opacity-100')

      } else {

        label.removeAttribute('data-label')
        input.setAttribute('disabled', 'disabled')
        input.classList.remove('input--error')
        error.classList.remove('visible', 'opacity-100')
        input.value = ''

      }

    }

  }) as EventListener)

  document.addEventListener('input', ((event: Event) => {

    if ((event.target as HTMLInputElement).hasAttribute('data-transport-input')) {

      const transport = (event.target as HTMLInputElement).closest('[data-transport]') as HTMLElement
      const input = event.target as HTMLInputElement
      const error = transport.querySelector('*[data-transport-error]') as HTMLElement

      if (input.value.length != 0) {

        input.classList.remove('input--error')
        error.classList.remove('visible', 'opacity-100')

      } else {


        input.classList.add('input--error')
        error.classList.add('visible', 'opacity-100')

      }

    }

  }) as EventListener)

}

export default { init }