import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person-details',
  standalone: true,
  imports: [],
  templateUrl: './person-details-component.component.html',
  styleUrls: ['./person-details-component.component.css']
})
export class PersonDetailsComponentComponent {
  @Input() person: any; 
}