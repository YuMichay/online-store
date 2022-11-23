import { cardsElements } from "../view/cards";

const goodsArray: Element[] = [];

export class Cart {

  public addCard(): void {
    
    const counterField = document.querySelector('.content__header_counter') as HTMLElement;
    cardsElements.forEach((item: Element) => {

      item.addEventListener('click', () => {
        if (goodsArray.length < 20 && !item.classList.contains('added')) {
          item.classList.add('added');
          goodsArray.push(item);
          counterField.textContent = `${goodsArray.length}`;
        } else if (goodsArray.length < 20 && item.classList.contains('added')) {
          item.classList.remove('added');
          goodsArray.pop();
          counterField.textContent = `${goodsArray.length}`;
        } else if (goodsArray.length === 20) {
          alert("Sorry, all slots are full!");
        }
      })

    });
    
  }

}

export { goodsArray };