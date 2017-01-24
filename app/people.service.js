"use strict";
var PEOPLE = [
    { id: 1, name: 'Luke Skywalker', height: 177, weight: 70 },
    { id: 2, name: 'Darth Vader', height: 200, weight: 100 },
    { id: 3, name: 'Han Solo', height: 185, weight: 85 }
];
var PeopleService = (function () {
    function PeopleService() {
    }
    PeopleService.prototype.getAll = function () {
        return PEOPLE;
    };
    PeopleService.prototype.get = function (id) {
        return this.clone(PEOPLE.find(function (p) { return p.id === id; }));
    };
    PeopleService.prototype.save = function (person) {
        var originalPerson = PEOPLE.find(function (p) { return p.id === person.id; });
        if (originalPerson)
            Object.assign(originalPerson, person);
    };
    PeopleService.prototype.clone = function (object) {
        return JSON.parse(JSON.stringify(object));
    };
    return PeopleService;
}());
exports.PeopleService = PeopleService;
//# sourceMappingURL=people.service.js.map