import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PeopleService } from './people.service';

import { Person } from './person';

@Component({
	selector: 'person-details',
	templateUrl: 'app/person-details.component.html'
})
export class PersonDetailsComponent implements OnInit, OnDestroy {
	professions: string[] = ['jedi', 'bounty hunter', 'princess', 'sith lord'];
	person: Person;
	sub: any;

	constructor(private peopleService: PeopleService,
				private route: ActivatedRoute,
				private router: Router) {
	}

	ngOnInit() {
		this.sub = this.route.params.subscribe(
			params => {
				let id = parseInt(params['id']);
				this.person = this.peopleService.get(id);
			}
		);
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	gotoPeopleList() {
		let link = ['/persons'];
		this.router.navigate(link);
	}

	savePersonDetails(){
        this.peopleService.save(this.person);
    }
}