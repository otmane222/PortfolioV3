import { Item } from './item.js';

if (typeof document !== 'undefined') {
    // Ensure this runs only in the browser
    [...document.querySelectorAll('.grid__item > .grid__item-img')].forEach(div => new Item(div));
}
