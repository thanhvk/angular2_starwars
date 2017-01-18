import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PeopleService } from './people.service';

import { AppComponent }  from './app.component';
import { PeopleListComponent } from './people-list.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, PeopleListComponent ],
  providers: [ PeopleService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
