import { Card, mainCards } from './cards';

import './cards.css';

export const optionsElements: Element[] = [];
export let selectForm: HTMLSelectElement;

export class Sorting {

  public draw(): void {

    const wrapper = document.createElement('div');
    wrapper.className = 'content__cards_wrapper-form';

    const text = document.createElement('p');
    text.className = 'content__cards_heading';
    text.textContent = 'Sort by';

    const listWrapper = document.createElement('form');
    listWrapper.className = 'content_cards_form';

    const list = document.createElement('select');
    list.className = 'content__cards_list';
    list.setAttribute('name', 'sorting');
    selectForm = list;

    const options: string[] = ['Price(Lowest)', 'Price(Highest)', 'Name(A-Z)', 'Name(Z-A)', 'Year(2020-2022)', 'Year(2022-2020)'];
    options.forEach((item: string) => {
      const option = document.createElement('option');
      option.className = 'content__cards_list-item';
      option.textContent = item;
      list.append(option);
      optionsElements.push(option);
    });

    const newCard = new Card();
    selectForm.addEventListener('change', newCard.draw);
    listWrapper.append(list);
    wrapper.append(text, listWrapper);
    mainCards.append(wrapper);

  }

}
