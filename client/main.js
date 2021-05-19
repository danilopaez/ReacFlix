import { Template } from 'meteor/templating';
import { Vaccines } from '../imports/api/VaccinesCollection';


import './main.html';

Template.VaccinesTempl.onCreated(function () {

  Meteor.subscribe('getVaccines', 40);
});

Template.VaccinesTempl.helpers({
  vaccine() {
    console.log(Vaccines.find().count())
    return Vaccines.findOne();
  },
});
