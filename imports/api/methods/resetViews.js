import { Series } from '../SeriesCollections';

Meteor.methods({
    'resetViews'() {
        Series.update({}, { $set: { views: 0 } }, { multi: 1 });
    }
})