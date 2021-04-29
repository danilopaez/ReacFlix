import { Template } from 'meteor/templating';


import './main.html';

Template.Equipos.onCreated(function () {

  Session.set('a', 1);
  Session.set('b', 2);
});

Template.Equipos.helpers({
  a: () => Session.get('a'),
  b: () => Session.get('b'),
  c: () => Session.get('a') + Session.get('b'),

});



Template.Equipos.events({
  'click button'() {

    Session.set('a', Session.get('a') + 10)
  },
  'keyup input'(e) {

    Session.set('b', parseFloat(e.target.value) || 0)
  }
});
