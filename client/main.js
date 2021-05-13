import { Template } from 'meteor/templating';
import { Series } from '../imports/api/SeriesCollections';


import './main.html';

Template.Series.onCreated(function () {

  Meteor.subscribe('allSeries');
});

Template.Series.helpers({
  series() {
    return Series.find({}, { sort: { views: -1 } })
  },
  showReset() {
    return Series.find({ views: { $gte: 10 } }).count() > 0;
  }
});



Template.Series.events({
  'click img'(e) {
    console.log(this.name);

    Series.update(this._id, { $inc: { views: 1 } })
  },
  'click button'() {

    Meteor.call('resetViews', e => {
      if (e)
        throw new Meteor.Error('Error', e.reason)

    })
  }
});
