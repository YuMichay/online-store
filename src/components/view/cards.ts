import { Filter } from '../controller/filter';
import { CardView } from './../../types/types';
import './cards.css';

export const mainCards = document.querySelector('.content__cards') as HTMLElement;
export const cardsElements: Element[] = [];
export class Card {

  public draw(): void {

    if (mainCards.lastChild === document.querySelector('.content__cards_wrapper-cards')) {
      mainCards.lastChild?.remove();
    }

    const wrapperCards = document.createElement('div');
    wrapperCards.className = 'content__cards_wrapper-cards';

    const cardsSort = new Filter();
    const newCards = cardsSort.sort();

    newCards.forEach((card: CardView) => {

      const wrapperCard = document.createElement('div');
      wrapperCard.className = 'content__cards_wrapper-card';

      const image = document.createElement('img');
      image.setAttribute('alt', 'card');
      image.className = 'content__cards_image';
      image.src = card.image;

      const wrapperText = document.createElement('div');
      wrapperText.className = 'content__cards_wrapper-text';
    
      const name = document.createElement('p');
      name.className = 'content__cards_name text';
      name.textContent = card.name;

      const price = document.createElement('p');
      price.className = 'content__cards_price text';
      price.textContent = card.price + '$';

      const amount = document.createElement('p');
      amount.className = 'content__cards_amount text';
      amount.textContent = 'In stock: ' + card.amount;

      const year = document.createElement('p');
      year.className = 'content__cards_year text';
      year.textContent = card.year;

      const color = document.createElement('p');
      color.className = 'content__cards_color text';
      color.textContent = 'Color: ' + card.color;

      const manufacturer = document.createElement('p');
      manufacturer.className = 'content__cards_manufacturer text';
      manufacturer.textContent = 'Made by: ' + card.manufacturer;

      wrapperText.append(name, price, amount, year, color, manufacturer);
      wrapperCard.append(image, wrapperText);
      wrapperCards.append(wrapperCard);
      cardsElements.push(wrapperCard);

    });

    mainCards.append(wrapperCards);

  }

}
