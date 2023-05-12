const init = (): void => {

  document.addEventListener('change', ((event: Event) => {

    if ((event.target as HTMLInputElement).hasAttribute('data-transport-toggle')) {

      const transport = (event.target as HTMLInputElement).closest('[data-transport]') as HTMLElement
      const toggle = event.target as HTMLInputElement
      const label = transport.querySelector('*[data-transport-label]') as HTMLInputElement
      const input = transport.querySelector('*[data-transport-input]') as HTMLInputElement

      if (toggle.dataset.transportToggle == 'active') {

        label.setAttribute('data-label', 'input')
        input.removeAttribute('disabled')

      } else {

        label.removeAttribute('data-label')
        input.setAttribute('disabled', 'disabled')
        input.value = ''

      }

    }

  }) as EventListener)

}

export default { init }