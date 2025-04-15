(function () {
    "use strict";
  
    let list = document.querySelector(".catalog__list");
    let filter = document.querySelector('.js-filter-form');
  
    let catalog = [
      {
          name: 'Poster 01',
          url: '../assets/images/catalog/poster1',
          size: '40-60',
          year: '1982',
          available: true,
          orientation: 'book',
          price: 850,
      },
      {
          name: 'Poster 02',
          url: '../assets/images/catalog/poster2',
          size: '30-40',
          year: '1982',
          available: true,
          orientation: 'landscape',
          price: 550,
      },
      {
          name: 'Poster 03',
          url: '../assets/images/catalog/poster3',
          size: '40-60',
          year: '1982',
          available: true,
          orientation: 'book',
          price: 1200,
      },
      {
          name: 'Poster 04',
          url: '../assets/images/catalog/poster4',
          size: '60-60',
          year: '1982',
          available: true,
          orientation: 'book',
          price: 1850,
      },
      {
          name: 'Poster 05',
          url: '../assets/images/catalog/poster5',
          size: '40-60',
          year: '1986',
          available: true,
          orientation: 'book',
          price: 1000,
      },
      {
          name: 'Poster 06',
          url: '../assets/images/catalog/poster6',
          size: '40-60',
          year: '1986',
          available: false,
          orientation: 'book',
          price: 850,
      },
      {
          name: 'Poster 07',
          url: '../assets/images/catalog/poster7',
          size: '30-60',
          year: '1986',
          available: false,
          orientation: 'book',
          price: 700,
      },
      {
          name: 'Poster 08',
          url: '../assets/images/catalog/poster8',
          size: '40-60',
          year: '1986',
          available: false,
          orientation: 'book',
          price: 1250,
      },
      {
          name: 'Poster 09',
          url: '../assets/images/catalog/poster9',
          size: '30-40',
          year: '1986',
          available: false,
          orientation: 'landscape',
          price: 550,
      },
      {
          name: 'Poster 10',
          url: '../assets/images/catalog/poster10',
          size: '20-30',
          year: '1987',
          available: true,
          orientation: 'landscape',
          price: 450,
      },
      {
          name: 'Poster 11',
          url: '../assets/images/catalog/poster11',
          size: '50-60',
          year: '1988',
          available: true,
          orientation: 'book',
          price: 1150,
      },
      {
          name: 'Poster 12',
          url: '../assets/images/catalog/poster12',
          size: '40-60',
          year: '1989',
          available: true,
          orientation: 'book',
          price: 1350,
      },
      {
          name: 'Poster 13',
          url: '../assets/images/catalog/poster11',
          size: '50-60',
          year: '1988',
          available: true,
          orientation: 'book',
          price: 1150,
      },
      {
          name: 'Poster 14',
          url: '../assets/images/catalog/poster9',
          size: '30-40',
          year: '1986',
          available: false,
          orientation: 'landscape',
          price: 550,
      },
      {
          name: 'Poster 15',
          url: '../assets/images/catalog/poster5',
          size: '40-60',
          year: '1986',
          available: true,
          orientation: 'book',
          price: 1000,
      },
      {
          name: 'Poster 16',
          url: '../assets/images/catalog/poster11',
          size: '50-60',
          year: '1988',
          available: true,
          orientation: 'book',
          price: 1150,
      },
      {
          name: 'Poster 17',
          url: '../assets/images/catalog/poster10',
          size: '20-30',
          year: '1987',
          available: true,
          orientation: 'landscape',
          price: 450,
      },
      {
          name: 'Poster 18',
          url: '../assets/images/catalog/poster7',
          size: '30-60',
          year: '1986',
          available: false,
          orientation: 'book',
          price: 700,
      },
      {
          name: 'Poster 19',
          url: '../assets/images/catalog/poster7',
          size: '30-60',
          year: '1986',
          available: false,
          orientation: 'book',
          price: 700,
      },
      {
          name: 'Poster 20',
          url: '../assets/images/catalog/poster10',
          size: '20-30',
          year: '1987',
          available: true,
          orientation: 'landscape',
          price: 450,
      },
      {
          name: 'Poster 21',
          url: '../assets/images/catalog/poster11',
          size: '50-60',
          year: '1988',
          available: true,
          orientation: 'book',
          price: 1150,
      },
      {
          name: 'Poster 22',
          url: '../assets/images/catalog/poster8',
          size: '40-60',
          year: '1986',
          available: false,
          orientation: 'book',
          price: 1250,
      },
      {
          name: 'Poster 23',
          url: '../assets/images/catalog/poster9',
          size: '30-40',
          year: '1986',
          available: false,
          orientation: 'landscape',
          price: 550,
      },
      {
          name: 'Poster 24',
          url: '../assets/images/catalog/poster10',
          size: '20-30',
          year: '1987',
          available: true,
          orientation: 'landscape',
          price: 450,
      },
      {
          name: 'Poster 25',
          url: '../assets/images/catalog/poster5',
          size: '40-60',
          year: '1986',
          available: true,
          orientation: 'book',
          price: 1000,
      },
      {
          name: 'Poster 26',
          url: '../assets/images/catalog/poster11',
          size: '50-60',
          year: '1988',
          available: true,
          orientation: 'book',
          price: 1150,
      },
      {
          name: 'Poster 27',
          url: '../assets/images/catalog/poster10',
          size: '20-30',
          year: '1987',
          available: true,
          orientation: 'landscape',
          price: 450,
      },
      {
          name: 'Poster 28',
          url: '../assets/images/catalog/poster7',
          size: '30-60',
          year: '1986',
          available: false,
          orientation: 'book',
          price: 700,
      },
      {
          name: 'Poster 29',
          url: '../assets/images/catalog/poster1',
          size: '40-60',
          year: '1982',
          available: true,
          orientation: 'book',
          price: 850,
      },
      {
          name: 'Poster 30',
          url: '../assets/images/catalog/poster2',
          size: '30-40',
          year: '1982',
          available: true,
          orientation: 'landscape',
          price: 550,
      },
      {
          name: 'Poster 31',
          url: '../assets/images/catalog/poster3',
          size: '40-60',
          year: '1982',
          available: true,
          orientation: 'book',
          price: 1200,
      },
      {
          name: 'Poster 32',
          url: '../assets/images/catalog/poster10',
          size: '20-30',
          year: '1987',
          available: true,
          orientation: 'landscape',
          price: 450,
      },
      {
          name: 'Poster 33',
          url: '../assets/images/catalog/poster11',
          size: '50-60',
          year: '1988',
          available: true,
          orientation: 'book',
          price: 1150,
      },
      {
        name: 'Poster 01',
        url: '../assets/images/catalog/poster1',
        size: '40-60',
        year: '1982',
        available: true,
        orientation: 'book',
        price: 850,
    },
    {
        name: 'Poster 02',
        url: '../assets/images/catalog/poster2',
        size: '30-40',
        year: '1982',
        available: true,
        orientation: 'landscape',
        price: 550,
    },
    {
        name: 'Poster 03',
        url: '../assets/images/catalog/poster3',
        size: '40-60',
        year: '1982',
        available: true,
        orientation: 'book',
        price: 1200,
    },
    {
        name: 'Poster 04',
        url: '../assets/images/catalog/poster4',
        size: '60-60',
        year: '1982',
        available: true,
        orientation: 'book',
        price: 1850,
    },
    {
        name: 'Poster 05',
        url: '../assets/images/catalog/poster5',
        size: '40-60',
        year: '1986',
        available: true,
        orientation: 'book',
        price: 1000,
    },
    {
        name: 'Poster 06',
        url: '../assets/images/catalog/poster6',
        size: '40-60',
        year: '1986',
        available: false,
        orientation: 'book',
        price: 850,
    },
    {
        name: 'Poster 07',
        url: '../assets/images/catalog/poster7',
        size: '30-60',
        year: '1986',
        available: false,
        orientation: 'book',
        price: 700,
    },
    {
        name: 'Poster 08',
        url: '../assets/images/catalog/poster8',
        size: '40-60',
        year: '1986',
        available: false,
        orientation: 'book',
        price: 1250,
    },
    {
        name: 'Poster 09',
        url: '../assets/images/catalog/poster9',
        size: '30-40',
        year: '1986',
        available: false,
        orientation: 'landscape',
        price: 550,
    },
    {
        name: 'Poster 10',
        url: '../assets/images/catalog/poster10',
        size: '20-30',
        year: '1987',
        available: true,
        orientation: 'landscape',
        price: 450,
    },
    {
        name: 'Poster 11',
        url: '../assets/images/catalog/poster11',
        size: '50-60',
        year: '1988',
        available: true,
        orientation: 'book',
        price: 1150,
    },
    {
        name: 'Poster 12',
        url: '../assets/images/catalog/poster12',
        size: '40-60',
        year: '1989',
        available: true,
        orientation: 'book',
        price: 1350,
    },
    {
        name: 'Poster 13',
        url: '../assets/images/catalog/poster11',
        size: '50-60',
        year: '1988',
        available: true,
        orientation: 'book',
        price: 1150,
    },
    {
        name: 'Poster 14',
        url: '../assets/images/catalog/poster9',
        size: '30-40',
        year: '1986',
        available: false,
        orientation: 'landscape',
        price: 550,
    },
    {
        name: 'Poster 15',
        url: '../assets/images/catalog/poster5',
        size: '40-60',
        year: '1986',
        available: true,
        orientation: 'book',
        price: 1000,
    },
    {
        name: 'Poster 16',
        url: '../assets/images/catalog/poster11',
        size: '50-60',
        year: '1988',
        available: true,
        orientation: 'book',
        price: 1150,
    },
    {
        name: 'Poster 17',
        url: '../assets/images/catalog/poster10',
        size: '20-30',
        year: '1987',
        available: true,
        orientation: 'landscape',
        price: 450,
    },
    {
        name: 'Poster 18',
        url: '../assets/images/catalog/poster7',
        size: '30-60',
        year: '1986',
        available: false,
        orientation: 'book',
        price: 700,
    },
    {
        name: 'Poster 19',
        url: '../assets/images/catalog/poster7',
        size: '30-60',
        year: '1986',
        available: false,
        orientation: 'book',
        price: 700,
    },
    {
        name: 'Poster 20',
        url: '../assets/images/catalog/poster10',
        size: '20-30',
        year: '1987',
        available: true,
        orientation: 'landscape',
        price: 450,
    },
    {
        name: 'Poster 21',
        url: '../assets/images/catalog/poster11',
        size: '50-60',
        year: '1988',
        available: true,
        orientation: 'book',
        price: 1150,
    },
    {
        name: 'Poster 22',
        url: '../assets/images/catalog/poster8',
        size: '40-60',
        year: '1986',
        available: false,
        orientation: 'book',
        price: 1250,
    },
    {
        name: 'Poster 23',
        url: '../assets/images/catalog/poster9',
        size: '30-40',
        year: '1986',
        available: false,
        orientation: 'landscape',
        price: 550,
    },
    {
        name: 'Poster 24',
        url: '../assets/images/catalog/poster10',
        size: '20-30',
        year: '1987',
        available: true,
        orientation: 'landscape',
        price: 450,
    },
    {
        name: 'Poster 25',
        url: '../assets/images/catalog/poster5',
        size: '40-60',
        year: '1986',
        available: true,
        orientation: 'book',
        price: 1000,
    },
    {
        name: 'Poster 26',
        url: '../assets/images/catalog/poster11',
        size: '50-60',
        year: '1988',
        available: true,
        orientation: 'book',
        price: 1150,
    },
    {
        name: 'Poster 27',
        url: '../assets/images/catalog/poster10',
        size: '20-30',
        year: '1987',
        available: true,
        orientation: 'landscape',
        price: 450,
    },
    {
        name: 'Poster 28',
        url: '../assets/images/catalog/poster7',
        size: '30-60',
        year: '1986',
        available: false,
        orientation: 'book',
        price: 700,
    },
    {
        name: 'Poster 29',
        url: '../assets/images/catalog/poster1',
        size: '40-60',
        year: '1982',
        available: true,
        orientation: 'book',
        price: 850,
    },
    {
        name: 'Poster 30',
        url: '../assets/images/catalog/poster2',
        size: '30-40',
        year: '1982',
        available: true,
        orientation: 'landscape',
        price: 550,
    },
    {
        name: 'Poster 31',
        url: '../assets/images/catalog/poster3',
        size: '40-60',
        year: '1982',
        available: true,
        orientation: 'book',
        price: 1200,
    },
    {
        name: 'Poster 32',
        url: '../assets/images/catalog/poster10',
        size: '20-30',
        year: '1987',
        available: true,
        orientation: 'landscape',
        price: 450,
    },
    {
        name: 'Poster 33',
        url: '../assets/images/catalog/poster11',
        size: '50-60',
        year: '1988',
        available: true,
        orientation: 'book',
        price: 1150,
    },
    {
          name: 'Poster 01',
          url: '../assets/images/catalog/poster1',
          size: '40-60',
          year: '1982',
          available: true,
          orientation: 'book',
          price: 850,
      },
      {
          name: 'Poster 02',
          url: '../assets/images/catalog/poster2',
          size: '30-40',
          year: '1982',
          available: true,
          orientation: 'landscape',
          price: 550,
      },
      {
          name: 'Poster 03',
          url: '../assets/images/catalog/poster3',
          size: '40-60',
          year: '1982',
          available: true,
          orientation: 'book',
          price: 1200,
      },
      {
          name: 'Poster 04',
          url: '../assets/images/catalog/poster4',
          size: '60-60',
          year: '1982',
          available: true,
          orientation: 'book',
          price: 1850,
      },
      {
          name: 'Poster 05',
          url: '../assets/images/catalog/poster5',
          size: '40-60',
          year: '1986',
          available: true,
          orientation: 'book',
          price: 1000,
      },
      {
          name: 'Poster 06',
          url: '../assets/images/catalog/poster6',
          size: '40-60',
          year: '1986',
          available: false,
          orientation: 'book',
          price: 850,
      },
      {
          name: 'Poster 07',
          url: '../assets/images/catalog/poster7',
          size: '30-60',
          year: '1986',
          available: false,
          orientation: 'book',
          price: 700,
      },
      {
          name: 'Poster 08',
          url: '../assets/images/catalog/poster8',
          size: '40-60',
          year: '1986',
          available: false,
          orientation: 'book',
          price: 1250,
      },
      {
          name: 'Poster 09',
          url: '../assets/images/catalog/poster9',
          size: '30-40',
          year: '1986',
          available: false,
          orientation: 'landscape',
          price: 550,
      },
      {
          name: 'Poster 10',
          url: '../assets/images/catalog/poster10',
          size: '20-30',
          year: '1987',
          available: true,
          orientation: 'landscape',
          price: 450,
      },
      {
          name: 'Poster 11',
          url: '../assets/images/catalog/poster11',
          size: '50-60',
          year: '1988',
          available: true,
          orientation: 'book',
          price: 1150,
      },
      {
          name: 'Poster 12',
          url: '../assets/images/catalog/poster12',
          size: '40-60',
          year: '1989',
          available: true,
          orientation: 'book',
          price: 1350,
      },
      {
          name: 'Poster 13',
          url: '../assets/images/catalog/poster11',
          size: '50-60',
          year: '1988',
          available: true,
          orientation: 'book',
          price: 1150,
      },
      {
          name: 'Poster 14',
          url: '../assets/images/catalog/poster9',
          size: '30-40',
          year: '1986',
          available: false,
          orientation: 'landscape',
          price: 550,
      },
      {
          name: 'Poster 15',
          url: '../assets/images/catalog/poster5',
          size: '40-60',
          year: '1986',
          available: true,
          orientation: 'book',
          price: 1000,
      },
      {
          name: 'Poster 16',
          url: '../assets/images/catalog/poster11',
          size: '50-60',
          year: '1988',
          available: true,
          orientation: 'book',
          price: 1150,
      },
      {
          name: 'Poster 17',
          url: '../assets/images/catalog/poster10',
          size: '20-30',
          year: '1987',
          available: true,
          orientation: 'landscape',
          price: 450,
      },
      {
          name: 'Poster 18',
          url: '../assets/images/catalog/poster7',
          size: '30-60',
          year: '1986',
          available: false,
          orientation: 'book',
          price: 700,
      },
      {
          name: 'Poster 19',
          url: '../assets/images/catalog/poster7',
          size: '30-60',
          year: '1986',
          available: false,
          orientation: 'book',
          price: 700,
      },
      {
          name: 'Poster 20',
          url: '../assets/images/catalog/poster10',
          size: '20-30',
          year: '1987',
          available: true,
          orientation: 'landscape',
          price: 450,
      },
      {
          name: 'Poster 21',
          url: '../assets/images/catalog/poster11',
          size: '50-60',
          year: '1988',
          available: true,
          orientation: 'book',
          price: 1150,
      },
      {
          name: 'Poster 22',
          url: '../assets/images/catalog/poster8',
          size: '40-60',
          year: '1986',
          available: false,
          orientation: 'book',
          price: 1250,
      },
      {
          name: 'Poster 23',
          url: '../assets/images/catalog/poster9',
          size: '30-40',
          year: '1986',
          available: false,
          orientation: 'landscape',
          price: 550,
      },
      {
          name: 'Poster 24',
          url: '../assets/images/catalog/poster10',
          size: '20-30',
          year: '1987',
          available: true,
          orientation: 'landscape',
          price: 450,
      },
      {
          name: 'Poster 25',
          url: '../assets/images/catalog/poster5',
          size: '40-60',
          year: '1986',
          available: true,
          orientation: 'book',
          price: 1000,
      },
      {
          name: 'Poster 26',
          url: '../assets/images/catalog/poster11',
          size: '50-60',
          year: '1988',
          available: true,
          orientation: 'book',
          price: 1150,
      },
      {
          name: 'Poster 27',
          url: '../assets/images/catalog/poster10',
          size: '20-30',
          year: '1987',
          available: true,
          orientation: 'landscape',
          price: 450,
      },
      {
          name: 'Poster 28',
          url: '../assets/images/catalog/poster7',
          size: '30-60',
          year: '1986',
          available: false,
          orientation: 'book',
          price: 700,
      },
      {
          name: 'Poster 29',
          url: '../assets/images/catalog/poster1',
          size: '40-60',
          year: '1982',
          available: true,
          orientation: 'book',
          price: 850,
      },
      {
          name: 'Poster 30',
          url: '../assets/images/catalog/poster2',
          size: '30-40',
          year: '1982',
          available: true,
          orientation: 'landscape',
          price: 550,
      },
      {
          name: 'Poster 31',
          url: '../assets/images/catalog/poster3',
          size: '40-60',
          year: '1982',
          available: true,
          orientation: 'book',
          price: 1200,
      },
      {
          name: 'Poster 32',
          url: '../assets/images/catalog/poster10',
          size: '20-30',
          year: '1987',
          available: true,
          orientation: 'landscape',
          price: 450,
      },
      {
          name: 'Poster 33',
          url: '../assets/images/catalog/poster11',
          size: '50-60',
          year: '1988',
          available: true,
          orientation: 'book',
          price: 1150,
      },
      {
          name: 'Poster 01',
          url: '../assets/images/catalog/poster1',
          size: '40-60',
          year: '1982',
          available: true,
          orientation: 'book',
          price: 850,
      },
      {
          name: 'Poster 02',
          url: '../assets/images/catalog/poster2',
          size: '30-40',
          year: '1982',
          available: true,
          orientation: 'landscape',
          price: 550,
      },
      {
          name: 'Poster 03',
          url: '../assets/images/catalog/poster3',
          size: '40-60',
          year: '1982',
          available: true,
          orientation: 'book',
          price: 1200,
      },
      {
          name: 'Poster 04',
          url: '../assets/images/catalog/poster4',
          size: '60-60',
          year: '1982',
          available: true,
          orientation: 'book',
          price: 1850,
      },
      {
          name: 'Poster 05',
          url: '../assets/images/catalog/poster5',
          size: '40-60',
          year: '1986',
          available: true,
          orientation: 'book',
          price: 1000,
      },
      {
          name: 'Poster 06',
          url: '../assets/images/catalog/poster6',
          size: '40-60',
          year: '1986',
          available: false,
          orientation: 'book',
          price: 850,
      },
      {
          name: 'Poster 07',
          url: '../assets/images/catalog/poster7',
          size: '30-60',
          year: '1986',
          available: false,
          orientation: 'book',
          price: 700,
      },
      {
          name: 'Poster 08',
          url: '../assets/images/catalog/poster8',
          size: '40-60',
          year: '1986',
          available: false,
          orientation: 'book',
          price: 1250,
      },
      {
          name: 'Poster 09',
          url: '../assets/images/catalog/poster9',
          size: '30-40',
          year: '1986',
          available: false,
          orientation: 'landscape',
          price: 550,
      },
      {
          name: 'Poster 10',
          url: '../assets/images/catalog/poster10',
          size: '20-30',
          year: '1987',
          available: true,
          orientation: 'landscape',
          price: 450,
      },
      {
          name: 'Poster 11',
          url: '../assets/images/catalog/poster11',
          size: '50-60',
          year: '1988',
          available: true,
          orientation: 'book',
          price: 1150,
      },
      {
          name: 'Poster 12',
          url: '../assets/images/catalog/poster12',
          size: '40-60',
          year: '1989',
          available: true,
          orientation: 'book',
          price: 1350,
      },
      {
          name: 'Poster 13',
          url: '../assets/images/catalog/poster11',
          size: '50-60',
          year: '1988',
          available: true,
          orientation: 'book',
          price: 1150,
      },
      {
          name: 'Poster 14',
          url: '../assets/images/catalog/poster9',
          size: '30-40',
          year: '1986',
          available: false,
          orientation: 'landscape',
          price: 550,
      },
      {
          name: 'Poster 15',
          url: '../assets/images/catalog/poster5',
          size: '40-60',
          year: '1986',
          available: true,
          orientation: 'book',
          price: 1000,
      },
      {
          name: 'Poster 16',
          url: '../assets/images/catalog/poster11',
          size: '50-60',
          year: '1988',
          available: true,
          orientation: 'book',
          price: 1150,
      },
      {
          name: 'Poster 17',
          url: '../assets/images/catalog/poster10',
          size: '20-30',
          year: '1987',
          available: true,
          orientation: 'landscape',
          price: 450,
      },
      {
          name: 'Poster 18',
          url: '../assets/images/catalog/poster7',
          size: '30-60',
          year: '1986',
          available: false,
          orientation: 'book',
          price: 700,
      },
      {
          name: 'Poster 19',
          url: '../assets/images/catalog/poster7',
          size: '30-60',
          year: '1986',
          available: false,
          orientation: 'book',
          price: 700,
      },
      {
          name: 'Poster 20',
          url: '../assets/images/catalog/poster10',
          size: '20-30',
          year: '1987',
          available: true,
          orientation: 'landscape',
          price: 450,
      },
      {
          name: 'Poster 21',
          url: '../assets/images/catalog/poster11',
          size: '50-60',
          year: '1988',
          available: true,
          orientation: 'book',
          price: 1150,
      },
      {
          name: 'Poster 22',
          url: '../assets/images/catalog/poster8',
          size: '40-60',
          year: '1986',
          available: false,
          orientation: 'book',
          price: 1250,
      },
      {
          name: 'Poster 23',
          url: '../assets/images/catalog/poster9',
          size: '30-40',
          year: '1986',
          available: false,
          orientation: 'landscape',
          price: 550,
      },
      {
          name: 'Poster 24',
          url: '../assets/images/catalog/poster10',
          size: '20-30',
          year: '1987',
          available: true,
          orientation: 'landscape',
          price: 450,
      },
      {
          name: 'Poster 25',
          url: '../assets/images/catalog/poster5',
          size: '40-60',
          year: '1986',
          available: true,
          orientation: 'book',
          price: 1000,
      },
      {
          name: 'Poster 26',
          url: '../assets/images/catalog/poster11',
          size: '50-60',
          year: '1988',
          available: true,
          orientation: 'book',
          price: 1150,
      },
      {
          name: 'Poster 27',
          url: '../assets/images/catalog/poster10',
          size: '20-30',
          year: '1987',
          available: true,
          orientation: 'landscape',
          price: 450,
      },
      {
          name: 'Poster 28',
          url: '../assets/images/catalog/poster7',
          size: '30-60',
          year: '1986',
          available: false,
          orientation: 'book',
          price: 700,
      },
      {
          name: 'Poster 29',
          url: '../assets/images/catalog/poster1',
          size: '40-60',
          year: '1982',
          available: true,
          orientation: 'book',
          price: 850,
      },
      {
          name: 'Poster 30',
          url: '../assets/images/catalog/poster2',
          size: '30-40',
          year: '1982',
          available: true,
          orientation: 'landscape',
          price: 550,
      },
      {
          name: 'Poster 31',
          url: '../assets/images/catalog/poster3',
          size: '40-60',
          year: '1982',
          available: true,
          orientation: 'book',
          price: 1200,
      },
      {
          name: 'Poster 32',
          url: '../assets/images/catalog/poster10',
          size: '20-30',
          year: '1987',
          available: true,
          orientation: 'landscape',
          price: 450,
      },
      {
          name: 'Poster 33',
          url: '../assets/images/catalog/poster11',
          size: '50-60',
          year: '1988',
          available: true,
          orientation: 'book',
          price: 1150,
      },
  ];
  
  
  let productFilter = catalog;
  showProduct(productFilter);
  initiatePagination();
  function showProduct(productFilter){
      list.innerHTML = '';
      productFilter.forEach(item => {
          let newItem = document.createElement('article');
          newItem.classList.add('catalog__item');
  
          let templateContent = `<div class="catalog__card product-card"><picture class="product-card__picture">
                      <source type="image/webp" srcset="${item.url}.webp" />
                      <img src="${item.url}.jpg" alt="${item.name}" class="product-card__img" />
                  </picture>
                  <div class="product-card__info">
                      <div class="product-card__price">${item.price} ₽</div>
                      <div class="product-card__description">Постер | <span class="product-card__size">${item.size}</span></div>
                  </div>
  
                  <a href="detail.html" class="product-card__link"></a>
  
                  <button type="button" class="btn-svg btn-svg__favorite js-addToFavorite">
                      <svg width="24" height="24">
                          <use xlink:href="assets/icons/symbols.svg#heart"></use>
                      </svg>
                  </button>
  
                  <button type="button" class="btn-svg btn-svg__cart js-addToCart">
                      <svg width="24" height="24">
                          <use xlink:href="assets/icons/symbols.svg#shopping-cart"></use>
                      </svg>
                  </button></div>`;
  
          newItem.innerHTML = (templateContent);
  
          list.appendChild(newItem);
      });
  }
  
  filter.addEventListener('submit', function(event){
      event.preventDefault();
      // Собираем все чекбоксы с name="year", которые отмечены
      let checkedYears = Array.from(document.querySelectorAll('input[name="year"]:checked'))
                              .map(input => input.value);
  
      // Собираем все чекбоксы с name="orientation", которые отмечены
      let checkedOrientation = Array.from(document.querySelectorAll('input[name="orientation"]:checked'))
                              .map(input => input.value);
  
      // Собираем все чекбоксы с name="available", которые отмечены
      let checkedAvailability = document.querySelector('input[name="available"]:checked')?.value;
  
      // Минимальная и максимальная цена
      let minPrice = document.querySelector('#input-0').value;
  
      let maxPrice = document.querySelector('#input-1').value;
  
  
      // Фильтруем товары по выбранным годам
      productFilter = catalog.filter(item => {
          let matchYear = checkedYears.length === 0 || checkedYears.includes(item.year);
  
          let matchOrientation = checkedOrientation.length === 0 || checkedOrientation.includes(item.orientation);
  
          let matchAvailability = checkedAvailability === '' || String(item.available) === checkedAvailability;
  
          let matchPrice = item.price >= minPrice && item.price <= maxPrice;
  
          return matchYear && matchOrientation && matchAvailability && matchPrice;
      });
      showProduct(productFilter);
      initiatePagination();
  })
  
  filter.addEventListener('reset', function(event){
      productFilter = catalog;
      showProduct(productFilter);
      initiatePagination();
  })
  
  
  // Иниция пагинации с учетом изменения размера экрана
  
  function destroyPagination() {
      // Удаляем jPages
      $(".js-pagination-num").jPages("destroy");
  }
  
  function initiatePagination(midRangeValue) {
      $(".js-pagination-num").jPages({
          containerID: "js-catalog-container",
          perPage: 12,
          midRange: midRangeValue,
          minHeight: false,
          first: false,
          previous: ".pagination__prev",
          next: ".pagination__next",
          last: false
      });
  }
  
  // Текущий режим пагинации
  let currentPaginationSetting = null;
  
  function checkAndApplyPagination() {
      let isMobile = window.innerWidth < 600;
      let newSetting = isMobile ? 3 : 6;
  
      if (currentPaginationSetting !== newSetting) {
          destroyPagination();
          initiatePagination(newSetting);
          currentPaginationSetting = newSetting;
      }
  }
  
  // При загрузке страницы
  document.addEventListener("DOMContentLoaded", function () {
      checkAndApplyPagination();
  });
  
  // При изменении размера окна
  window.addEventListener("resize", function () {
      checkAndApplyPagination();
  });
  
  
  })();
  
  