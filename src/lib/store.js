// store.js - Svelte store setup for managing books data and UI states

import { writable } from "svelte/store";

export const books = writable([
    { id: 1, genre: "LitRPG", title: 'The Primal Hunter', author: 'Zogarth', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1642013459i/60111529.jpg', description: `` },
    { id: 2, genre: "LitRPG", title: 'Defiance Of The Fall', author: 'TheFirstDefier', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1619486020i/57866482.jpg', description: `` },
    { id: 3, genre: "Epic Fantasy", title: 'He Who Fights With Monsters', author: 'Shirtaloon', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1614114118i/57189884.jpg', description: `` },
    { id: 4, genre: "Card Fantasy", title: 'All The SKills', author: 'Honour Rae', image: 'https://www.royalroadcdn.com/public/covers-large/55687-all-the-skills-a-deckbuilding-litrpg.jpg?time=1660799721', description: `` },
    { id: 5, genre: "Apocalypse ", title: 'Dungeon Carawler Carl', author: 'Matt Dinniman', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1595600712i/54659324.jpg', description: `` },
    { id: 6, genre: "LitRPG", title: 'System Universe', author: 'SunriseCV', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1658172758i/61588227.jpg', description: `` }

]);

// Writable store for the currently selected genre filter
export const selectedGenre = writable("All");

// Writable store for the current search term used in book searching/filtering
export const searchTerm = writable("");