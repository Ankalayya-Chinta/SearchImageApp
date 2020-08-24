import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFavouriteComponent } from './add-favourite.component';

describe('AddFavouriteComponent', () => {
  let component: AddFavouriteComponent;
  let fixture: ComponentFixture<AddFavouriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFavouriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
