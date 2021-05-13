import { Series } from "../SeriesCollections"

Meteor.publish('allSeries', function () {
    return Series.find();
})
