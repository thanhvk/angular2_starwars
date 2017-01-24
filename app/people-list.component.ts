import { Component, OnInit } from '@angular/core';

import { PeopleService } from './people.service';
import { Person } from './person';

@Component({
	selector: 'people-list',
	template: `
		<ul>
			<li *ngFor="let person of people">
				<a href="#" [routerLink]="['/persons', person.id]"> 
					{{person.name}}
				</a>
			</li>
		</ul>
	`
})
export class PeopleListComponent implements OnInit {
	people: Person[] = [];
	selectedPerson: Person;

	constructor(private peopleService: PeopleService) {		
	};

	ngOnInit() {
		this.people = this.peopleService.getAll();
	}

	selectPerson(person: Person) {
		this.selectedPerson = person;
	}
}