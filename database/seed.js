const faker = require('faker');
const db = require('./model.js');
const dataFormat = require('./utils/dataFormat.js')


const populate = function() {

  db.deleteAll();

  const dummyData = [];

  const neighborhoods = ['Last Hearth', 'Crofter\'s Village', 'Hornwood', 'Wolfswood', 'Cerwyn'];

  const cities = ['Ramsgate', 'Dreadfort', 'Winterfell', 'White Harbor', 'Barrowton'];

  const images = [
   'https://hrr49-fec.s3.us-east-2.amazonaws.com/bernard-hermant-KqOLr8OiQLU-unsplash.jpg',
   'https://hrr49-fec.s3.us-east-2.amazonaws.com/brett-jordan-Zjuvn60DXKg-unsplash.jpg',
   'https://hrr49-fec.s3.us-east-2.amazonaws.com/brian-babb-XbwHrt87mQ0-unsplash.jpg',
   'https://hrr49-fec.s3.us-east-2.amazonaws.com/designecologist-Ib_zdvEalGg-unsplash.jpg',
   'https://hrr49-fec.s3.us-east-2.amazonaws.com/dillon-kydd-3Ignkeds3w8-unsplash.jpg',
   'https://hrr49-fec.s3.us-east-2.amazonaws.com/erik-odiin-8L7GvIEJCi0-unsplash.jpg',
   'https://hrr49-fec.s3.us-east-2.amazonaws.com/evan-dvorkin-YWDVrk4C6F0-unsplash.jpg',
   'https://hrr49-fec.s3.us-east-2.amazonaws.com/fran-hogan-j9aikb6tv-M-unsplash.jpg',
   'https://hrr49-fec.s3.us-east-2.amazonaws.com/francesca-tosolini-XcVm8mn7NUM-unsplash.jpg',
   'https://hrr49-fec.s3.us-east-2.amazonaws.com/gustavo-zambelli-nEvzSXBIhiU-unsplash.jpg',
   'https://hrr49-fec.s3.us-east-2.amazonaws.com/hulki-okan-tabak-Nh0BgsygqlQ-unsplash.jpg',
   'https://hrr49-fec.s3.us-east-2.amazonaws.com/jessica-furtney-YOoucEImrKw-unsplash.jpg',
   'https://hrr49-fec.s3.us-east-2.amazonaws.com/nicolas-gonzalez-QjuJaMH1rEc-unsplash.jpg',
   'https://hrr49-fec.s3.us-east-2.amazonaws.com/pixasquare-4ojhpgKpS68-unsplash.jpg',
   'https://hrr49-fec.s3.us-east-2.amazonaws.com/ronnie-george-z11gbBo13ro-unsplash.jpg',
   'https://hrr49-fec.s3.us-east-2.amazonaws.com/stephen-leonardi-fFqqVSi96z0-unsplash.jpg',
   'https://hrr49-fec.s3.us-east-2.amazonaws.com/stephen-leonardi-XKIO6ZgCObo-unsplash.jpg',
   'https://hrr49-fec.s3.us-east-2.amazonaws.com/taylor-simpson-_pFtAOXw38c-unsplash.jpg',
   'https://hrr49-fec.s3.us-east-2.amazonaws.com/taylor-simpson-b1V49UCV3Jw-unsplash.jpg',
   'https://hrr49-fec.s3.us-east-2.amazonaws.com/taylor-simpson-DnZ-TNBNyTI-unsplash.jpg',
   'https://hrr49-fec.s3.us-east-2.amazonaws.com/taylor-simpson-jybWXT5mrlI-unsplash.jpg',
   'https://hrr49-fec.s3.us-east-2.amazonaws.com/zane-lee--tdnW2eErTM-unsplash.jpg',
   'https://hrr49-fec.s3.us-east-2.amazonaws.com/zane-lee-ECsnJcc0Dhs-unsplash.jpg'
  ]

  const priceChanges = ['+', '-', 'x', 'y', 'z']

    for (let i = 0; i < 100; i++) {

      const fakeHome = {
        streetAddress: faker.address.streetAddress(),
        state: 'CA',
        zipcode: faker.address.zipCode(),
        neighborhood: neighborhoods[Math.floor(Math.random() * (neighborhoods.length))],
        city: cities[Math.floor(Math.random() * (cities.length - 1))],
        bedrooms: Math.floor(Math.random() * (4 - 1) + 1),
        bathrooms: Math.floor(Math.random() * (3 - 1) + 1),
        sqft: Math.floor(Math.random() * (1400 - 500) + 500),
        publishDate: faker.date.past(1),
        price: dataFormat.formatPrice(Math.floor(Math.random() * (2740000 - 150000) + 150000)),
        priceChange: priceChanges[Math.floor(Math.random() * (priceChanges.length - 1))],
        onFavorites: false,
        img_url: images[Math.floor(Math.random() * (images.length))]
      }
    dummyData.push(fakeHome);
  }
   db.save(dummyData);
}

populate();