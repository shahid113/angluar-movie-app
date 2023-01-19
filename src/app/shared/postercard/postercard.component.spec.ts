import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostercardComponent } from './postercard.component';

describe('PostercardComponent', () => {
  let component: PostercardComponent;
  let fixture: ComponentFixture<PostercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostercardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
