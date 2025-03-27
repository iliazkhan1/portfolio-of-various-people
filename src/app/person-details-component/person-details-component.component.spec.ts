import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailsComponentComponent } from './person-details-component.component';

describe('PersonDetailsComponentComponent', () => {
  let component: PersonDetailsComponentComponent;
  let fixture: ComponentFixture<PersonDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonDetailsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
