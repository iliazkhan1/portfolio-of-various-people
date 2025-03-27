import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PeopleListComponentComponent } from './people-list-component/people-list-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PeopleListComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedPerson: any = null; 

  handlePersonSelection(person: any) {
    this.selectedPerson = person; 
  }
}

