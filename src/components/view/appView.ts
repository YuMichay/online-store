import { Card } from './cards';
import { Sorting } from './select';
import { Searching, Categories, Filters } from './aside';

export class AppView {
    private sorting: Sorting;
    private card: Card;
    private searching: Searching;
    private categories: Categories;
    private filters: Filters;
    constructor() {
        this.sorting = new Sorting();
        this.card = new Card();
        this.searching = new Searching();
        this.categories = new Categories();
        this.filters = new Filters();
    }

    public drawSorting(): void {
        this.sorting.draw();
    }

    public drawCards(): void {
        this.card.draw();
    }

    public drawSearching(): void {
        this.searching.draw();
    }

    public drawCategories(): void {
        this.categories.draw();
    }

    public drawFilters(): void {
        this.filters.draw();
    }
}

export default AppView;