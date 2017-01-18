import { Component, OnInit } from '@angular/core';

import { PeopleService } from './people.service';
import { Person } from './person';

@Component({
	selector: 'people-list',
	template: `
		<ul>
			<li *ngFor="let person of people" (click)=selectPerson(person)>
				{{person.name}}
			</li>
		</ul>
		<div>

		</div>
	`
})
export class PeopleListComponent implements OnInit {
	people: Person[] = [];
	selectedPerson: Person;

	constructor(private _peopleService: PeopleService) {		
	};

	ngOnInit() {
		this.people = this._peopleService.getAll();
	}

	selectPerson(person: Person) {
		this.selectedPerson = person;
	}
}