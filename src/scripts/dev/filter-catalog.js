(function () {
  "use strict";

  const catalog = [
    {
        name: 'Poster 01',
        url: '../assets/images/catalog/poster1',
        size: '40-60',
        year: 1982,
        available: true,
        orientation: 'book',
        price: 850,
    },
    {
        name: 'Poster 02',
        url: '../assets/images/catalog/poster2',
        size: '30-40',
        year: 1982,
        available: true,
        orientation: 'landscape',
        price: 550,
    },
    {
        name: 'Poster 03',
        url: '../assets/images/catalog/poster3',
        size: '40-60',
        year: 1982,
        available: true,
        orientation: 'book',
        price: 1200,
    },
    {
        name: 'Poster 04',
        url: '../assets/images/catalog/poster4',
        size: '60-60',
        year: 1982,
        available: true,
        orientation: 'book',
        price: 1850,
    },
    {
        name: 'Poster 05',
        url: '../assets/images/catalog/poster5',
        size: '40-60',
        year: 1986,
        available: true,
        orientation: 'book',
        price: 1000,
    },
    {
        name: 'Poster 06',
        url: '../assets/images/catalog/poster6',
        size: '40-60',
        year: 1986,
        available: false,
        orientation: 'book',
        price: 850,
    },
    {
        name: 'Poster 07',
        url: '../assets/images/catalog/poster7',
        size: '30-60',
        year: 1986,
        available: false,
        orientation: 'book',
        price: 700,
    },
    {
        name: 'Poster 08',
        url: '../assets/images/catalog/poster8',
        size: '40-60',
        year: 1986,
        available: false,
        orientation: 'book',
        price: 1250,
    },
    {
        name: 'Poster 09',
        url: '../assets/images/catalog/poster9',
        size: '30-40',
        year: 1986,
        available: false,
        orientation: 'landscape',
        price: 550,
    },
    {
        name: 'Poster 10',
        url: '../assets/images/catalog/poster10',
        size: '20-30',
        year: 1987,
        available: true,
        orientation: 'landscape',
        price: 450,
    },
    {
        name: 'Poster 11',
        url: '../assets/images/catalog/poster11',
        size: '50-60',
        year: 1988,
        available: true,
        orientation: 'book',
        price: 1150,
    },
    {
        name: 'Poster 12',
        url: '../assets/images/catalog/poster12',
        size: '40-60',
        year: 1989,
        available: true,
        orientation: 'book',
        price: 1350,
    },
    {
        name: 'Poster 13',
        url: '../assets/images/catalog/poster11',
        size: '50-60',
        year: 1988,
        available: true,
        orientation: 'book',
        price: 1150,
    },
    {
        name: 'Poster 14',
        url: '../assets/images/catalog/poster9',
        size: '30-40',
        year: 1986,
        available: false,
        orientation: 'landscape',
        price: 550,
    },
    {
        name: 'Poster 15',
        url: '../assets/images/catalog/poster5',
        size: '40-60',
        year: 1986,
        available: true,
        orientation: 'book',
        price: 1000,
    },
    {
        name: 'Poster 16',
        url: '../assets/images/catalog/poster11',
        size: '50-60',
        year: 1988,
        available: true,
        orientation: 'book',
        price: 1150,
    },
    {
        name: 'Poster 17',
        url: '../assets/images/catalog/poster10',
        size: '20-30',
        year: 1987,
        available: true,
        orientation: 'landscape',
        price: 450,
    },
    {
        name: 'Poster 18',
        url: '../assets/images/catalog/poster7',
        size: '30-60',
        year: 1986,
        available: false,
        orientation: 'book',
        price: 700,
    },
    {
        name: 'Poster 19',
        url: '../assets/images/catalog/poster7',
        size: '30-60',
        year: 1986,
        available: false,
        orientation: 'book',
        price: 700,
    },
    {
        name: 'Poster 20',
        url: '../assets/images/catalog/poster10',
        size: '20-30',
        year: 1987,
        available: true,
        orientation: 'landscape',
        price: 450,
    },
    {
        name: 'Poster 21',
        url: '../assets/images/catalog/poster11',
        size: '50-60',
        year: 1988,
        available: true,
        orientation: 'book',
        price: 1150,
    },
    {
        name: 'Poster 22',
        url: '../assets/images/catalog/poster8',
        size: '40-60',
        year: 1986,
        available: false,
        orientation: 'book',
        price: 1250,
    },
    {
        name: 'Poster 23',
        url: '../assets/images/catalog/poster9',
        size: '30-40',
        year: 1986,
        available: false,
        orientation: 'landscape',
        price: 550,
    },
    {
        name: 'Poster 24',
        url: '../assets/images/catalog/poster10',
        size: '20-30',
        year: 1987,
        available: true,
        orientation: 'landscape',
        price: 450,
    },
    {
        name: 'Poster 25',
        url: '../assets/images/catalog/poster5',
        size: '40-60',
        year: 1986,
        available: true,
        orientation: 'book',
        price: 1000,
    },
    {
        name: 'Poster 26',
        url: '../assets/images/catalog/poster11',
        size: '50-60',
        year: 1988,
        available: true,
        orientation: 'book',
        price: 1150,
    },
    {
        name: 'Poster 27',
        url: '../assets/images/catalog/poster10',
        size: '20-30',
        year: 1987,
        available: true,
        orientation: 'landscape',
        price: 450,
    },
    {
        name: 'Poster 28',
        url: '../assets/images/catalog/poster7',
        size: '30-60',
        year: 1986,
        available: false,
        orientation: 'book',
        price: 700,
    },
    {
        name: 'Poster 29',
        url: '../assets/images/catalog/poster1',
        size: '40-60',
        year: 1982,
        available: true,
        orientation: 'book',
        price: 850,
    },
    {
        name: 'Poster 30',
        url: '../assets/images/catalog/poster2',
        size: '30-40',
        year: 1982,
        available: true,
        orientation: 'landscape',
        price: 550,
    },
    {
        name: 'Poster 31',
        url: '../assets/images/catalog/poster3',
        size: '40-60',
        year: 1982,
        available: true,
        orientation: 'book',
        price: 1200,
    },
    {
        name: 'Poster 32',
        url: '../assets/images/catalog/poster10',
        size: '20-30',
        year: 1987,
        available: true,
        orientation: 'landscape',
        price: 450,
    },
    {
        name: 'Poster 33',
        url: '../assets/images/catalog/poster11',
        size: '50-60',
        year: 1988,
        available: true,
        orientation: 'book',
        price: 1150,
    },
];

const catalogHTML = catalog.map(
  (item) => `<article class="catalog__card product-card">
                <picture class="product-card__picture">
                    <source type="image/webp" srcset="${item.url}.webp" />
                    <img src="${item.url}.jpg" alt="${item.name}" class="product-card__img" />
                </picture>
                <div class="product-card__info">
                    <div class="product-card__price">${item.price} ₽</div>
                    <div class="product-card__description">Постер | <span class="product-card__size">${item.size}</span></div>
                </div>

                <button type="button" class="btn-svg btn-svg__favorite js-addToFavorite">
                    <svg width="24" height="24">
                        <use xlink:href="assets/icons/symbols.svg#heart"></use>
                    </svg>
                </button>

                <button type="button" class="btn-svg btn-svg__cart js-addToCart">
                    <svg width="24" height="24">
                        <use xlink:href="assets/icons/symbols.svg#shopping-cart"></use>
                    </svg>
                </button>
            </article>`
);

const result = document.querySelector(".catalog__list");
result.innerHTML = catalogHTML.join("");

/* when document is ready */
$(function() {
  /* initiate plugin */
  $(".js-pagination").jPages({
      containerID: "catalogContainer",
      perPage: 12,
      first: false,
      previous: "Назад",
      next: "Вперед",
      last: false
  });

});

})();

