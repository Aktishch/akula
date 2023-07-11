import formValidate from './functions/form-validate'
import dialog from './functions/dialog'

declare global {
  interface Window {
    ym: any
  }
}

const formSubmit = (event: Event): void => {

  event.preventDefault()

  const form = event.target as HTMLFormElement

  if (!formValidate.init(form)) return

  const formData: FormData = new FormData(form)
  const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement
  const requestUrl: string = '/ajax/submit-handler.php'

  if (form.dataset.form == 'submit') {

    submitBtn.setAttribute('disabled', 'disabled')

    dialog.preloader()

    fetch(requestUrl, {

      method: 'POST',
      body: formData

    }).then((response: Response): any => {

      return response.text()

    }).then((response: any): void => {

      window.ym(94265435, 'reachGoal', 'zayavka')

      dialog.close()

      dialog.open('/dialogs/dialog-submit.php')

      form.reset()

      submitBtn.removeAttribute('disabled')

    }).catch((error: string): void =>

      console.log('The form has not been sent', error)

    )

  }

  if (form.dataset.form == 'quiz') {

    submitBtn.setAttribute('disabled', 'disabled')

    dialog.preloader()

    fetch(requestUrl, {

      method: 'POST',
      body: formData

    }).then((response: Response): any => {

      return response.text()

    }).then((response: any): void => {

      window.ym(94265435, 'reachGoal', 'zayavka')

      form.reset()

      submitBtn.removeAttribute('disabled')

      const quiz = form.querySelector('*[data-quiz]') as HTMLElement
      const quizSuccess = form.querySelector('*[data-quiz-success]') as HTMLElement

      quiz.remove()

      quizSuccess.classList.remove('hidden')
      quizSuccess.classList.add('flex')

      dialog.close()

    }).catch((error: string): void =>

      console.log('The form has not been sent', error)

    )

  }

}

const init = (): void => {

  document.addEventListener('submit', ((event: Event): void => {

    if ((event.target as HTMLFormElement).hasAttribute('data-form')) formSubmit(event)

  }) as EventListener)

}

export default { init }