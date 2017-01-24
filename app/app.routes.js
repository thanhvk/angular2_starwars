"use strict";
var router_1 = require('@angular/router');
var people_list_component_1 = require('./people-list.component');
var person_details_component_1 = require('./person-details.component');
var routes = [
    {
        path: 'persons',
        component: people_list_component_1.PeopleListComponent
    },
    {
        path: 'persons/:id',
        component: person_details_component_1.PersonDetailsComponent
    },
    {
        path: '',
        redirectTo: 'persons',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map