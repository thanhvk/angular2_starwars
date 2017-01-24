import { Person } from './person';

const PEOPLE: Person[] = [
		{id: 1, name: 'Luke Skywalker', height: 177, weight: 70},
		{id: 2, name: 'Darth Vader', height: 200, weight: 100},
		{id: 3, name: 'Han Solo', height: 185, weight: 85}
	];

export class PeopleService {
	getAll(): Person[] {
		return PEOPLE;
	}

	get(id: Number): Person {
		return this.clone(PEOPLE.find(p => p.id === id));
	}

	save(person: Person) {
		let originalPerson = PEOPLE.find(p => p.id === person.id);
		if (originalPerson) Object.assign(originalPerson, person);
	}

	private clone(object: any){
		return JSON.parse(JSON.stringify(object));
	}
}