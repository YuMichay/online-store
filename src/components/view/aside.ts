import { categories, manufacturers, colors, sizes } from './info';
import './aside.css';
import { Card, cardsElements } from './cards';
import { Cart, goodsArray } from '../controller/cart';

const mainFilters = document.querySelector('.content__filters') as HTMLElement;

export const categoryElements: Element[] = [];
export const manufacturerElements: Element[] = [];
export const colorElements: Element[] = [];
export const sizeElements: Element[] = [];
let checkedCategory: Element;
let checkedManufacturer: Element;
let checkedColor: Element;
let checkedSize: Element;
let checkedPopular: Element;

export class Searching {

  public draw(): void {

    const wrapperForm = document.createElement('div');
    wrapperForm.className = 'content__filters_wrapper-form';

    const form = document.createElement('form');
    form.className = 'content__filters_form';

    const inputField = document.createElement('input');
    inputField.className = 'content__filters_form-input';
    inputField.setAttribute('type', 'search');
    inputField.setAttribute('autocomplete', 'off');
    inputField.placeholder = 'Search';

    form.append(inputField);
    wrapperForm.append(form);
    mainFilters.append(wrapperForm);

  }

}

export class Categories {

  public draw(): void {

    const wrapperCategories = document.createElement('div');
    wrapperCategories.className = 'content__filters_wrapper-categories';

    const categoriesList = document.createElement('dl');
    categoriesList.className = 'content__filters_categories';
    const heading = document.createElement('dt');
    heading.className = 'content__filters_heading';
    heading.textContent = 'Category';
    categoriesList.append(heading);
    categories.forEach((item: string) => {
      const category = document.createElement('dd');
      category.className = 'content__filters_category';
      category.textContent = item;
      categoriesList.append(category);
      categoryElements.push(category);
    });

    wrapperCategories.append(categoriesList);
    mainFilters.append(wrapperCategories);

    const startCategory = document.querySelector('.content__filters_category') as HTMLElement;
    startCategory.classList.add('checked');
    checkedCategory = wrapperCategories.querySelector('.checked') as HTMLElement;
    const newCard = new Card();

    categoryElements.forEach((item: Element) => {

      item.addEventListener('click', () => {

        categoryElements.forEach((item: Element) => item.classList.remove('checked'));
        item.classList.add('checked');
        checkedCategory = wrapperCategories.querySelector('.checked') as HTMLElement;
        newCard.draw();

      });

    });

  }

}

export class Filters {

  public draw(): void {

    const newCard = new Card();

    const wrapperFilters = document.createElement('div');
    wrapperFilters.className = 'content__filters_wrapper-filters';

    const wrapperAmount = document.createElement('label');
    wrapperAmount.setAttribute('for', 'amount');
    wrapperAmount.className = 'content__filters_wrapper content__filters_heading';
    wrapperAmount.textContent = 'Amount';
    const inputAmount = document.createElement('input');
    inputAmount.setAttribute('type', 'range');
    inputAmount.setAttribute('id', 'amount');
    inputAmount.setAttribute('min', '2');
    inputAmount.setAttribute('max', '10');
    inputAmount.setAttribute('step', '1');
    inputAmount.className = 'content__filters_amount input';
    const amountValue = document.createElement('p');
    amountValue.textContent = inputAmount.value;
    amountValue.className = 'content__filters_text';
    wrapperAmount.append(inputAmount, amountValue);

    const wrapperYear = document.createElement('label');
    wrapperYear.setAttribute('for', 'year');
    wrapperYear.className = 'content__filters_wrapper content__filters_heading';
    wrapperYear.textContent = 'Year';
    const inputYear = document.createElement('input');
    inputYear.setAttribute('type', 'range');
    inputYear.setAttribute('id', 'year');
    inputYear.setAttribute('min', '2020');
    inputYear.setAttribute('max', '2022');
    inputYear.setAttribute('step', '1');
    inputYear.className = 'content__filters_year input';
    const yearValue = document.createElement('p');
    yearValue.textContent = inputYear.value;
    yearValue.className = 'content__filters_text';
    wrapperYear.append(inputYear, yearValue);

    const filterMade = document.createElement('dl');
    filterMade.className = 'content__filters_made';
    const headingMade = document.createElement('dt');
    headingMade.className = 'content__filters_heading';
    headingMade.textContent = 'Made by';
    filterMade.append(headingMade);
    manufacturers.forEach((item: string) => {
      const manufacturer = document.createElement('dd');
      manufacturer.className = 'content__filters_manufacturer';
      manufacturer.textContent = item;
      filterMade.append(manufacturer);
      manufacturerElements.push(manufacturer);
    });

    manufacturerElements.forEach((item: Element) => {

      item.addEventListener('click', () => {

        manufacturerElements.forEach((item) => item.classList.remove('checked'));
        item.classList.add('checked');
        checkedManufacturer = filterMade.querySelector('.checked') as HTMLElement;
        newCard.draw();

        });

    });

    const filterColor = document.createElement('dl');
    filterColor.className = 'content__filters_colors';
    const headingColor = document.createElement('dt');
    headingColor.className = 'content__filters_heading';
    headingColor.textContent = 'Color';
    filterColor.append(headingColor);
    colors.forEach((item: string) => {
      const color = document.createElement('dd');
      color.className = 'content__filters_color';
      color.textContent = item;
      filterColor.append(color);
      colorElements.push(color);
    });

    colorElements.forEach((item: Element) => {

      item.addEventListener('click', () => {

        colorElements.forEach((item) => item.classList.remove('checked'));
        item.classList.add('checked');
        checkedColor = filterColor.querySelector('.checked') as HTMLElement;
        newCard.draw();

        });

    });

    const filterSize = document.createElement('dl');
    filterSize.className = 'content__filters_sizes';
    const headingSize = document.createElement('dt');
    headingSize.className = 'content__filters_heading';
    headingSize.textContent = 'Size';
    filterSize.append(headingSize);
    sizes.forEach((item: string) => {
      const size = document.createElement('dd');
      size.className = 'content__filters_size';
      size.textContent = item;
      filterSize.append(size);
      sizeElements.push(size);
    });

    sizeElements.forEach((item: Element) => {

      item.addEventListener('click', () => {

        sizeElements.forEach((item) => item.classList.remove('checked'));
        item.classList.add('checked');
        checkedSize = filterSize.querySelector('.checked') as HTMLElement;
        newCard.draw();

        });

    });

    const filterPopular = document.createElement('dl');
    filterPopular.className = 'content__filters_popular';
    const headingPopular = document.createElement('dt');
    headingPopular.className = 'content__filters_heading';
    headingPopular.textContent = 'Popular only';
    filterPopular.append(headingPopular);
    headingPopular.addEventListener('click', () => {
      headingPopular.classList.toggle('checked');
      checkedPopular = filterPopular.querySelector('.checked') as HTMLElement;
      newCard.draw();
    })

    const resetBtn = document.createElement('button');
    resetBtn.setAttribute('type', 'button');
    resetBtn.className = 'content__filters_button';
    resetBtn.textContent = 'Reset';
    resetBtn.addEventListener('click', () => {
      categoryElements.forEach((item) => item.classList.remove('checked'));
      manufacturerElements.forEach((item) => item.classList.remove('checked'));
      colorElements.forEach((item) => item.classList.remove('checked'));
      sizeElements.forEach((item) => item.classList.remove('checked'));
      headingPopular.classList.remove('checked');
      newCard.draw();
      goodsArray.forEach((item: Element) => {
        cardsElements.forEach((i: Element) => {
          if (item.textContent === i.textContent) {
            i.classList.add('added');
          }
        })
        
      });
      const newcCart = new Cart();
      newcCart.addCard();
    });

    wrapperFilters.append(wrapperAmount, wrapperYear, filterMade, filterColor, filterSize, filterPopular, resetBtn);
    mainFilters.append(wrapperFilters);

  }

}

export { checkedCategory, checkedManufacturer, checkedColor, checkedSize, checkedPopular };