import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDetailsComponentComponent } from '../person-details-component/person-details-component.component';


@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule,PersonDetailsComponentComponent],  
  templateUrl: './people-list-component.component.html',
  styleUrls: ['./people-list-component.component.css']
})
export class PeopleListComponentComponent {
  people = [
    { id: 1, name: 'Iliaz', technology: 'Big Data' },
    { id: 2, name: 'Jhon', technology: 'Angular' },
    { id: 3, name: 'Roy', technology: 'AI' }
  ];

  selectedPerson: any = null;

  selectPerson(person: any) {
    this.selectedPerson = person;  
  }
}