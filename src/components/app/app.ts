import { AppView } from '../view/appView';
import { Cart } from '../controller/cart';
import { Filter } from '../controller/filter';
class App {
  private view: AppView;
  private cart: Cart;
  private filter: Filter;
  constructor() {
      this.view = new AppView();
      this.cart = new Cart();
      this.filter = new Filter();
  }

  public start(): void {
      this.view.drawSorting();
      this.view.drawCards();
      this.view.drawSearching();
      this.view.drawCategories();
      this.view.drawFilters();
      this.cart.addCard();
      this.filter.sort();
  }
}

export default App;