import { Meteor } from 'meteor/meteor';
import { Vaccines } from '../imports/api/VaccinesCollection'


import '../imports/api/publications/vaccines'

Meteor.startup(function () {
    if (Vaccines.find().count() === 0) {
        Vaccines.insert({
            "name": "Sputnik V",
            "series": "A",
            "dose": 200,
            "ageMin": 90,
            "url": "/sputnik.jpg"
        });
        Vaccines.insert({
            "name": "Sputnik V",
            "series": "B",
            "dose": 100,
            "ageMin": 80,
            "url": "/sputnik.jpg"
        });

    }
})
