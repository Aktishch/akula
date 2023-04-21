import { coordinates } from './functions/coordinates'

const init = (): void => {

  const basket = document.querySelector('*[data-basket]') as HTMLElement

  if (!basket) return

  const body = document.body as HTMLBodyElement
  const basketClose = basket.querySelector('*[data-basket-close]') as HTMLButtonElement
  const basketImage = basket.querySelector('*[data-basket-image]') as HTMLImageElement
  const basketName = basket.querySelector('*[data-basket-name]') as HTMLElement
  const basketQuantity = basket.querySelector('*[data-basket-quantity]') as HTMLElement
  const basketOldPrice = basket.querySelector('*[data-basket-oldprice]') as HTMLElement
  const basketPrice = basket.querySelector('*[data-basket-price]') as HTMLElement
  const products = document.querySelectorAll('*[data-product]') as NodeListOf<Element>
  const classes: string[] = ['in-basket', 'flex', 'items-center', 'justify-center', 'fixed', 'z-3', 'bg-primary', 'rounded-2', 'pointer-events-none', '-translate-y-1/2', '-translate-x-1/2', 'w-10', 'h-10']

  const basketShow = (): void => {

    basket.dataset.basket = 'show'
    basket.classList.remove('invisible', 'opacity-0')

  }

  const basketHidden = (): void => {

    basket.dataset.basket = 'hidden'
    basket.classList.add('invisible', 'opacity-0')

  }

  let timeOut: NodeJS.Timeout


  products.forEach((element: Element): void => {

    const product = element as HTMLElement
    const productImage = product.querySelector('*[data-product-image]') as HTMLImageElement
    const productName = product.querySelector('*[data-product-name]') as HTMLElement
    const productOldPrice = product.querySelector('*[data-product-oldprice]') as HTMLElement
    const productPrice = product.querySelector('*[data-product-price]') as HTMLElement
    const productQuantity = product.querySelector('*[data-product-quantity]') as HTMLInputElement
    const productBtn = product.querySelector('*[data-product-button]') as HTMLButtonElement

    productBtn.addEventListener('click', ((event: MouseEvent): void => {

      const coordinates: coordinates = {

        top: event.clientY,
        left: event.clientX

      }

      const inBasket = document.createElement('div') as HTMLDivElement
      inBasket.classList.add(...classes)
      inBasket.style.top = `${coordinates.top}px`
      inBasket.style.left = `${coordinates.left}px`
      inBasket.innerHTML = `
        <svg class="icon text-second text-base">
          <use xlink:href="img/icons.svg#basket">
        </svg>`

      body.appendChild(inBasket)

      setTimeout((): void => inBasket.remove(), 2000)

      if (basket.dataset.basket == 'show') basketHidden()

      setTimeout((): void => {

        basketShow()

        if (basketImage && productImage) basketImage.src = String(productImage.dataset.productImage)

        if (basketName && productName) basketName.innerText = String(productName.textContent)

        if (basketQuantity && productQuantity) {

          basketQuantity.innerText = String(productQuantity.value)

        } else {

          basketQuantity.innerText = '1'

        }

        if (basketOldPrice && productOldPrice) {

          basketOldPrice.innerText = String(productOldPrice.textContent)

        } else {

          basketOldPrice.innerText = ''

        }

        if (basketPrice && productPrice) basketPrice.innerText = String(productPrice.textContent)

        if (timeOut) clearTimeout(timeOut)

        timeOut = setTimeout((): void => basketHidden(), 5000)

      }, 300)

    }) as EventListener)

    basketClose.addEventListener('click', basketHidden as EventListener)

  })

}

export default { init }