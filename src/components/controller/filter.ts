import { cards } from '../view/info';
import { selectForm } from '../view/select';
import { CardView } from './../../types/types';
import { checkedCategory, checkedManufacturer, checkedColor, checkedSize, checkedPopular } from '../view/aside';

export class Filter {

  public sort(): CardView[] {

    if (selectForm.value === 'Price(Lowest)') {
      cards.sort((a, b) => +a.price - +b.price);
    } else if (selectForm.value === 'Price(Highest)') {
      cards.sort((a, b) => +b.price - +a.price);
    } else if (selectForm.value === 'Name(A-Z)') {
      cards.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    } else if (selectForm.value === 'Name(Z-A)') {
      cards.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      });
    } else if (selectForm.value === 'Year(2020-2022)') {
      cards.sort((a, b) => +a.year - +b.year);
    } else if (selectForm.value === 'Year(2022-2020)') {
      cards.sort((a, b) => +b.year - +a.year);
    }


    if (checkedCategory !== undefined && checkedCategory.textContent !== "All" && checkedCategory.classList.contains('checked')) {
      return cards.filter((item) => checkedCategory.textContent === item.category);
    }

    if (checkedManufacturer !== undefined && checkedManufacturer.classList.contains('checked')) {
      return cards.filter((item) => checkedManufacturer.textContent === item.manufacturer); 
    }

    if (checkedColor !== undefined && checkedColor.classList.contains('checked')) {
      return cards.filter((item) => checkedColor.textContent === item.color); 
    }

    if (checkedSize !== undefined && checkedSize.classList.contains('checked')) {
      return cards.filter((item) => checkedSize.textContent === item.size); 
    }

    if (checkedPopular && checkedPopular.classList.contains('checked')) {
      return cards.filter((item) => item.popular === 'yes');
    }

    return cards;

  }
  
}
