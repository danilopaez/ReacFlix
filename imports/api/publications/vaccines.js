import { Vaccines } from "../VaccinesCollection"

Meteor.publish('getVaccines', function (age) {
    check(age, Number);

    return Vaccines.find({ "ageMin": { $lte: age }, "dose": { $gt: 0 } });
})

