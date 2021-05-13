import { Meteor } from 'meteor/meteor';
import { Series } from '../imports/api/SeriesCollections';

import '../imports/api/methods/resetViews'
import '../imports/api/publications/allSeries'

Meteor.startup(() => {

  if (Series.find().count() == 0) {
    Series.insert({
      img: 'https://ing-unc.s3.amazonaws.com/gambito-de-luifa.png',
      name: 'Gambito de Luifa',
      views: 0
    });
    Series.insert({
      img: 'https://ing-unc.s3.amazonaws.com/la-caida.jpg',
      name: 'La Caida',
      views: 0
    });
    Series.insert({
      img: 'https://ing-unc.s3.amazonaws.com/balientes.jpeg',
      name: 'Balientes',
      views: 0
    });
    Series.insert({
      img: 'https://ing-unc.s3.amazonaws.com/gloria.png',
      name: 'Gloria',
      views: 0
    });
    Series.insert({
      img: 'https://ing-unc.s3.amazonaws.com/heart-of-a-lion.png',
      name: 'Heart of a Lion',
      views: 0
    });
    Series.insert({
      img: 'https://ing-unc.s3.amazonaws.com/el-internacional.png ',
      name: 'El internacional',
      views: 0
    });
  }
});
