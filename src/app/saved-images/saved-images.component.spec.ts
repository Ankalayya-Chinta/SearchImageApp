import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedImagesComponent } from './saved-images.component';

describe('SavedImagesComponent', () => {
  let component: SavedImagesComponent;
  let fixture: ComponentFixture<SavedImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
