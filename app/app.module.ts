import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routes';

import { PeopleService } from './people.service';

import { AppComponent }  from './app.component';
import { PeopleListComponent } from './people-list.component';
import { PersonDetailsComponent } from './person-details.component';


@NgModule({
	imports: [ 
	  	BrowserModule, 
	  	FormsModule,
	  	routing 
  	],
  	declarations: [ AppComponent, PeopleListComponent, PersonDetailsComponent ],
  	providers: [ PeopleService ],
  	bootstrap: [ AppComponent ]
})
export class AppModule { }
