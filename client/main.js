import { Template } from 'meteor/templating';


import './main.html';

Template.Equipos.onCreated(function () {

  Session.set('a', 1);
});

Template.Equipos.helpers({
  A() {

    return Session.get('a');
  },
});



Template.Equipos.events({
  'click button'() {

    Session.set('a', Session.get('a') + 10)
  },
});
