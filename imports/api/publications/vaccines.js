import { Vaccines } from "../VaccinesCollection"

Meteor.publish('getVaccines', function (age) {
    check(age, Number);
    console.log(age);
    console.log(Vaccines.find({ "ageMin": { $lte: age }, "dose": { $gt: 0 } }).count());

    return Vaccines.find({ "ageMin": { $lte: age }, "dose": { $gt: 0 } });
})

